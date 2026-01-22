import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  CardsGrid,
  StatCard,
  StatLabel,
  StatValue,
  StatMeta,
  SectionTitle,
  PageGrid,
  FiltersRow,
  SearchInput,
  SelectInput,
  ThreadListPanel,
  ThreadDetailsPanel,
  ThreadList,
  ThreadListItem,
  ThreadListMain,
  ThreadTitle,
  ThreadSubtitle,
  ThreadMetaRow,
  ThreadMetaText,
  Badge,
  ListEmpty,
  DetailsHeader,
  DetailsTitle,
  DetailsSubtitle,
  PhoneRow,
  PhoneValue,
  PhoneLink,
  DetailsBadges,
  ChatContainer,
  MessageRow,
  MessageBubble,
  MessageTime,
  ReplyArea,
  ReplyInput,
  SendButton,
  ReplyActions,
  WhatsappButton,
  ModalOverlay,
  ModalCard,
  ModalTitle,
  ModalSubtitle,
  ModalText,
  ModalActions,
  ModalButton,
  ModalPrimaryButton,
  SentMessageBox,
  SentMessageTitle,
  SentMessageBody,
  StatusRow,
  StatusLabel,
  LoadMoreButton,
  SkeletonText,
  ErrorText,
} from "./styles";
import { getThreadStatsAdmin } from "../../../apis/threads/getThreadStatsAdmin";
import { getThreadsAdmin } from "../../../apis/threads/getThreadsAdmin";
import { getThreadAdmin } from "../../../apis/threads/getThreadAdmin";
import { replyThreadAdmin } from "../../../apis/threads/replyThreadAdmin";
import { updateThreadAdmin } from "../../../apis/threads/updateThreadAdmin";
import { getCookie } from "../../../utilities/manageCookies";

const STATUS_OPTIONS = [
  { value: "", labelKey: "allStatuses" },
  { value: "new", labelKey: "statusNew" },
  { value: "in_progress", labelKey: "statusInProgress" },
  { value: "resolved", labelKey: "statusResolved" },
  { value: "closed", labelKey: "statusClosed" },
];

const TYPE_OPTIONS = [
  { value: "", labelKey: "allTypes" },
  { value: "question", labelKey: "typeQuestion" },
  { value: "suggestion", labelKey: "typeSuggestion" },
];

const getMessageText = (message) =>
  message?.message || message?.text || message?.body || "";

const getMessageTime = (message) =>
  message?.created_at || message?.createdAt || message?.timestamp;

const isArabicText = (text) => /[\u0600-\u06FF]/.test(text || "");

const buildWhatsappMessage = ({
  thread,
  replyMessage,
  customerMessage,
  restaurantName,
  language,
}) => {
  const customer = thread?.customer_name || "N/A";
  const restaurant = restaurantName || "MENUGIC";
  const body = replyMessage?.trim() || "-";
  const requestMessage = customerMessage?.trim() || "N/A";

  const wave = "\u{1F44B}";
  const pin = "\u{1F4CC}";
  const check = "\u2705";

  const typeLabel =
    thread?.type === "suggestion"
      ? language === "ar"
        ? "اقتراحك"
        : "Your suggestion"
      : language === "ar"
      ? "سؤالك"
      : "Your question";

  if (language === "ar") {
    return (
      `أهلاً ${customer} ${wave}\n\n` +
      `شكراً كتير لتواصلك معنا ولمشاركتنا ${thread?.type === "suggestion" ? "اقتراحك" : "سؤالك"}.\n\n` +
      `${pin} ${typeLabel}:\n` +
      `${requestMessage}\n\n` +
      `${check} ردّنا:\n` +
      `${body}\n\n` +
      `رأيك بيفرق معنا وبيساعدنا نتحسّن دايماً. وإذا عندك أي أفكار أو اقتراحات إضافية، يسعدنا نسمعها بأي وقت.\n\n` +
      `مع تحياتنا،\n` +
      `فريق ${restaurant}`
    );
  }

  return (
    `Hello ${customer} ${wave}\n\n` +
    `Thank you for your message and for taking the time to share your ${
      thread?.type === "suggestion" ? "suggestion" : "question"
    } with us.\n\n` +
    `${pin} ${typeLabel}:\n` +
    `${requestMessage}\n\n` +
    `${check} Our response:\n` +
    `${body}\n\n` +
    `Your feedback helps us grow and serve you better. If you have any other ideas or requests, feel free to share them with us anytime.\n\n` +
    `Best regards,\n` +
    `${restaurant} Team`
  );
};

