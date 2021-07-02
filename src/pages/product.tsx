import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import BannerSection from "../components/product/BannerSection";
import FormSection from "../components/contact_us/FormSection";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavBar from "../components/navbar/Navbar";
import ProductDescriptionSection from "../components/product/ProductDescriptionSection";
import TestimonialSection from "../components/TestimonialsSection";
import SpecialistForm from "../components/home/SpecialistForm";

const ProductPage = () => {
    return (
        <Layout
            title="Welcome to Afrihealth"
            className="bg-gray-100 h-screen">
            <div className="sticky top-0 z-40">
                <NavBar />
            </div>
            <div className="relative">
                <div className="relative bg-gray-100">
                    <BannerSection />
                    <ProductDescriptionSection />
                    <TestimonialSection />
                    <SpecialistForm />
                </div>
                <Footer />
            </div>
            <ScrollToTop
                style={{
                    borderRadius: 50,
                    backgroundColor: "purple",
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