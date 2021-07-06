import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../components/Footer";
import SpecialistForm from "../../components/product/SpecialistForm";
import Layout from "../../components/Layout";
import NavBar from "../../components/navbar/Navbar";
import Header from "../../components/product/rigour_app/Header";
import TestimonialSection from "../../components/product/TestimonialSection";
import RigourDetails from "../../components/product/RigourDetails";
import RigourDetails2 from "../../components/product/RigourDetails2";
import AppFeaturesSection from "../../components/product/AppFeaturesSection";

const RigourAppPage = () => {
    return (
        <Layout
            title="Welcome to Afrihealth"
            className="bg-gray-heavy h-screen">
            <div className="sticky top-0 z-40">
                <NavBar />
            </div>
            <div className="relative bg-gray-normal">
                <Header />
                <RigourDetails />
                <RigourDetails2 />
                <AppFeaturesSection />
                <TestimonialSection />
                <SpecialistForm />
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

export default RigourAppPage;