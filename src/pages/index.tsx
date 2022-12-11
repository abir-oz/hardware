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
import NavBar from "../components/NavBar/NavBar";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import TestimonialCarousel from "../components/Testimonials/TestimonialCarousel";
import WhatWeDo from "../components/WhatWeDo";
import WhyUs from "../components/WhyUs";
import YoutubeVideos from "../components/Youtube";


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NKE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <Hero />
        <WhatWeDo />
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
