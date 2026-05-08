import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  MdOutlineQuestionAnswer,
  MdOutlineLightbulb,
  MdOutlineCheckCircle,
  MdOutlineTimelapse,
  MdOutlineLabel,
  MdOutlineSend,
  MdOutlineWhatsapp,
  MdSearch,
  MdOutlineKeyboardArrowDown,
  MdOutlineChat,
  MdOutlineInbox,
  MdOutlineAutoAwesome,
  MdOutlineFilterList,
} from "react-icons/md";
import {
  Container,
  PageHeader,
  PageHeaderInner,
  PageHeaderLeft,
  PageHeaderRight,
  PageTitle,
  PageSubtitle,
  HeaderMetaRow,
  MetaPill,
  HeaderBtn,
  KpiGrid,
  KpiCard,
  KpiIconBox,
  KpiValue,
  KpiLabel,
  KpiMeta,
  SectionTitle,
  PageGrid,
  FiltersRow,
  SearchInput,
  SelectInput,
  ThreadListPanel,
  ThreadListHeader,
  CountBadge,
  ThreadDetailsPanel,
  ThreadList,
  ThreadListItem,
  ThreadListMain,
  ThreadAvatarBox,
  ThreadTitleRow,
  ThreadTitle,
  ThreadTime,
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
  MessageSenderLabel,
  MessageBubble,
  MessageTime,
  ReplyArea,
  TemplatesBar,
  TemplateChip,
  TemplatesLabel,
  ReplyInput,
  CharCount,
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
  SkeletonCard,
  ErrorText,
  EmptyStateBox,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDesc,
} from "./styles";
import { getThreadStatsAdmin } from "../../../apis/threads/getThreadStatsAdmin";
import { getThreadsAdmin } from "../../../apis/threads/getThreadsAdmin";
import { getThreadAdmin } from "../../../apis/threads/getThreadAdmin";
import { replyThreadAdmin } from "../../../apis/threads/replyThreadAdmin";
import { updateThreadAdmin } from "../../../apis/threads/updateThreadAdmin";
import { getCookie } from "../../../utilities/manageCookies";

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
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

const QUICK_REPLIES_EN = [
  "Thank you for your suggestion, we will review it carefully.",
  "Thank you for contacting us, we will get back to you shortly.",
  "This item is currently unavailable, but we are working on updating the menu.",
  "Please contact us on WhatsApp for more details.",
];

