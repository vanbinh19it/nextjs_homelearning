import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CarouselStart from "./Content/Carousel/CarouselStart";
import ServiceStart from "./Content/ServiceStart/ServiceStart";
import AboutStart from "./Content/About/AboutStart";
import CategoriesStart from "./Content/Categories/CategoriesStart";
import CourseStart from "./Content/Course/CourseStart";
import TeamStart from "./Content/Team/TeamStart";
import Testimonial from "./Content/Testimonial/Testimonial";
import AboutDemo from "./Content/About/AboutDemo";

const HomeLearning = () => {
  return (
    // <div className="container-fluid full-screen">
    <>
      <CarouselStart />

      <ServiceStart />

      <AboutStart />
      <AboutDemo />

      <CategoriesStart />

      <CourseStart />

      <TeamStart />

      <Testimonial />
    </>
    // </div>
  );
};

export default HomeLearning;
