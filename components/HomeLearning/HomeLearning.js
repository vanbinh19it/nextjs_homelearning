import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CarouselStart from "./Carousel/CarouselStart";
import ServiceStart from "./ServiceStart/ServiceStart";
import AboutStart from "./About/AboutStart";
import CategoriesStart from "./Categories/CategoriesStart";
import CourseStart from "./Course/CourseStart";
import TeamStart from "./Team/TeamStart";
import Testimonial from "./Testimonial/Testimonial";

const HomeLearning = () => {
  return (
    // <div className="container-fluid full-screen">
    <>
      <CarouselStart />

      <ServiceStart />

      <AboutStart />

      <CategoriesStart />

      <CourseStart />

      <TeamStart />

      <Testimonial />
    </>
    // </div>
  );
};

export default HomeLearning;
