import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { breakingPoints, dashboardColors } from "../../../styles/theme";

const accent = dashboardColors.mainColor;
const cardBorder = "rgba(148, 163, 184, 0.22)";
const textSub = "#64748b";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  background-color: transparent;
  margin-top: 12px;
  min-height: 60vh;
  box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${textSub};
  line-height: 1.45;
  max-width: 42rem;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.div`
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  background-color: ${(props) =>
    props.activeTab === props.tab ? accent : "rgba(148, 163, 184, 0.12)"};
  color: ${(props) => (props.activeTab === props.tab ? "#fff" : "#334155")};
  box-shadow: ${(props) =>
    props.activeTab === props.tab
      ? "0 4px 14px rgba(94, 171, 177, 0.35)"
      : "none"};
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 8px;
  gap: 12px;
  width: 100%;
  align-items: stretch;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 6px;
    gap: 10px;
  }
`;

export const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-width: 0;
  min-height: 56px;
  padding: 12px 14px;
  background: #ffffff;
  border: 1px solid ${cardBorder};
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.35);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  }
`;

export const CategoryThumb = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  background: linear-gradient(
    135deg,
    rgba(94, 171, 177, 0.12) 0%,
    rgba(148, 163, 184, 0.15) 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148, 163, 184, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CategoryThumbPlaceholder = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${accent};
  opacity: 0.85;
  text-transform: uppercase;
`;

export const CategoryMeta = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CategoryName = styled.span`
  font-weight: 600;
  font-size: 0.95rem;
  color: #0f172a;
  text-transform: capitalize;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CategoryBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
`;

export const PriorityBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #475569;
  background: rgba(148, 163, 184, 0.16);
  padding: 3px 8px;
  border-radius: 6px;
`;

export const DiscountBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: #b45309;
  background: rgba(245, 158, 11, 0.18);
  padding: 3px 8px;
  border-radius: 6px;
`;

export const AddCategory = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 20px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${accent} 0%,
    #4a9499 100%
  );
  margin-top: 16px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 16px rgba(94, 171, 177, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(94, 171, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    margin-top: 12px;
  }
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  font-size: 1.95rem;
  color: #64748b;
  padding: 0;
  min-width: 48px;
  min-height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: color 0.15s, background 0.15s, transform 0.15s;
  flex-shrink: 0;

  &:hover {
    color: #dc2626;
    background: rgba(220, 38, 38, 0.1);
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Edit = styled(MdModeEditOutline)`
  cursor: pointer;
  font-size: 1.95rem;
  color: #64748b;
  padding: 0;
  min-width: 48px;
  min-height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: color 0.15s, background 0.15s, transform 0.15s;
  flex-shrink: 0;

  &:hover {
    color: ${accent};
    background: rgba(94, 171, 177, 0.16);
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 22px;
  cursor: pointer;
  color: #475569;
  padding: 4px;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: ${accent};
    background: rgba(94, 171, 177, 0.1);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
  flex-shrink: 0;
`;

export const categoryFormFieldSx = {
  width: "100%",
  maxWidth: 560,
  mb: 2,
  alignSelf: "stretch",
};

export const AddCategoryForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
  margin-left: 20px;
  position: relative;
  padding: 44px 20px 20px;
  width: ${(props) => (props.activeTab === "formbuilder" ? "100%" : "60%")};
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid ${cardBorder};
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: calc(100% - 24px);
    margin-left: 12px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  margin-top: 12px;
  padding: 28px 20px;
  text-align: center;
  color: ${textSub};
  font-size: 0.95rem;
  background: rgba(148, 163, 184, 0.08);
  border-radius: 14px;
  border: 1px dashed ${cardBorder};
  width: 100%;
  box-sizing: border-box;
`;
