import React, { useState } from "react";
import {
  HomeContainer,
  SemiCircleCard,
  Logo,
  IconCircle,
  IconButton,
  IconLabel,
  IconWrapper,
  TopBar,
  LanguageButton,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { FaCommentDots, FaBox, FaMapMarkerAlt, FaShareAlt, FaShoppingBag } from "react-icons/fa";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import FeedbackForm from "./FeedbackForm/index";
import BranchesPage from "./BranchesPage/index";
import SocialMediaPopup from "./SocialMediaPopup/index";

export default function HomePage({ onExploreClick, onToggleSidebar, onOrdersClick }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const dispatch = useDispatch();

  const [showFeedback, setShowFeedback] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  const handleLanguageToggle = () => {
    dispatch(changelanuage({ 
      name: restaurantName, 
      activeLanguage: activeLanguage === "en" ? "ar" : "en" 
    }));
  };

  const handleIconClick = (type) => {
    switch (type) {
      case "feedback":
        setShowFeedback(true);
        break;
      case "products":
        onExploreClick();
        break;
      case "location":
        setShowBranches(true);
        break;
      case "social":
        setShowSocialMedia(true);
        break;
      case "orders":
        if (onOrdersClick) {
          onOrdersClick();
        }
        break;
      default:
        break;
    }
  };

  const menuItems = [
    {
      id: "feedback",
      icon: FaCommentDots,
      label: activeLanguage === "en" ? "Feedback" : "التعليقات",
    },
    {
      id: "products",
      icon: FaBox,
      label: activeLanguage === "en" ? "Products" : "المنتجات",
    },
    {
      id: "location",
      icon: FaMapMarkerAlt,
      label: activeLanguage === "en" ? "Branches" : "الفروع",
    },
    {
      id: "social",
      icon: FaShareAlt,
      label: activeLanguage === "en" ? "Social Media" : "وسائل التواصل",
    },
    {
      id: "orders",
      icon: FaShoppingBag,
      label: activeLanguage === "en" ? "Orders" : "الطلبات",
    },
  ];

  return (
    <HomeContainer>
      {restaurant?.languages == "en&ar" && (
        <TopBar activeLanguage={activeLanguage}>
          <LanguageButton onClick={handleLanguageToggle} activeLanguage={activeLanguage}>
            <FaGlobe />
          </LanguageButton>
        </TopBar>
      )}

      <SemiCircleCard activeLanguage={activeLanguage}>
        {restaurant?.logoURL && (
          <Logo
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
            alt={restaurant?.name || "Logo"}
            activeLanguage={activeLanguage}
          />
        )}
        {/* Icons around the circle */}
        {menuItems.map((item, index) => {
          // Position icons starting at 22 degrees from top (top is -90 degrees in standard coordinates)
          // In standard math: 0° = right, 90° = top, so -90° = top, -68° = top-right
          // To get top-right at 22° from top: -90 + 22 = -68°
          // Then add 36 degrees for each subsequent button (180/5 = 36 degrees spacing for 5 icons)
          const angleFromTop = -90 + 15 + (index * 36); // -68, -32, 4, 40, 76 degrees
          const radius = 250; // Increased radius to position icons further from circle
          const x = Math.cos((angleFromTop * Math.PI) / 180) * radius;
          const y = Math.sin((angleFromTop * Math.PI) / 180) * radius;
          
          return (
            <IconWrapper
              key={item.id}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <IconCircle
                onClick={() => handleIconClick(item.id)}
                activeLanguage={activeLanguage}
              >
                <IconButton>
                  <item.icon />
                </IconButton>
              </IconCircle>
              <IconLabel activeLanguage={activeLanguage}>
                {item.label}
              </IconLabel>
            </IconWrapper>
          );
        })}
      </SemiCircleCard>

      {showFeedback && (
        <FeedbackForm
          restaurant={restaurant}
          activeLanguage={activeLanguage}
          onClose={() => setShowFeedback(false)}
        />
      )}

      {showBranches && (
        <BranchesPage
          restaurant={restaurant}
          activeLanguage={activeLanguage}
          onClose={() => setShowBranches(false)}
        />
      )}

      {showSocialMedia && (
        <SocialMediaPopup
          restaurant={restaurant}
          activeLanguage={activeLanguage}
          onClose={() => setShowSocialMedia(false)}
        />
      )}
    </HomeContainer>
  );
}
