
import TopSection from './Components/top-section/TopSection';
import CarouselSection from './Components/CarouselSection/CarouselSection';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import Header from './Components/header/header';
import Footer from './Components/Footer/Footer';
import HowItWorksSection from './Components/HowItWorksSection/HowItWorksSection';
import PricingSection from './Components/PricingSection/PricingSection';
import "./home.css";
import Whatsapp from "./whatsapp.png";
export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "96178911634"; // Add your WhatsApp phone number here

    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank"); // Opens WhatsApp in a new tab
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='Wrapper' id='home'>
      <Header />

      <TopSection
        onPrimaryCta={handleWhatsAppClick}
        onSecondaryCta={() => handleScroll('pricing')}
      />

      <CarouselSection />
      <FeaturesSection />
      <HowItWorksSection onPrimaryCta={handleWhatsAppClick} />
      <PricingSection onPrimaryCta={handleWhatsAppClick} />
      <Footer />

      <div className='wp-iconwrapper' onClick={handleWhatsAppClick}>
        <img src={Whatsapp} className='wp-logoimage' alt='WhatsApp' />
      </div>
    </div>
  );
}

