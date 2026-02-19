import React from "react";
import HomeHero from "../components/HomeComponents/HomeHero";
import FindMoreCards from "../components/HomeComponents/FindMoreCards";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import IhIcdPartnership from "../components/HomeComponents/IhIcdPartnership";
import QuickLinks from "../components/HomeComponents/QuickLinks";
import OurTutors from "../components/HomeComponents/OurTutors";
import GoogleReviews from "../components/HomeComponents/GoogleReviews";
import VideoTestimonials from "../components/HomeComponents/VideoTestimonials";
import QrCodeEnquiry from "../components/HomeComponents/QrCodeEnquiry";
const Home = () => {
  return (
    <>
      <HomeHero />
      <QuickLinks/>
      <FindMoreCards />
      <WhyChooseUs />
      <IhIcdPartnership />
      <OurTutors/>
      <VideoTestimonials/>
      <GoogleReviews/>
     <QrCodeEnquiry/>
    </>
  );
};

export default Home;
