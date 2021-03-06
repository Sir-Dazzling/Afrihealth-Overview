import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import BannerSection from "../components/product/BannerSection";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavBar from "../components/navbar/Navbar";
import ProductDescriptionSection from "../components/product/ProductDescriptionSection";
import TestimonialSection from "../components/TestimonialsSection";
import SpecialistForm from "../components/home/SpecialistForm";
import PolarisSection from "../components/product/PolarisSection";
import PiconSection from "../components/product/PiconSection";
import Fade from 'react-reveal/Fade';

const ProductPage = () => {
    return (
        <Layout
            title="Welcome to Afrihealth"
            className="bg-gray-normal h-screen">
            <div className="sticky top-0 z-40">
                <NavBar />
            </div>
            <div className="relative">
                <div className="relative bg-gray-100">
                    <BannerSection />
                    <Fade>
                        <ProductDescriptionSection />
                    </Fade>
                    <Fade bottom>
                        <div>
                            <PolarisSection />
                            <PiconSection />
                        </div>
                    </Fade>
                    <TestimonialSection />
                    <SpecialistForm />
                </div>
                <Footer />
            </div>
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
        </Layout>
    );
};

export default ProductPage;