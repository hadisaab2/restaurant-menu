
import TopSection from './Components/top-section/TopSection';
import CarouselSection from './Components/CarouselSection/CarouselSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import Footer from './Components/Footer/Footer';
import "./home.css"
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from "react-icons/io";
import MenugicLogo from "./Components/header/Menugic-Logo.png"
import Whatsapp from "./whatsapp.png"
export default function Home() {
  const [viewSidebar, setviewSidebar] = useState(false)
  // useEffect(()=>{
  //   const link = document.getElementById("favicon");
  //   link.href = `menugicLogo.png`;

  // },[])
  const menuItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Clients', sectionId: 'clients' },
    { name: 'Features', sectionId: 'features' },
  ];
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (ensure it's in the correct format)
    const phoneNumber = "96178911634"; // Add your WhatsApp phone number here

    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank"); // Opens WhatsApp in a new tab
  };

  // Function to handle the scrolling when clicking a menu item
  const handleScroll = (sectionId) => {
    setviewSidebar(!viewSidebar)
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isVisible, setIsVisible] = useState(window.innerWidth > 450);
  useEffect(() => {
    function handleResize() {
      setIsVisible(window.innerWidth > 450);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div id='home'>
      {/* {!isVisible &&
        <>
          <RxHamburgerMenu onClick={() => { setviewSidebar(!viewSidebar) }} className='burger' />
          <div className='sidebar' style={{ left: viewSidebar ? "0%" : "-100%" }}>
            <IoMdClose onClick={() => { setviewSidebar(!viewSidebar) }} className='close' />
            <img className="sidbar-logo" src={MenugicLogo} alt="wegrgwr" />

            <div className='tabs'>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className='tab'
                  onClick={() => handleScroll(item.sectionId)}  // Scroll to the specific section
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

        </>
      } */}
      <div className='Wrapper'>
        <div className='right-part'>
          <TopSection />
        </div>
      </div>
      <CarouselSection />
      <div>
        <FeaturesSection />
      </div>
      <Footer />

      <div className='wp-iconwrapper' onClick={handleWhatsAppClick}>
        <img src={Whatsapp} className='wp-logoimage'/>
      </div>
    </div>

  );
}

