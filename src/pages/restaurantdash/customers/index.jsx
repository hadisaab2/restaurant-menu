import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Header,
  HeaderTitle,
  SearchContainer,
  SearchInput,
  CustomersTable,
  TableHeader,
  TableRow,
  TableCell,
  PhoneCell,
  NameCell,
  SourcesCell,
  SourceBadge,
  ChatButton,
  EmptyState,
  LoadingState,
  ErrorState,
  ChatModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ChatMessages,
  MessageBubble,
  MessageText,
  MessageTime,
  MessageInput,
  SendButton,
  ThreadList,
  ThreadItem,
  ThreadTitle,
  ThreadDate,
} from "./styles";
import { getCookie } from "../../../utilities/manageCookies";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getCustomers = async (restaurantId, searchQuery) => {
  try {
    const token = getCookie("accessToken");
    let url = `${BASE_URL}/customers`;
    if (searchQuery) {
      url += `?q=${encodeURIComponent(searchQuery)}`;
    }
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

const getCustomerThreads = async (phone) => {
  try {
    const token = getCookie("accessToken");
    const response = await axios.get(`${BASE_URL}/customers/${phone}/threads`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching customer threads:", error);
    throw error;
  }
};

const replyToThread = async (threadId, message) => {
  try {
    const token = getCookie("accessToken");
    const response = await axios.post(
      `${BASE_URL}/threads/admin/${threadId}/reply`,
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error replying to thread:", error);
    throw error;
  }
};

const createThread = async (restaurantId, customerPhone, customerName, message) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/threads`,
      {
        restaurant_id: restaurantId,
        customer_phone: customerPhone,
        customer_name: customerName,
        subject: "Admin Message",
        type: "question",
        channel: "admin_chat",
        message,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating thread:", error);
    throw error;
  }
};

const getRestaurantInfo = async () => {
  try {
    const token = getCookie("accessToken");
    const userInfo = JSON.parse(getCookie("userInfo") || "{}");
    const response = await axios.get(
      `${BASE_URL}/restaurants/${userInfo.restaurant_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant info:", error);
    throw error;
  }
};

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showChatModal, setShowChatModal] = useState(false);
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const searchInputRef = useRef(null);

  const userInfo = JSON.parse(getCookie("userInfo") || "{}");
  const restaurantId = userInfo?.restaurant_id;

  useEffect(() => {
    if (restaurantId) {
      fetchCustomers();
      fetchRestaurantInfo();
    }
  }, [restaurantId, searchQuery]);

  useEffect(() => {
    // Keep focus on search input
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchQuery]);

  const fetchRestaurantInfo = async () => {
    try {
      const data = await getRestaurantInfo();
      setRestaurantInfo(data);
    } catch (err) {
      console.error("Error fetching restaurant info:", err);
    }
  };

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCustomers(restaurantId, searchQuery);
      setCustomers(data.data || []);
    } catch (err) {
      setError("Failed to load customers. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChat = async (customer) => {
    setSelectedCustomer(customer);
    setShowChatModal(true);
    setSelectedThread(null);
    setMessages([]);
    
    try {
      const data = await getCustomerThreads(customer.phone);
      setThreads(data.data || []);
      
      // If customer has a threadId, select it automatically
      if (customer.threadId) {
        const thread = data.data?.find((t) => t.id === customer.threadId);
        if (thread) {
          handleSelectThread(thread);
        }
      }
    } catch (err) {
      console.error("Error loading threads:", err);
    }
  };

  const handleSelectThread = (thread) => {
    setSelectedThread(thread);
    setMessages(thread.messages || []);
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || sendingMessage) return;

    try {
      setSendingMessage(true);

      // If no thread exists, create one and send via WhatsApp
      if (!selectedThread && threads.length === 0) {
        // Create thread with a placeholder message (this creates the thread)
        const threadData = await createThread(
          restaurantId,
          selectedCustomer.phone,
          selectedCustomer.name,
          "Thread started"
        );

        // Now add the admin message to the thread with sender_type="owner"
        let threadId = null;
        if (threadData?.data?.thread?.id) {
          threadId = threadData.data.thread.id;
        } else if (threadData?.data?.id) {
          threadId = threadData.data.id;
        }

        if (!threadId) {
          console.error("Failed to get thread ID from created thread:", threadData);
          throw new Error("Failed to create thread");
        }

        // Add admin message
        await replyToThread(threadId, newMessage);

        // Send via WhatsApp
        const phoneNumber = selectedCustomer.phone.replace(/\D/g, ""); // Remove non-digits
        const whatsappNumber = phoneNumber.startsWith("961")
          ? phoneNumber
          : `961${phoneNumber}`;
        const encodedMessage = encodeURIComponent(newMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");

        // Wait a bit for the database to update, then refresh threads
        await new Promise(resolve => setTimeout(resolve, 800));
        const data = await getCustomerThreads(selectedCustomer.phone);
        const updatedThreads = data.data || [];
        setThreads(updatedThreads);
        
        if (updatedThreads.length > 0) {
          // Find the most recent thread (should be the one we just created)
          const sortedThreads = [...updatedThreads].sort((a, b) => {
            const dateA = a.created_at ? new Date(a.created_at) : new Date(0);
            const dateB = b.created_at ? new Date(b.created_at) : new Date(0);
            return dateB - dateA;
          });
          const newThread = sortedThreads[0];
          
          // If messages aren't loaded, fetch thread details
          if (!newThread.messages || newThread.messages.length === 0) {
            try {
              const token = getCookie("accessToken");
              const threadDetailsResponse = await axios.get(
                `${BASE_URL}/threads/admin/${newThread.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              if (threadDetailsResponse.data?.data?.messages) {
                newThread.messages = threadDetailsResponse.data.data.messages;
              }
            } catch (err) {
              console.error("Error fetching thread details:", err);
            }
          }
          
          setSelectedThread(newThread);
          setMessages(newThread.messages || []);
        }
      } else if (selectedThread) {
        // Reply to existing thread
        await replyToThread(selectedThread.id, newMessage);
        
        // Wait a bit for the database to update, then refresh threads and messages
        await new Promise(resolve => setTimeout(resolve, 300));
        const data = await getCustomerThreads(selectedCustomer.phone);
        setThreads(data.data || []);
        
        const updatedThread = data.data?.find((t) => t.id === selectedThread.id);
        if (updatedThread) {
          setSelectedThread(updatedThread);
          setMessages(updatedThread.messages || []);
        }
      }
      
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      console.error("Error details:", err.response?.data || err.message);
      alert(`Failed to send message: ${err.response?.data?.message || err.message}`);
    } finally {
      setSendingMessage(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatRelativeDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return formatDate(dateString);
  };

  if (loading) {
    return (
      <Container>
        <LoadingState>Loading customers...</LoadingState>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorState>{error}</ErrorState>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Customers</HeaderTitle>
      </Header>

      <SearchContainer>
        <SearchInput
          ref={searchInputRef}
          type="text"
          placeholder="Search by phone number or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>

      {customers.length === 0 ? (
        <EmptyState>No customers found.</EmptyState>
      ) : (
        <CustomersTable>
          <TableHeader>
            <TableCell>Phone</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Sources</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell>Feedbacks</TableCell>
            <TableCell>Threads</TableCell>
            <TableCell>Last Activity</TableCell>
            <TableCell>Action</TableCell>
          </TableHeader>
          {customers.map((customer) => (
            <TableRow key={customer.phone}>
              <PhoneCell>{customer.phone}</PhoneCell>
              <NameCell>{customer.name || "N/A"}</NameCell>
              <SourcesCell>
                {customer.sources.map((source) => (
                  <SourceBadge key={source} $source={source}>
                    {source}
                  </SourceBadge>
                ))}
              </SourcesCell>
              <TableCell>{customer.orderCount || 0}</TableCell>
              <TableCell>{customer.feedbackCount || 0}</TableCell>
              <TableCell>{customer.threadCount || 0}</TableCell>
              <TableCell>{formatRelativeDate(customer.lastActivity)}</TableCell>
              <TableCell>
                <ChatButton onClick={() => handleOpenChat(customer)}>
                  Chat
                </ChatButton>
              </TableCell>
            </TableRow>
          ))}
        </CustomersTable>
      )}

      {showChatModal && selectedCustomer && (
        <ChatModal>
          <ModalOverlay onClick={() => setShowChatModal(false)} />
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <h3>{selectedCustomer.name || "Customer"}</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                  {selectedCustomer.phone}
                </p>
              </div>
              <ModalCloseButton onClick={() => setShowChatModal(false)}>
                ×
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <div style={{ display: "flex", height: "100%" }}>
                <ThreadList>
                  <h4 style={{ margin: "0 0 12px 0", fontSize: "14px" }}>
                    Conversations
                  </h4>
                  {threads.length === 0 ? (
                    <p style={{ fontSize: "12px", color: "#999" }}>
                      No conversations yet
                    </p>
                  ) : (
                    threads.map((thread) => (
                      <ThreadItem
                        key={thread.id}
                        $active={selectedThread?.id === thread.id}
                        onClick={() => handleSelectThread(thread)}
                      >
                        <ThreadTitle>{thread.subject || "No subject"}</ThreadTitle>
                        <ThreadDate>
                          {formatRelativeDate(thread.last_message_at)}
                        </ThreadDate>
                      </ThreadItem>
                    ))
                  )}
                </ThreadList>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  {selectedThread ? (
                    <>
                      <ChatMessages>
                        {messages.map((message) => (
                          <MessageBubble
                            key={message.id}
                            $isOwner={message.sender_type === "owner"}
                          >
                            <MessageText>{message.message}</MessageText>
                            <MessageTime>
                              {formatDate(message.created_at)}
                            </MessageTime>
                          </MessageBubble>
                        ))}
                      </ChatMessages>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          padding: "12px",
                          borderTop: "1px solid #e2e8f0",
                        }}
                      >
                        <MessageInput
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          placeholder="Type your message..."
                          disabled={sendingMessage}
                        />
                        <SendButton
                          onClick={handleSendMessage}
                          disabled={!newMessage.trim() || sendingMessage}
                        >
                          {sendingMessage ? "Sending..." : "Send"}
                        </SendButton>
                      </div>
                    </>
                  ) : threads.length === 0 ? (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        gap: "16px",
                      }}
                    >
                      <div style={{ textAlign: "center", color: "#666" }}>
                        <p style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "500" }}>
                          No conversations yet
                        </p>
                        <p style={{ margin: 0, fontSize: "14px", color: "#999" }}>
                          Start a new conversation by sending a message
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          padding: "12px",
                          width: "100%",
                          maxWidth: "600px",
                        }}
                      >
                        <MessageInput
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          placeholder="Type your message to start chat (will be sent via WhatsApp)..."
                          disabled={sendingMessage}
                        />
                        <SendButton
                          onClick={handleSendMessage}
                          disabled={!newMessage.trim() || sendingMessage}
                        >
                          {sendingMessage ? "Sending..." : "Start Chat"}
                        </SendButton>
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#999",
                      }}
                    >
                      Select a conversation to view messages
                    </div>
                  )}
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </ChatModal>
      )}
    </Container>
  );
}
