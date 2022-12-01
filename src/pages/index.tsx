import type { NextPage } from "next";
import Head from "next/head";
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import LatestNews from "../components/LatestNews";
import LetUsRolling from "../components/LetUsRolling";
import NavBar from "../components/NavBar";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";
import WhyUs from "../components/WhyUs";
import YoutubeVideos from "../components/Youtube";


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <Hero />
        <ProductCarousel />
        <WhyUs />
        <LetUsRolling />
        <YoutubeVideos />
        <TestimonialCarousel />
        <LatestNews />
        <FollowUs />
      </main>
      <Footer />
    </div >
  );
};

export default Home;
