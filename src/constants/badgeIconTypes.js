import {
  FaStar,
  FaTruck,
  FaCheck,
  FaHeart,
  FaGift,
  FaLeaf,
  FaFire,
  FaShieldAlt,
  FaBolt,
  FaAward,
  FaThumbsUp,
  FaRocket,
} from "react-icons/fa";

export const BADGE_ICON_TYPES = [
  { value: "star", label: "Star", Icon: FaStar },
  { value: "truck", label: "Truck", Icon: FaTruck },
  { value: "check", label: "Check", Icon: FaCheck },
  { value: "heart", label: "Heart", Icon: FaHeart },
  { value: "gift", label: "Gift", Icon: FaGift },
  { value: "leaf", label: "Leaf", Icon: FaLeaf },
  { value: "fire", label: "Fire", Icon: FaFire },
  { value: "shield", label: "Shield", Icon: FaShieldAlt },
  { value: "bolt", label: "Bolt", Icon: FaBolt },
  { value: "award", label: "Award", Icon: FaAward },
  { value: "thumbsup", label: "Thumbs Up", Icon: FaThumbsUp },
  { value: "rocket", label: "Rocket", Icon: FaRocket },
];

export function getBadgeIconComponent(iconType) {
  const entry = BADGE_ICON_TYPES.find(
    (t) => t.value === (iconType || "").toLowerCase()
  );
  return entry ? entry.Icon : FaStar;
}
