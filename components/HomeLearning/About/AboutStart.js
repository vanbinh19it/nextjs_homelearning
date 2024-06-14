import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import aboutUs from "../../../public/static/assets/img/about.jpg";

import styles from "./AboutStart.module.scss";

const AboutStart = () => {
  return (
    <div className={`${styles.about} container-xxl p-1 py-5 `}>
      <div className={`${styles.about_hello} container `}>
        <div className={`${styles.hello} row g-5`}>
          <div
            className={`${styles.hello} col-lg-6 wow fadeInUp`}
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className={`${styles.hello} position-relative h-100`}>
              <Image src={aboutUs} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div
            className={`${styles.hello} col-lg-6 wow fadeInUp`}
            data-wow-delay="0.3s"
          >
            <h6
              className={`${styles.hello} section-title bg-white text-start text-primary pe-3`}
            >
              About Us
            </h6>
            <h1 className={`${styles.hello} mb-4`}>Welcome to eLEARNING</h1>
            <p className={`${styles.hello} mb-4`}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className={`${styles.hello} mb-4`}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className={`${styles.hello} row gy-2 gx-4 mb-4`}>
              <div className={`${styles.hello} col-sm-6`}>
                <p className={`${styles.hello} mb-0`}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  Skilled Instructors
                </p>
              </div>
              <div className={`${styles.hello} col-sm-6`}>
                <p className={`${styles.hello} mb-0`}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  Online Classes
                </p>
              </div>
              <div className={`${styles.hello} col-sm-6`}>
                <p className={`${styles.hello} mb-0`}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  International Certificate
                </p>
              </div>
              <div className={`${styles.hello} col-sm-6`}>
                <p className={`${styles.hello} mb-0`}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  Skilled Instructors
                </p>
              </div>
              <div className={`${styles.hello} col-sm-6`}>
                <p className={`${styles.hello} mb-0`}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  Online Classes
                </p>
              </div>
              <div className={`${styles.hello} col-sm-6`}>
                <p className={`${styles.hello} mb-0`}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  International Certificate
                </p>
              </div>
            </div>
            <a
              className={`${styles.hello} btn btn-primary py-3 px-5 mt-2`}
              href=""
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStart;
