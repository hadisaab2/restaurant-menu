import { useEffect, useState } from 'react';
import './header.css'
import MenugicLogo from "./Menugic-Logo.png"
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [viewSidebar,setviewSidebar]=useState(false)
  const menuItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Clients', sectionId: 'clients' },
    { name: 'Features', sectionId: 'features' },
  ];

  // Function to handle the scrolling when clicking a menu item
  const handleScroll = (sectionId) => {
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
    <div className='Header-Wrapper'>
      {isVisible ?
        <div className='left-section'>
          <div className='Create-menu-button'>
            Contact US
          </div>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className='section'
              onClick={() => handleScroll(item.sectionId)}  // Scroll to the specific section
            >
              {item.name}
            </div>
          ))}
        </div> :<>
        </>
      }
      <div className='logo-section'>
        <img className="logo-image" src={MenugicLogo} alt="wegrgwr" />
      </div>
    </div>
  );
}
