import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavBar from "../components/navbar/Navbar";
import PricingSection from "../components/pricing/PricingSection";
import TableSection from "../components/pricing/TableSection";
import Fade from 'react-reveal/Fade';


const PricingPage = () => {
    return (
        <Layout
            title="Welcome to Afrihealth"
            className="bg-gray-normal h-screen">
            <div className="sticky top-0 z-40">
                <NavBar />
            </div>
            <div className="relative">
                <PricingSection />
                <Fade bottom>
                    <TableSection />
                </Fade>
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

export default PricingPage;