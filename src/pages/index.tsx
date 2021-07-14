import CarouselSection from '../components/carousel/Carousel';
import Healthcare from '../components/home/health/HealthcareSection';
import Telecare from '../components/home/TelecareSection';
import Layout from '../components/Layout'
import NavBar from '../components/navbar/Navbar';
import ScrollToTop from 'react-scroll-to-top';
import { FaChevronUp } from 'react-icons/fa';
import AppSection from '../components/home/AppSection';
import MedicalAccessSection from '../components/home/MedicalAccessSection';
import BenefitsSection from '../components/home/BenefitsSection';
import TestimonialSection from '../components/TestimonialsSection';
import SpecialistForm from '../components/home/SpecialistForm';
import Footer from '../components/Footer';
import { animated, Spring } from 'react-spring';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';

const IndexPage = () => {
  return (
    <Layout
      title="Welcome to Afrihealth"
      className="bg-gray-normal h-screen">
      <div className="sticky top-0 z-40">
        <NavBar />
      </div>
      <div className="relative">
        <CarouselSection />
        <Reveal>
          <Healthcare />
        </Reveal>
        <Reveal>
          <Telecare />
        </Reveal>
        <AppSection />
        <MedicalAccessSection />
        <BenefitsSection />
        <TestimonialSection />
        <SpecialistForm />
        <Footer />
      </div>
      <div className="flex self-end">
        <ScrollToTop
          style={{
            borderRadius: 50,
            backgroundColor: "#56259b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
            zIndex: 40
          }}
          component={<FaChevronUp color="white" size={24} />}
          smooth />
      </div>
    </Layout>
  );
};

export default IndexPage
