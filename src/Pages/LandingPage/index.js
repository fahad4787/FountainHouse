import AboutUs from "Components/AboutUs";
import Banner from "Components/Banner";
import Feature from "Components/Feature";
import Header from "Components/Header";
import Join from "Components/Join";
import Project from "Components/Project";
import Testimonials from "Components/Testimonials";
import React from "react";

const join = [
  {
      title: "Our Philosophy",
      description: "Our Philosophy of mental health rehabilitation & treatment emphasizes respect for members (patients) and families, with the goal to provide care at the least restrictive level possible, freedom to choose and participate in the working community units within and in the local community",

  }
]

const ward = [
  {
      title: "EXCLUSIVE FEMALE WARD",
      description: "Evidence suggests that mental health services have historically ignored the needs of female patients. We have an exclusive female block with 100 beds managed by fully professional and well trained female staff.",

  }
]

const LandingPage = () => {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <Join data={join}/>
    <Project/>
    <Testimonials/>
    <Join data={ward} custClass="mt-0"/>
    <Feature/>
    </>
  );
};

export default LandingPage;
