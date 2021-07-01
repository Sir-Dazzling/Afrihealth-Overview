import CarouselSection from '../components/carousel/Carousel';
import Layout from '../components/Layout'
import NavBar from '../components/navbar/Navbar';

const IndexPage = () => {
  return (
    <Layout
    title="Welcome to Afrihealth"
    className="bg-gray-100 h-screen">
      <NavBar />
      <CarouselSection />
    </Layout>
  );
};

export default IndexPage