const QUICK_REPLIES_AR = [
  "شكراً على اقتراحك، سنراجعه بعناية.",
  "شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.",
  "هذا الصنف غير متوفر حالياً، ونعمل على تحديث القائمة.",
  "يرجى التواصل معنا عبر واتساب لمزيد من التفاصيل.",
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const getMessageText = (message) =>
  message?.message || message?.text || message?.body || "";

const getMessageTime = (message) =>
  message?.created_at || message?.createdAt || message?.timestamp;

const isArabicText = (text) => /[\u0600-\u06FF]/.test(text || "");

const timeAgo = (dateStr) => {
  if (!dateStr) return "";
  try {
    const diff = Date.now() - new Date(dateStr).getTime();
    const min = Math.floor(diff / 60000);
    if (min < 1) return "just now";
    if (min < 60) return `${min}m`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}h`;
    const day = Math.floor(hr / 24);
    if (day < 30) return `${day}d`;
    return new Date(dateStr).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  } catch {
    return "";
  }
};

const formatDateTime = (dateStr) => {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
};

const threadInitial = (thread) => {
  const name = thread?.customer_name || thread?.subject || "?";
  return String(name).trim().charAt(0).toUpperCase() || "?";
};

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

/* ─────────────────────────────────────────────
   KPI ICON CONFIG
───────────────────────────────────────────── */
const KPI_ICONS = [
  {
    icon: <MdOutlineInbox size={18} />,
    bg: "rgba(94,171,177,0.12)",
    color: "#5eabb1",
    accent: "#5eabb1",
  },
  {
    icon: <MdOutlineCheckCircle size={18} />,
    bg: "rgba(16,185,129,0.12)",
    color: "#10b981",
    accent: "#10b981",
  },
  {
    icon: <MdOutlineTimelapse size={18} />,
    bg: "rgba(245,158,11,0.12)",
    color: "#f59e0b",
    accent: "#f59e0b",
  },
  {
    icon: <MdOutlineLabel size={18} />,
    bg: "rgba(99,102,241,0.12)",
    color: "#6366f1",
    accent: "#6366f1",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function QuestionsSuggestions() {
  // ── STATE (identical to original) ──
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

  // ── USER / LANGUAGE ──
  const userInformation = (() => {
    const storedUserInfo = getCookie("userInfo") || "{}";
    try {
      return JSON.parse(storedUserInfo);
    } catch {
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

  // ── LABELS (identical to original) ──
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
        threadListTitle: "المحادثات",
        detailsTitle: "تفاصيل المحادثة",
        noSubject: "بدون عنوان",
        noThreads: "لا توجد أسئلة بعد",
        selectThread: "اختر محادثة لعرض التفاصيل",
        selectThreadDesc: "انقر على أي محادثة في القائمة لعرض تفاصيلها والرد عليها.",
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
        quickReplies: "ردود سريعة",
        youLabel: "أنت",
        customerMsgLabel: "العميل",
      };
    }
    return {
      title: "Questions & Suggestions",
      subtitle: "Manage customer conversations, answer questions, and track improvement ideas.",
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
      threadListTitle: "Conversations",
      detailsTitle: "Thread Details",
      noSubject: "No subject",
      noThreads: "No conversations yet",
      selectThread: "Select a conversation",
      selectThreadDesc: "Click any thread to view the full conversation and reply.",
      failedToLoad: "Failed to load",
      replyPlaceholder: "Write your reply here...",
      send: "Send",
      updating: "Sending...",
      statusLabel: "Status",
      loadMore: "Load more",
      customerLabel: "Customer",
      channelLabel: "Channel",
      typeLabel: "Type",
      messagesLabel: "messages",
      noMessages: "No messages yet",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      whatsappSend: "Send via WhatsApp",
      whatsappHint: "Send message via WhatsApp",
      previewTitle: "Message preview",
      previewSubtitle: "This message will be sent to the customer.",
      previewConfirm: "Confirm & Send",
      previewCancel: "Cancel",
      sentMessageTitle: "Message sent",
      whatsappPreviewTitle: "WhatsApp preview",
      whatsappPreviewSubtitle: "WhatsApp will open with this message pre-filled.",
      whatsappOpenConfirm: "Open WhatsApp",
      whatsappConfirm: "Open WhatsApp to send this message?",
      quickReplies: "Quick replies",
      youLabel: "You",
      customerMsgLabel: "Customer",
    };
  }, [resolvedLanguage]);

  const quickReplies =
    resolvedLanguage === "ar" ? QUICK_REPLIES_AR : QUICK_REPLIES_EN;

  // ── HANDLERS (identical to original) ──
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

  // ── EFFECTS (identical to original) ──
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
    } catch {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    } catch {
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
    } catch {
      setErrorDetails(labels.failedToLoad);
    }
  };

  // ── DERIVED DATA ──
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

  const questionsCount = threads.filter((t) => t.type === "question").length;
  const suggestionsCount = threads.filter((t) => t.type === "suggestion").length;
  const newCount = threads.filter((t) => t.status === "new").length;

  /* ─────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────── */
  return (
    <Container
      dir={resolvedLanguage === "ar" ? "rtl" : "ltr"}
      $activeLanguage={resolvedLanguage}
    >
      {/* ═══════════════════════════════════════
          PREMIUM PAGE HEADER
      ═══════════════════════════════════════ */}
      <PageHeader>
        <PageHeaderInner>
          <PageHeaderLeft>
            <PageTitle>{labels.title}</PageTitle>
            <PageSubtitle>{labels.subtitle}</PageSubtitle>
            <HeaderMetaRow>
              {!loadingStats && stats.openThreads !== null && (
                <MetaPill>
                  <MdOutlineInbox size={12} />
                  {stats.openThreads} open
                </MetaPill>
              )}
              {!loadingStats && newCount > 0 && (
                <MetaPill>
                  <MdOutlineAutoAwesome size={12} />
                  {newCount} new
                </MetaPill>
              )}
              {questionsCount > 0 && (
                <MetaPill>
                  <MdOutlineQuestionAnswer size={12} />
                  {questionsCount} {labels.typeQuestion.toLowerCase()}
                </MetaPill>
              )}
              {suggestionsCount > 0 && (
                <MetaPill>
                  <MdOutlineLightbulb size={12} />
                  {suggestionsCount} {labels.typeSuggestion.toLowerCase()}
                </MetaPill>
              )}
            </HeaderMetaRow>
          </PageHeaderLeft>
        </PageHeaderInner>
      </PageHeader>

      {/* ═══════════════════════════════════════
          KPI CARDS
      ═══════════════════════════════════════ */}
      <KpiGrid>
        {normalizedStats.map((item, i) => (
          <KpiCard key={item.label} $accent={KPI_ICONS[i]?.accent}>
            <KpiIconBox $bg={KPI_ICONS[i]?.bg} $color={KPI_ICONS[i]?.color}>
              {KPI_ICONS[i]?.icon}
            </KpiIconBox>
            <KpiValue>
              {loadingStats ? "--" : item.value}
            </KpiValue>
            <KpiLabel>{item.label}</KpiLabel>
            <KpiMeta>{item.meta}</KpiMeta>
          </KpiCard>
        ))}
      </KpiGrid>

      {/* ═══════════════════════════════════════
          MAIN GRID
      ═══════════════════════════════════════ */}
      <PageGrid>
        {/* ─────────────────────────────────────
            LEFT: Thread list
        ───────────────────────────────────── */}
        <ThreadListPanel>
          <ThreadListHeader>
            <SectionTitle>{labels.threadListTitle}</SectionTitle>
            {threads.length > 0 && (
              <CountBadge>{threads.length}</CountBadge>
            )}
          </ThreadListHeader>

          {/* Filters */}
          <FiltersRow>
            <div style={{ position: "relative", flex: 1, minWidth: 140, display: "flex", alignItems: "center" }}>
              <MdSearch
                size={15}
                style={{
                  position: "absolute",
                  left: 9,
                  color: "#94a3b8",
                  pointerEvents: "none",
                }}
              />
              <SearchInput
                type="text"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder={labels.filterSearch}
              />
            </div>
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

          {/* Error */}
          {errorList && <ErrorText style={{ margin: "8px 14px" }}>{errorList}</ErrorText>}

          {/* Loading skeletons */}
          {loadingList && (
            <div style={{ padding: "12px 14px" }}>
              <SkeletonCard $h="62px" />
              <SkeletonCard $h="62px" />
              <SkeletonCard $h="62px" />
            </div>
          )}

          {/* Empty */}
          {!loadingList && threads.length === 0 && !errorList && (
            <EmptyStateBox>
              <EmptyStateIcon>
                <MdOutlineChat size={36} />
              </EmptyStateIcon>
              <EmptyStateTitle>{labels.noThreads}</EmptyStateTitle>
              <EmptyStateDesc>
                {resolvedLanguage === "ar"
                  ? "عندما يرسل العملاء أسئلة أو اقتراحات، ستظهر هنا."
                  : "When customers send questions or suggestions, they will appear here."}
              </EmptyStateDesc>
            </EmptyStateBox>
          )}

          {/* Thread list */}
          <ThreadList>
            {threads.map((thread) => (
              <ThreadListItem
                key={thread.id}
                selected={thread.id === selectedThreadId}
                onClick={() => setSelectedThreadId(thread.id)}
              >
                <ThreadAvatarBox $type={thread.type}>
                  {threadInitial(thread)}
                </ThreadAvatarBox>

                <ThreadListMain>
                  <ThreadTitleRow>
                    <ThreadTitle>
                      {thread.subject || labels.noSubject}
                    </ThreadTitle>
                    <ThreadTime>
                      {timeAgo(
                        thread.last_message_at ||
                          thread.lastMessageAt ||
                          thread.updated_at ||
                          thread.updatedAt ||
                          thread.created_at ||
                          thread.createdAt
                      )}
                    </ThreadTime>
                  </ThreadTitleRow>

                  <ThreadSubtitle>
                    {thread.lastMessageSnippet || thread.preview || ""}
                  </ThreadSubtitle>

                  <ThreadMetaRow>
                    {thread.customer_name && (
                      <ThreadMetaText>
                        {thread.customer_name}
                      </ThreadMetaText>
                    )}
                    {thread.customer_phone && (
                      <ThreadMetaText style={{ color: "#94a3b8" }}>
                        ·
                      </ThreadMetaText>
                    )}
                    {thread.customer_phone && (
                      <ThreadMetaText>{thread.customer_phone}</ThreadMetaText>
                    )}
                    {(thread.messageCount || 0) > 0 && (
                      <ThreadMetaText style={{ color: "#94a3b8" }}>
                        · {thread.messageCount} {labels.messagesLabel}
                      </ThreadMetaText>
                    )}
                    <Badge variant={`type-${thread.type}`}>
                      {typeLabels[thread.type] || thread.type || "—"}
                    </Badge>
                    <Badge variant={`status-${thread.status}`}>
                      {statusLabels[thread.status] || thread.status || "—"}
                    </Badge>
                  </ThreadMetaRow>
                </ThreadListMain>
              </ThreadListItem>
            ))}
          </ThreadList>

          {pagination.hasMore && threads.length > 0 && (
            <LoadMoreButton onClick={handleLoadMore} disabled={loadingList}>
              {labels.loadMore}
            </LoadMoreButton>
          )}
        </ThreadListPanel>

        {/* ─────────────────────────────────────
            RIGHT: Thread details
        ───────────────────────────────────── */}
        <ThreadDetailsPanel>
          {/* Error */}
          {errorDetails && (
            <ErrorText style={{ margin: "16px" }}>{errorDetails}</ErrorText>
          )}

          {/* Loading */}
          {loadingDetails && (
            <div style={{ padding: "16px" }}>
              <SkeletonText />
              <SkeletonText style={{ width: "70%" }} />
              <SkeletonCard $h="80px" />
              <SkeletonCard $h="200px" />
            </div>
          )}

          {/* No thread selected */}
          {!loadingDetails && !selectedThread && !errorDetails && (
            <EmptyStateBox>
              <EmptyStateIcon>
                <MdOutlineQuestionAnswer size={40} />
              </EmptyStateIcon>
              <EmptyStateTitle>{labels.selectThread}</EmptyStateTitle>
              <EmptyStateDesc>{labels.selectThreadDesc}</EmptyStateDesc>
            </EmptyStateBox>
          )}

          {/* Thread details content */}
          {selectedThread && !loadingDetails && (
            <>
              {/* Header */}
              <DetailsHeader>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <DetailsTitle>
                    {selectedThread.subject || labels.noSubject}
                  </DetailsTitle>
                  <DetailsSubtitle>
                    {labels.customerLabel}: {selectedThread.customer_name || "—"}
                  </DetailsSubtitle>
                  {selectedThread.customer_phone && (
                    <PhoneRow>
                      <span>{labels.phoneLabel}:</span>
                      <PhoneValue>{selectedThread.customer_phone}</PhoneValue>
                      {getWhatsappLink(selectedThread.customer_phone) && (
                        <PhoneLink
                          href={getWhatsappLink(selectedThread.customer_phone)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MdOutlineWhatsapp size={13} />
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
                  {selectedThread.channel && (
                    <Badge variant={`channel-${selectedThread.channel}`}>
                      {selectedThread.channel}
                    </Badge>
                  )}
                </DetailsBadges>
              </DetailsHeader>

              {/* Status change */}
              <StatusRow>
                <StatusLabel>{labels.statusLabel}:</StatusLabel>
                <SelectInput
                  value={selectedThread.status || ""}
                  onChange={handleStatusChange}
                  style={{ minWidth: 130 }}
                >
                  {STATUS_OPTIONS.filter((opt) => opt.value).map((option) => (
                    <option key={option.value} value={option.value}>
                      {labels[option.labelKey]}
                    </option>
                  ))}
                </SelectInput>
              </StatusRow>

              {/* Chat timeline */}
              <ChatContainer>
                {selectedMessages.length === 0 && (
                  <EmptyStateBox style={{ padding: "24px 16px" }}>
                    <EmptyStateIcon>
                      <MdOutlineChat size={28} />
                    </EmptyStateIcon>
                    <EmptyStateTitle style={{ fontSize: "0.875rem" }}>
                      {labels.noMessages}
                    </EmptyStateTitle>
                  </EmptyStateBox>
                )}
                {selectedMessages.map((message, index) => {
                  const ownerMessage = isOwnerMessage(message);
                  const timestamp = getMessageTime(message);
                  return (
                    <MessageRow
                      key={`${message.id || index}`}
                      isOwner={ownerMessage}
                      $activeLanguage={resolvedLanguage}
                    >
                      <MessageSenderLabel>
                        {ownerMessage ? labels.youLabel : labels.customerMsgLabel}
                      </MessageSenderLabel>
                      <MessageBubble isOwner={ownerMessage}>
                        {getMessageText(message)}
                        {timestamp && (
                          <MessageTime isOwner={ownerMessage}>
                            {formatDateTime(timestamp)}
                          </MessageTime>
                        )}
                      </MessageBubble>
                    </MessageRow>
                  );
                })}
              </ChatContainer>

              {/* Sent preview */}
              {lastSentPreview && (
                <div style={{ padding: "0 16px" }}>
                  <SentMessageBox>
                    <SentMessageTitle>
                      <MdOutlineCheckCircle size={13} />
                      {labels.sentMessageTitle}
                    </SentMessageTitle>
                    <SentMessageBody>{lastSentPreview}</SentMessageBody>
                  </SentMessageBox>
                </div>
              )}

              {/* Reply composer */}
              <ReplyArea>
                {/* Quick reply templates */}
                <div>
                  <TemplatesLabel style={{ marginBottom: 7 }}>
                    <MdOutlineAutoAwesome size={13} />
                    {labels.quickReplies}
                  </TemplatesLabel>
                  <TemplatesBar>
                    {quickReplies.map((tpl) => (
                      <TemplateChip
                        key={tpl}
                        type="button"
                        onClick={() => setReplyMessage(tpl)}
                        title={tpl}
                      >
                        {tpl}
                      </TemplateChip>
                    ))}
                  </TemplatesBar>
                </div>

                {/* Textarea */}
                <div>
                  <ReplyInput
                    rows={3}
                    value={replyMessage}
                    onChange={(event) => setReplyMessage(event.target.value)}
                    placeholder={labels.replyPlaceholder}
                  />
                  <CharCount>{replyMessage.length} chars</CharCount>
                </div>

                {/* Actions */}
                <ReplyActions>
                  {selectedThread.customer_phone && (
                    <WhatsappButton
                      href={getWhatsappLink(
                        selectedThread.customer_phone,
                        previewMessage
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={labels.whatsappHint}
                      onClick={handleOpenWhatsappPreview}
                      $disabled={!replyMessage.trim()}
                    >
                      <MdOutlineWhatsapp size={16} />
                      {labels.whatsappSend}
                    </WhatsappButton>
                  )}
                  <SendButton
                    type="button"
                    onClick={handleOpenPreview}
                    disabled={sendingReply || !replyMessage.trim()}
                  >
                    <MdOutlineSend size={15} />
                    {sendingReply ? labels.updating : labels.send}
                  </SendButton>
                </ReplyActions>
              </ReplyArea>
            </>
          )}
        </ThreadDetailsPanel>
      </PageGrid>

      {/* ═══════════════════════════════════════
          MODALS (identical logic, improved styling)
      ═══════════════════════════════════════ */}
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
            <ModalTitle>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <MdOutlineWhatsapp size={18} style={{ color: "#22c55e" }} />
                {labels.whatsappPreviewTitle}
              </span>
            </ModalTitle>
            <ModalSubtitle>{labels.whatsappPreviewSubtitle}</ModalSubtitle>
            <ModalText>{previewMessage}</ModalText>
            <ModalActions>
              <ModalButton
                type="button"
                onClick={() => setShowWhatsappPreview(false)}
              >
                {labels.previewCancel}
              </ModalButton>
              <ModalPrimaryButton
                type="button"
                onClick={handleConfirmWhatsappOpen}
                style={{
                  background:
                    "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                  boxShadow: "0 4px 14px rgba(34,197,94,0.35)",
                }}
              >
                <MdOutlineWhatsapp size={15} />
                {labels.whatsappOpenConfirm}
              </ModalPrimaryButton>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </Container>
  );
}