const getWhatsappLink = (phone, message) => {
  if (!phone) return null;
  const digits = String(phone).replace(/[^\d]/g, "");
  if (!digits) return null;
  if (message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${digits}?text=${encoded}`;
  }
  return `https://wa.me/${digits}`;
};

const isOwnerMessage = (message) => {
  if (message?.is_owner || message?.isOwner) return true;
  const sender =
    message?.sender_type ||
    message?.senderType ||
    message?.sender ||
    message?.from ||
    "";
  const normalized = String(sender).toLowerCase();
  return ["owner", "restaurant", "admin"].includes(normalized);
};

export default function QuestionsSuggestions() {
  const [stats, setStats] = useState({
    openThreads: null,
    resolvedThisMonth: null,
    avgReplyTimeHours: null,
    topTopic: null,
  });
  const [filters, setFilters] = useState({ q: "", status: "", type: "" });
  const [searchInput, setSearchInput] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: null,
    hasMore: true,
  });
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedThreadDetails, setSelectedThreadDetails] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [loadingStats, setLoadingStats] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [sendingReply, setSendingReply] = useState(false);
  const [errorList, setErrorList] = useState("");
  const [errorDetails, setErrorDetails] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [lastSentPreview, setLastSentPreview] = useState("");
  const [showWhatsappPreview, setShowWhatsappPreview] = useState(false);

  const userInformation = (() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    try {
      return JSON.parse(storedUserInfo);
    } catch (error) {
      return {};
    }
  })();

  const restaurantName =
    userInformation?.restaurant_name ||
    userInformation?.restaurantName ||
    userInformation?.name ||
    "default";

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage
  );
  const resolvedLanguage =
    activeLanguage || localStorage.getItem("activeLanguage") || "en";

  const labels = useMemo(() => {
    if (resolvedLanguage === "ar") {
      return {
        title: "الأسئلة والاقتراحات",
        subtitle: "تابع استفسارات العملاء وطوّر الأفكار.",
        openThreads: "المحادثات المفتوحة",
        resolved: "المغلقة هذا الشهر",
        avgReply: "متوسط وقت الرد",
        topTopic: "أكثر موضوع شائع",
        statsMetaOpen: "بحاجة للرد",
        statsMetaResolved: "هذا الشهر",
        statsMetaReply: "آخر 7 أيام",
        statsMetaTopic: "الأكثر سؤالاً",
        filterSearch: "ابحث عن محادثة",
        allStatuses: "كل الحالات",
        statusNew: "جديد",
        statusInProgress: "قيد المتابعة",
        statusResolved: "تم الحل",
        statusClosed: "مغلق",
        allTypes: "كل الأنواع",
        typeQuestion: "سؤال",
        typeSuggestion: "اقتراح",
        threadListTitle: "قائمة المحادثات",
        detailsTitle: "تفاصيل المحادثة",
        noSubject: "بدون عنوان",
        noThreads: "لا توجد أسئلة بعد",
        selectThread: "اختر محادثة لعرض التفاصيل",
        failedToLoad: "فشل التحميل",
        replyPlaceholder: "اكتب الرد هنا...",
        send: "إرسال",
        updating: "جارٍ الإرسال...",
        statusLabel: "الحالة",
        loadMore: "عرض المزيد",
        customerLabel: "العميل",
        channelLabel: "القناة",
        typeLabel: "النوع",
        messagesLabel: "رسائل",
        noMessages: "لا توجد رسائل بعد",
        phoneLabel: "رقم الهاتف",
        whatsappLabel: "واتساب",
        whatsappSend: "إرسال عبر واتساب",
        whatsappHint: "إرسال الرسالة عبر واتساب",
        previewTitle: "معاينة رسالة العميل",
        previewSubtitle: "سيتم إرسال الرسالة التالية للعميل.",
        previewConfirm: "تأكيد الإرسال",
        previewCancel: "إلغاء",
        sentMessageTitle: "تم إرسال الرسالة",
        whatsappPreviewTitle: "معاينة رسالة واتساب",
        whatsappPreviewSubtitle: "سيتم فتح واتساب وإرسال الرسالة التالية.",
        whatsappOpenConfirm: "فتح واتساب",
        whatsappConfirm: "هل تريد فتح واتساب لإرسال هذه الرسالة؟",
      };
    }
    return {
      title: "Questions & Suggestions",
      subtitle: "Track customer questions and improve ideas.",
      openThreads: "Open Threads",
      resolved: "Resolved",
      avgReply: "Avg. Reply Time",
      topTopic: "Top Topic",
      statsMetaOpen: "Need reply",
      statsMetaResolved: "This month",
      statsMetaReply: "Last 7 days",
      statsMetaTopic: "Most asked",
      filterSearch: "Search threads",
      allStatuses: "All statuses",
      statusNew: "New",
      statusInProgress: "In Progress",
      statusResolved: "Resolved",
      statusClosed: "Closed",
      allTypes: "All types",
      typeQuestion: "Question",
      typeSuggestion: "Suggestion",
      threadListTitle: "Thread list",
      detailsTitle: "Thread details",
      noSubject: "No subject",
      noThreads: "No questions yet",
      selectThread: "Select a thread to view",
      failedToLoad: "Failed to load",
      replyPlaceholder: "Write your reply...",
      send: "Send",
      updating: "Sending...",
      statusLabel: "Status",
      loadMore: "Load more",
      customerLabel: "Customer",
      channelLabel: "Channel",
      typeLabel: "Type",
      messagesLabel: "Messages",
      noMessages: "No messages yet",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      whatsappSend: "Send via WhatsApp",
      whatsappHint: "Send message via WhatsApp",
      previewTitle: "Message preview for customer",
      previewSubtitle: "This exact message will be sent to the customer.",
      previewConfirm: "Confirm send",
      previewCancel: "Cancel",
      sentMessageTitle: "Message sent",
      whatsappPreviewTitle: "WhatsApp message preview",
      whatsappPreviewSubtitle: "WhatsApp will open with this message.",
      whatsappOpenConfirm: "Open WhatsApp",
      whatsappConfirm: "Open WhatsApp to send this message?",
    };
  }, [resolvedLanguage]);

  const handleOpenPreview = () => {
      if (!replyMessage.trim()) return;
    setShowPreview(true);
  };

  const handleConfirmSend = async () => {
    setShowPreview(false);
    await handleReplySend();
  };

  const handleOpenWhatsappPreview = (event) => {
    event.preventDefault();
    if (!replyMessage.trim()) return;
    if (!previewMessage) return;
    setShowWhatsappPreview(true);
  };

  const handleConfirmWhatsappOpen = async () => {
    setShowWhatsappPreview(false);
    const confirmed = window.confirm(labels.whatsappConfirm);
    if (!confirmed) {
      return;
    }
    const messageToSend = previewMessage;
    await handleReplySend();
    const link = getWhatsappLink(selectedThread?.customer_phone, messageToSend);
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const statusLabels = useMemo(
    () => ({
      new: labels.statusNew,
      in_progress: labels.statusInProgress,
      resolved: labels.statusResolved,
      closed: labels.statusClosed,
    }),
    [labels]
  );

  const typeLabels = useMemo(
    () => ({
      question: labels.typeQuestion,
      suggestion: labels.typeSuggestion,
    }),
    [labels]
  );

  const normalizedStats = useMemo(
    () => [
      {
        label: labels.openThreads,
        value: stats.openThreads ?? "--",
        meta: labels.statsMetaOpen,
      },
      {
        label: labels.resolved,
        value: stats.resolvedThisMonth ?? "--",
        meta: labels.statsMetaResolved,
      },
      {
        label: labels.avgReply,
        value:
          stats.avgReplyTimeHours !== null &&
          stats.avgReplyTimeHours !== undefined
            ? `${stats.avgReplyTimeHours}h`
            : "--",
        meta: labels.statsMetaReply,
      },
      {
        label: labels.topTopic,
        value: stats.topTopic || "--",
        meta: labels.statsMetaTopic,
      },
    ],
    [labels, stats]
  );

  useEffect(() => {
    setLoadingStats(true);
    getThreadStatsAdmin()
      .then((response) => {
        const payload = response?.data || response;
        setStats({
          openThreads: payload?.openThreads ?? payload?.stats?.openThreads ?? null,
          resolvedThisMonth:
            payload?.resolvedThisMonth ??
            payload?.stats?.resolvedThisMonth ??
            null,
          avgReplyTimeHours:
            payload?.avgReplyTimeHours ??
            payload?.stats?.avgReplyTimeHours ??
            null,
          topTopic: payload?.topTopic ?? payload?.stats?.topTopic ?? null,
        });
      })
      .catch(() => {
        setStats({
          openThreads: null,
          resolvedThisMonth: null,
          avgReplyTimeHours: null,
          topTopic: null,
        });
      })
      .finally(() => setLoadingStats(false));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({ ...prev, q: searchInput.trim() }));
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const fetchThreads = async ({ page = 1, append = false } = {}) => {
    setLoadingList(true);
    setErrorList("");
    try {
      const response = await getThreadsAdmin({
        status: filters.status,
        type: filters.type,
        q: filters.q,
        page,
        pageSize: pagination.pageSize,
      });
      const payload = response?.data || response;
      const list = payload?.threads || payload?.data || payload || [];
      const total = payload?.total ?? null;
      const hasMore =
        total !== null ? page * pagination.pageSize < total : list.length > 0;
      setThreads((prev) => (append ? [...prev, ...list] : list));
      setPagination((prev) => ({
        ...prev,
        page,
        total,
        hasMore,
      }));
      if (!append) {
        if (list.length === 0) {
          setSelectedThreadId(null);
          setSelectedThreadDetails(null);
        } else if (!list.find((item) => item.id === selectedThreadId)) {
          setSelectedThreadId(list[0]?.id || null);
        }
      }
    } catch (error) {
      setErrorList(labels.failedToLoad);
      if (!append) {
        setThreads([]);
        setSelectedThreadId(null);
        setSelectedThreadDetails(null);
      }
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    setPagination((prev) => ({ ...prev, page: 1, total: null }));
    fetchThreads({ page: 1, append: false });
  }, [filters.status, filters.type, filters.q]);

  useEffect(() => {
    if (!selectedThreadId) return;
    setLoadingDetails(true);
    setErrorDetails("");
    getThreadAdmin(selectedThreadId)
      .then((response) => {
        const payload = response?.data || response;
        const thread = payload?.thread || payload?.data?.thread || null;
        const messages = payload?.messages || payload?.data?.messages || [];
        setSelectedThreadDetails({ thread, messages });
      })
      .catch(() => {
        setErrorDetails(labels.failedToLoad);
        setSelectedThreadDetails(null);
      })
      .finally(() => setLoadingDetails(false));
  }, [labels.failedToLoad, selectedThreadId]);

  const handleLoadMore = () => {
    if (loadingList || !pagination.hasMore) return;
    fetchThreads({ page: pagination.page + 1, append: true });
  };

  const handleReplySend = async () => {
    if (!selectedThreadId || !replyMessage.trim()) return;
    setSendingReply(true);
    try {
      await replyThreadAdmin(selectedThreadId, {
        message: replyMessage.trim(),
      });
      if (selectedThread) {
        setLastSentPreview(previewMessage);
      }
      setReplyMessage("");
      await fetchThreads({ page: 1, append: false });
      await getThreadAdmin(selectedThreadId).then((response) => {
        const payload = response?.data || response;
        const thread = payload?.thread || payload?.data?.thread || null;
        const messages = payload?.messages || payload?.data?.messages || [];
        setSelectedThreadDetails({ thread, messages });
      });
    } catch (error) {
      setErrorDetails(labels.failedToLoad);
    } finally {
      setSendingReply(false);
    }
  };

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    if (!selectedThreadId) return;
    try {
      await updateThreadAdmin(selectedThreadId, { status: newStatus });
      await fetchThreads({ page: 1, append: false });
      await getThreadAdmin(selectedThreadId).then((response) => {
        const payload = response?.data || response;
        const thread = payload?.thread || payload?.data?.thread || null;
        const messages = payload?.messages || payload?.data?.messages || [];
        setSelectedThreadDetails({ thread, messages });
      });
    } catch (error) {
      setErrorDetails(labels.failedToLoad);
    }
  };

  const selectedThread = selectedThreadDetails?.thread;
  const selectedMessages = selectedThreadDetails?.messages || [];
  const firstCustomerMessage = selectedMessages.find(
    (message) => !isOwnerMessage(message)
  );
  const customerMessageText = getMessageText(firstCustomerMessage);
  const messageLanguage = customerMessageText
    ? isArabicText(customerMessageText)
      ? "ar"
      : "en"
    : resolvedLanguage;
  const previewMessage = selectedThread
    ? buildWhatsappMessage({
        thread: selectedThread,
        replyMessage,
        customerMessage: customerMessageText,
        restaurantName: userInformation?.restaurant_name,
        language: messageLanguage,
      })
    : "";

  return (
    <Container dir={resolvedLanguage === "ar" ? "rtl" : "ltr"} $activeLanguage={resolvedLanguage}>
      <Header>
        <HeaderTitle>{labels.title}</HeaderTitle>
        <HeaderSubtitle>{labels.subtitle}</HeaderSubtitle>
      </Header>

      <CardsGrid>
        {normalizedStats.map((item) => (
          <StatCard key={item.label}>
            <StatLabel>{item.label}</StatLabel>
            <StatValue>{loadingStats ? "--" : item.value}</StatValue>
            <StatMeta>{item.meta}</StatMeta>
          </StatCard>
        ))}
      </CardsGrid>

      <PageGrid>
        <ThreadListPanel>
          <SectionTitle>{labels.threadListTitle}</SectionTitle>
          <FiltersRow>
            <SearchInput
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder={labels.filterSearch}
            />
            <SelectInput
              value={filters.status}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, status: event.target.value }))
              }
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {labels[option.labelKey]}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              value={filters.type}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, type: event.target.value }))
              }
            >
              {TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {labels[option.labelKey]}
                </option>
              ))}
            </SelectInput>
          </FiltersRow>

          {errorList && <ErrorText>{errorList}</ErrorText>}
          {loadingList && (
            <>
              <SkeletonText />
              <SkeletonText />
              <SkeletonText />
            </>
          )}
          {!loadingList && threads.length === 0 && !errorList && (
            <ListEmpty>{labels.noThreads}</ListEmpty>
          )}

          <ThreadList>
            {threads.map((thread) => (
              <ThreadListItem
                key={thread.id}
                selected={thread.id === selectedThreadId}
                onClick={() => setSelectedThreadId(thread.id)}
              >
                <ThreadListMain>
                  <ThreadTitle>{thread.subject || labels.noSubject}</ThreadTitle>
                  <ThreadSubtitle>
                    {thread.lastMessageSnippet || thread.preview || ""}
                  </ThreadSubtitle>
                  <ThreadMetaRow>
                    <ThreadMetaText>
                      {labels.customerLabel}: {thread.customer_name || "--"}
                    </ThreadMetaText>
                    {thread.customer_phone && (
                      <ThreadMetaText>
                        {labels.phoneLabel}: {thread.customer_phone}
                      </ThreadMetaText>
                    )}
                    <ThreadMetaText>
                      {thread.messageCount || 0} {labels.messagesLabel}
                    </ThreadMetaText>
                  </ThreadMetaRow>
                </ThreadListMain>
                <Badge variant={`status-${thread.status}`}>
                  {statusLabels[thread.status] || thread.status || "--"}
                </Badge>
              </ThreadListItem>
            ))}
          </ThreadList>

          {pagination.hasMore && threads.length > 0 && (
            <LoadMoreButton onClick={handleLoadMore} disabled={loadingList}>
              {labels.loadMore}
            </LoadMoreButton>
          )}
        </ThreadListPanel>

        <ThreadDetailsPanel>
          <SectionTitle>{labels.detailsTitle}</SectionTitle>
          {errorDetails && <ErrorText>{errorDetails}</ErrorText>}
          {loadingDetails && (
            <>
              <SkeletonText />
              <SkeletonText />
              <SkeletonText />
            </>
          )}
          {!loadingDetails && !selectedThread && !errorDetails && (
            <ListEmpty>{labels.selectThread}</ListEmpty>
          )}
          {selectedThread && (
            <>
              <DetailsHeader>
                <div>
                  <DetailsTitle>
                    {selectedThread.subject || labels.noSubject}
                  </DetailsTitle>
                  <DetailsSubtitle>
                    {labels.customerLabel}: {selectedThread.customer_name || "--"}
                  </DetailsSubtitle>
                  {selectedThread.customer_phone && (
                    <PhoneRow>
                      {labels.phoneLabel}:
                      <PhoneValue>{selectedThread.customer_phone}</PhoneValue>
                      {getWhatsappLink(selectedThread.customer_phone) && (
                        <PhoneLink
                          href={getWhatsappLink(selectedThread.customer_phone)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {labels.whatsappLabel}
                        </PhoneLink>
                      )}
                    </PhoneRow>
                  )}
                </div>
                <DetailsBadges>
                  <Badge variant={`type-${selectedThread.type}`}>
                    {typeLabels[selectedThread.type] ||
                      selectedThread.type ||
                      labels.typeLabel}
                  </Badge>
                  <Badge variant={`status-${selectedThread.status}`}>
                    {statusLabels[selectedThread.status] ||
                      selectedThread.status ||
                      labels.statusLabel}
                  </Badge>
                  <Badge variant={`channel-${selectedThread.channel}`}>
                    {selectedThread.channel || labels.channelLabel}
                  </Badge>
                </DetailsBadges>
              </DetailsHeader>

              <StatusRow>
                <StatusLabel>{labels.statusLabel}</StatusLabel>
                <SelectInput
                  value={selectedThread.status || ""}
                  onChange={handleStatusChange}
                >
                  {STATUS_OPTIONS.filter((option) => option.value).map(
                    (option) => (
                      <option key={option.value} value={option.value}>
                        {labels[option.labelKey]}
                      </option>
                    )
                  )}
                </SelectInput>
              </StatusRow>

              <ChatContainer>
                {selectedMessages.map((message, index) => {
                  const ownerMessage = isOwnerMessage(message);
                  const timestamp = getMessageTime(message);
                  return (
                    <MessageRow
                      key={`${message.id || index}`}
                      isOwner={ownerMessage}
                      $activeLanguage={resolvedLanguage}
                    >
                      <MessageBubble isOwner={ownerMessage}>
                        {getMessageText(message)}
                        {timestamp && (
                          <MessageTime>
                            {new Date(timestamp).toLocaleString()}
                          </MessageTime>
                        )}
                      </MessageBubble>
                    </MessageRow>
                  );
                })}
                {selectedMessages.length === 0 && (
                  <ListEmpty>{labels.noMessages}</ListEmpty>
                )}
              </ChatContainer>

              <ReplyArea>
                <ReplyInput
                  rows={3}
                  value={replyMessage}
                  onChange={(event) => setReplyMessage(event.target.value)}
                  placeholder={labels.replyPlaceholder}
                />
                <ReplyActions>
                  {selectedThread.customer_phone && (
                    <WhatsappButton
                      href={getWhatsappLink(selectedThread.customer_phone, previewMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={labels.whatsappHint}
                      onClick={handleOpenWhatsappPreview}
                      $disabled={!replyMessage.trim()}
                    >
                      {labels.whatsappSend}
                    </WhatsappButton>
                  )}
                  <SendButton
                    type="button"
                    onClick={handleOpenPreview}
                    disabled={sendingReply || !replyMessage.trim()}
                  >
                    {sendingReply ? labels.updating : labels.send}
                  </SendButton>
                </ReplyActions>
              </ReplyArea>
            </>
          )}
        </ThreadDetailsPanel>
      </PageGrid>
      {showPreview && selectedThread && (
        <ModalOverlay onClick={() => setShowPreview(false)}>
          <ModalCard onClick={(event) => event.stopPropagation()}>
            <ModalTitle>{labels.previewTitle}</ModalTitle>
            <ModalSubtitle>{labels.previewSubtitle}</ModalSubtitle>
            <ModalText>{previewMessage}</ModalText>
            <ModalActions>
              <ModalButton type="button" onClick={() => setShowPreview(false)}>
                {labels.previewCancel}
              </ModalButton>
              <ModalPrimaryButton type="button" onClick={handleConfirmSend}>
                {labels.previewConfirm}
              </ModalPrimaryButton>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
      {showWhatsappPreview && selectedThread && (
        <ModalOverlay onClick={() => setShowWhatsappPreview(false)}>
          <ModalCard onClick={(event) => event.stopPropagation()}>
            <ModalTitle>{labels.whatsappPreviewTitle}</ModalTitle>
            <ModalSubtitle>{labels.whatsappPreviewSubtitle}</ModalSubtitle>
            <ModalText>{previewMessage}</ModalText>
            <ModalActions>
              <ModalButton
                type="button"
                onClick={() => setShowWhatsappPreview(false)}
              >
                {labels.previewCancel}
              </ModalButton>
              <ModalPrimaryButton type="button" onClick={handleConfirmWhatsappOpen}>
                {labels.whatsappOpenConfirm}
              </ModalPrimaryButton>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </Container>
  );
}
