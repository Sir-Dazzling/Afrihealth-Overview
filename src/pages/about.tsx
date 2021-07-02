import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-to-top'
import BannerSection from '../components/about/BannerSection'
import Layout from '../components/Layout'
import NavBar from '../components/navbar/Navbar'

const AboutPage = () => (
  <Layout
    title="Welcome to Afrihealth"
    className="bg-gray-100 h-screen">
    <div className="sticky top-0 z-40">
      <NavBar />
    </div>
    <div className="relative">
      <BannerSection />
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
)

export default AboutPage
