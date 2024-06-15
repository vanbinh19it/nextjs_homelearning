import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Dynamically import OwlCarousel to prevent SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

import testimonial1 from "../../../../public/static/assets/img/testimonial-1.jpg";
import testimonial2 from "../../../../public/static/assets/img/testimonial-2.jpg";
import testimonial3 from "../../../../public/static/assets/img/testimonial-3.jpg";
import testimonial4 from "../../../../public/static/assets/img/testimonial-4.jpg";

import styles from "./Testimonial.module.scss";

const Testimonial = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div
      className={`${styles.hello} container-xxl py-5 p-1 wow fadeInUp`}
      data-wow-delay="0.1s"
    >
      <div className={`${styles.hello} container p-1`}>
        <div className={`${styles.hello} text-center`}>
          <h6
            className={`${styles.hello} section-title bg-white text-center text-primary px-3`}
          >
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <OwlCarousel
          className={`${styles.hello} owl-carousel testimonial-carousel position-relative`}
          {...options}
        >
          {[testimonial1, testimonial2, testimonial3, testimonial4].map(
            (testimonial, index) => (
              <div
                key={index}
                className={`${styles.hello} testimonial-item text-center`}
              >
                <Image
                  className={`${styles.hello} border rounded-circle p-2 mx-auto mb-3`}
                  src={testimonial}
                  alt={`Testimonial ${index + 1}`}
                  // width={80}
                  // height={80}
                  style={{
                    width: "80px",
                    height: "80px",
                  }}
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div
                  className={`${styles.hello} testimonial-text bg-light text-center p-4`}
                >
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  </p>
                </div>
              </div>
            )
          )}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
