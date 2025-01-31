import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  ResName,
  LocationLogo,
  Close,
  SocialMediaContainer,
  InstagramContainer,
  InstagramLogo,
  WhatsappContainer,
  WhatsappLogo,
  TiktokContainer,
  TiktokLogo,
  BranchesContainer,
  Branch,
  InfoContainer,
  Info,
  BranchInfo,
  CallLogo,
  MapsLogo,
  FacebookContainer,
  FacebookLogo,
  MapLink,
  PoweredBy,
  Link,
  CopyWrite,
  TitleContainer,
  ButtonFilled,
  ButtonBorder,
  ButttonWrapper,
  BranchSpan,
  BranchWrapper,
  BranchIconWrapper,
  BranchIcon,
  LineContainer,
  Line,
  Iconhole,
  SocialMediaTitle,
  SocialMediaTitleWrapper,
  ShadeBox,
  ChoosePlaceHolder,
  ShadeBorder,
  Arrow,
  OptionsList,
  Option
} from "./styles";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function LocationPopup({
  restaurant,
  showPopup,
  popupHandler
}) {
  const [activeBranch, setActiveBranch] = useState(restaurant?.branches[0]);
  const [activeButton, setActiveButton] = useState("");
  const regex = /(?:wa\.me\/|phone=)(\d+)/;

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  const handleCallButton = () => {
    if (activeButton == "Call") {
      setActiveButton("")
    } else {
      setActiveButton("Call")

    }
  }

  const handleMessageButton = () => {
    if (activeButton == "Message") {
      setActiveButton("")
    } else {
      setActiveButton("Message")

    }
  }

  useEffect(() => {
    const handlePopState = () => {
      // Revert to the normal view when back is pressed
      popupHandler(null);
    };

    // Add event listener for popstate
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);


  
  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(null);
        }}
      />
      <TitleContainer>
        <ResName>{capitalizeWords(restaurant?.name)}</ResName>
      </TitleContainer>
      <ButttonWrapper>
        <ButtonFilled activeButton={activeButton} onClick={handleCallButton}>
          {activeButton !== "Call" ?
            <>
              <LuPhoneCall size={"25px"} />Call Now
            </>
            : <>
              <OptionsList activeButton={activeButton}>
                {restaurant?.branches?.flatMap(branch =>
                  branch.phone_number.split(" ").map((phone, index) => (
                    <Option>
                      <a href={`tel:${phone}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {phone}  {branch.location && <span>- {branch.name} </span>}
                      </a>
                    </Option>
                  ))
                )}
              </OptionsList>
              <ShadeBox activeButton={activeButton}>
                <ShadeBorder activeButton={activeButton} />
              </ShadeBox>
              <ChoosePlaceHolder activeButton={activeButton}>
                Choose Number
              </ChoosePlaceHolder>
              <Arrow activeButton={activeButton} />


            </>}

        </ButtonFilled>
        <ButtonBorder activeButton={activeButton} onClick={handleMessageButton}>



          {activeButton !== "Message" ?
            <>
              <FaWhatsapp size={"25px"} />
              Message            </>
            : <>
              <OptionsList activeButton={activeButton}>
                {restaurant?.socialMedia?.filter(media => media.platform === "Whatsapp").map((number) => {
                  return (
                    <Option>
                      <a href={`https://${number.link}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {number.link.match(regex)?.[1]}
                      </a>
                    </Option>
                  )
                })

                }
                {/* {restaurant?.branches?.flatMap(branch =>
                  branch.phone_number.split(" ").map((phone, index) => (
                    <Option>
                      <a href={`tel:${phone}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {phone}  {branch.location && <span>- {branch.location} </span>}
                      </a>
                    </Option>
                  ))
                )} */}

              </OptionsList>
              <ShadeBox activeButton={activeButton}>
                <ShadeBorder activeButton={activeButton} />
              </ShadeBox>
              <ChoosePlaceHolder activeButton={activeButton}>
                Choose Number
              </ChoosePlaceHolder>
              <Arrow activeButton={activeButton} />


            </>}


        </ButtonBorder>

      </ButttonWrapper>

      {/* <BranchesContainer>
        {restaurant?.branches?.map((branch) => {
          return (
            branch.name && 
            <Branch
              onClick={() => setActiveBranch(branch)}
              activeBranch={activeBranch.id}
              BranchId={branch.id}
            >
              {branch.name}
            </Branch>
            
          );
        })}
      </BranchesContainer> */}
      <BranchInfo>
        {restaurant?.branches?.name && <BranchSpan>Branches</BranchSpan>}

        <BranchesContainer>

          {restaurant?.branches?.map((branch, index) => {
            return (
              branch.name &&
              <>
                <BranchWrapper>
                  {index !== restaurant?.branches?.length - 1 && <LineContainer index={index}>
                    <Line />
                  </LineContainer>}
                  <BranchIconWrapper>
                  <FaLocationDot/>
                    {/* <Iconhole />
                    <BranchIcon /> */}
                  </BranchIconWrapper>
                  <Branch
                    href={`https://${branch?.mapLink}`}

                  >
                    {branch.location}
                  </Branch>
                </BranchWrapper>
              </>
            );
          })}
        </BranchesContainer>

      </BranchInfo>
      <SocialMediaTitleWrapper>
        <SocialMediaTitle>Follow Us</SocialMediaTitle>
      </SocialMediaTitleWrapper>
      <SocialMediaContainer>
        {restaurant.socialMedia.find(
          (media) => media.platform == "Instagram"
        ) && (
            <InstagramContainer
              href={`https://${restaurant.socialMedia.find(
                (media) => media.platform == "Instagram"
              ).link
                }`}
            >
              <InstagramLogo />
            </InstagramContainer>
          )}
        {/* {restaurant.socialMedia.find(
          (media) => media.platform == "Whatsapp"
        ) && (
            <WhatsappContainer
              href={`https://${restaurant.socialMedia.find(
                (media) => media.platform == "Whatsapp"
              ).link
                }`}
            >
              <WhatsappLogo />
            </WhatsappContainer>
          )} */}
        {restaurant.socialMedia.find(
          (media) => media.platform == "Facebook"
        ) && (
            <FacebookContainer
              href={`https://${restaurant.socialMedia.find(
                (media) => media.platform == "Facebook"
              ).link
                }`}
            >
              <FacebookLogo />
            </FacebookContainer>
          )}
        {restaurant.socialMedia.find((media) => media.platform == "Tiktok") && (
          <TiktokContainer
            href={`https://${restaurant.socialMedia.find((media) => media.platform == "Tiktok")
              .link
              }`}
          >
            <TiktokLogo />
          </TiktokContainer>
        )}
      </SocialMediaContainer>

      <PoweredBy>
        Copyright
        <CopyWrite />
        2024 <Link href="https://www.menugic.com">menugic.com</Link>
      </PoweredBy>
    </Container>
  );
}
