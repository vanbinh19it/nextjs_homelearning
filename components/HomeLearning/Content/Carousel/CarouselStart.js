import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from "./CarouselStart.modules.scss";

import Image from "next/image";

import Carousel1 from "../../../../public/static/assets/img/carousel-1.jpg";
import Carousel2 from "../../../../public/static/assets/img/carousel-2.jpg";

// Dynamically import OwlCarousel to prevent SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const CarouselStart = () => {
  const carouselOptions = {
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: [
      '<span class="carousel-control-prev-icon" aria-hidden="true"></span>',
      '<span class="carousel-control-next-icon" aria-hidden="true"></span>',
    ],
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <OwlCarousel
        className="owl-theme header-carousel position-relative"
        {...carouselOptions}
      >
        <div className="owl-carousel-item position-relative">
          <Image className="img-fluid" src={Carousel1} alt="Carousel 1" />
          <div
            className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center overlay ${styles.hello}`}
            style={{ background: "rgba(24, 29, 56, .7)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                    Best Online Courses
                  </h5>
                  <h1 className="display-3 text-white animated slideInDown">
                    The Best Online Learning Platform
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea sanctus eirmod elitr.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <Image className="img-fluid" src={Carousel2} alt="Carousel 2" />
          <div
            className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center ${styles.overlay}`}
            style={{ background: "rgba(24, 29, 56, .7)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                    Best Online Courses
                  </h5>
                  <h1 className="display-3 text-white animated slideInDown">
                    Get Educated Online From Your Home
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                    diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                    sea sanctus eirmod elitr.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CarouselStart;
