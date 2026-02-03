import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Header = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`;

export const HeaderSubtitle = styled.p`
  margin: 6px 0 0 0;
  color: #64748b;
  font-size: 12px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 14px 16px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.25);
`;

export const StatLabel = styled.span`
  display: block;
  font-size: 11px;
  color: #64748b;
  margin-bottom: 4px;
`;

export const StatValue = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`;

export const StatMeta = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: #6366f1;
`;

export const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

export const SectionTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: #f8fafc;
  align-items: center;
`;

export const ListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`;

export const ListMeta = styled.span`
  font-size: 12px;
  color: #64748b;
`;

export const Badge = styled.span`
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid transparent;
  position: absolute;
  top: 8px;
  right: 10px;
  ${({ variant }) => {
    const key = String(variant || "").toLowerCase();
    if (key.includes("status-new")) {
      return "background: rgba(59, 130, 246, 0.15); color: #1d4ed8; border-color: rgba(59, 130, 246, 0.3);";
    }
    if (key.includes("status-in_progress")) {
      return "background: rgba(245, 158, 11, 0.15); color: #b45309; border-color: rgba(245, 158, 11, 0.3);";
    }
    if (key.includes("status-resolved")) {
      return "background: rgba(16, 185, 129, 0.15); color: #047857; border-color: rgba(16, 185, 129, 0.3);";
    }
    if (key.includes("status-closed")) {
      return "background: rgba(148, 163, 184, 0.25); color: #475569; border-color: rgba(148, 163, 184, 0.4);";
    }
    if (key.includes("type-question")) {
      return "background: rgba(99, 102, 241, 0.15); color: #4338ca; border-color: rgba(99, 102, 241, 0.3);";
    }
    if (key.includes("type-suggestion")) {
      return "background: rgba(14, 165, 233, 0.15); color: #0369a1; border-color: rgba(14, 165, 233, 0.3);";
    }
    if (key.includes("channel")) {
      return "background: rgba(168, 85, 247, 0.15); color: #7e22ce; border-color: rgba(168, 85, 247, 0.3);";
    }
    return "background: rgba(99, 102, 241, 0.15); color: #312e81; border-color: rgba(99, 102, 241, 0.3);";
  }}
`;

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 14px;
  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export const FiltersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 180px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  padding: 0 10px;
  font-size: 12px;
  outline: none;
  background: #f8fafc;
`;

export const SelectInput = styled.select`
  height: 34px;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  padding: 0 8px;
  font-size: 12px;
  background: #fff;
  outline: none;
  min-width: 120px;
`;

export const ThreadListPanel = styled(Section)`
  display: flex;
  flex-direction: column;
`;

export const ThreadDetailsPanel = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ThreadList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ThreadListItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.selected ? "rgba(14, 165, 233, 0.5)" : "rgba(148, 163, 184, 0.2)"};
  background: ${(props) => (props.selected ? "#eff6ff" : "#f8fafc")};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  padding-right: 50px;
`;

export const ThreadListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ThreadTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`;

export const ThreadSubtitle = styled.span`
  font-size: 11px;
  color: #64748b;
`;

export const ThreadMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ThreadMetaText = styled.span`
  font-size: 10px;
  color: #64748b;
`;

export const ListEmpty = styled.div`
  font-size: 13px;
  color: #94a3b8;
  padding: 12px 0;
`;

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const DetailsTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
`;

export const DetailsSubtitle = styled.span`
  font-size: 11px;
  color: #64748b;
`;

export const PhoneRow = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #475569;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const PhoneValue = styled.span`
  font-weight: 600;
  color: #0f172a;
`;

export const PhoneLink = styled.a`
  color: #0ea5e9;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export const DetailsBadges = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 10px;
  background: #f8fafc;
  max-height: 360px;
  overflow-y: auto;
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isOwner
      ? props.$activeLanguage === "ar"
        ? "flex-start"
        : "flex-end"
      : props.$activeLanguage === "ar"
      ? "flex-end"
      : "flex-start"};
`;

export const MessageBubble = styled.div`
  max-width: 75%;
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 12px;
  line-height: 1.4;
  color: #0f172a;
  background: ${(props) => (props.isOwner ? "#e0f2fe" : "white")};
  border: 1px solid rgba(148, 163, 184, 0.2);
  position: relative;
`;

export const MessageTime = styled.div`
  font-size: 9px;
  color: #94a3b8;
  margin-top: 4px;
`;

export const ReplyArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReplyInput = styled.textarea`
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  padding: 10px;
  font-size: 12px;
  resize: vertical;
  min-height: 70px;
  outline: none;
`;

export const SendButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: #0ea5e9;
  color: white;
  font-size: 12px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const ReplyActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const WhatsappButton = styled.a`
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid rgba(16, 185, 129, 0.5);
  background: rgba(16, 185, 129, 0.12);
  color: #065f46;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
  &:hover {
    background: rgba(16, 185, 129, 0.2);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 520px;
  background: white;
  border-radius: 16px;
  padding: 20px 22px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.2);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ModalTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
`;

export const ModalSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: #64748b;
`;

export const ModalText = styled.pre`
  margin: 0;
  padding: 14px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  font-size: 12px;
  color: #0f172a;
  white-space: pre-wrap;
  max-height: 260px;
  overflow-y: auto;
  font-family: inherit;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 6px;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
`;

export const ModalButton = styled.button`
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: white;
  font-size: 13px;
  cursor: pointer;
`;

export const ModalPrimaryButton = styled(ModalButton)`
  border: none;
  background: #0ea5e9;
  color: white;
`;

export const SentMessageBox = styled.div`
  margin-top: 12px;
  padding: 14px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
`;

export const SentMessageTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
`;

export const SentMessageBody = styled.pre`
  margin: 0;
  font-size: 12px;
  color: #0f172a;
  white-space: pre-wrap;
  font-family: inherit;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StatusLabel = styled.span`
  font-size: 13px;
  color: #475569;
  font-weight: 600;
`;

export const LoadMoreButton = styled.button`
  margin-top: 12px;
  align-self: center;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  background: white;
  font-size: 13px;
  cursor: pointer;
`;

export const SkeletonText = styled.div`
  height: 14px;
  border-radius: 6px;
  background: rgba(148, 163, 184, 0.2);
  margin-bottom: 10px;
`;

export const ErrorText = styled.div`
  color: #ef4444;
  font-size: 13px;
  margin-bottom: 10px;
`;
