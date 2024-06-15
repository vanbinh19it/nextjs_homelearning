import React from "react";
import Image from "next/image";

import cat1Image from "../../../../public/static/assets/img/cat-1.jpg";
import cat2Image from "../../../../public/static/assets/img/cat-2.jpg";
import cat3Image from "../../../../public/static/assets/img/cat-3.jpg";
import cat4Image from "../../../../public/static/assets/img/cat-4.jpg";

import styles from "./CategoriesStart.scss";

import about from "../About/AboutStart.module.scss";

const CategoriesStart = () => {
  return (
    <div className={`${styles.hello} container-xxl py-5 p-1 category`}>
      <div className={`${about.categories_home} container p-1`}>
        <div
          className={`${styles.hello} text-center wow fadeInUp`}
          data-wow-delay="0.1s"
        >
          <h6
            className={`${styles.hello} section-title bg-white text-center text-primary px-3`}
          >
            Categories
          </h6>
          <h1 className="mb-5">Courses Categories</h1>
        </div>
        <div className={`${styles.hello} row g-3`}>
          <div className={`${styles.hello} col-lg-7 col-md-6`}>
            <div className={`${styles.hello} row g-3`}>
              <div
                className={`${styles.hello} col-lg-12 col-md-12 wow zoomIn`}
                data-wow-delay="0.1s"
                style={{ minHeight: "350px" }}
              >
                <a
                  className={`${styles.hello} position-relative d-block overflow-hidden h-100`}
                  href=""
                >
                  <Image
                    src={cat1Image}
                    alt="cat1Image"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    className={`${styles.hello} bg-white text-center position-absolute bottom-0 end-0 py-2 px-3`}
                  >
                    <h5 className="m-0">Web Design</h5>
                    <small className={`${styles.hello} text-primary`}>
                      49 Courses
                    </small>
                  </div>
                </a>
              </div>
              <div
                className={`${styles.hello} col-lg-6 col-md-12 wow zoomIn`}
                data-wow-delay="0.3s"
                style={{ minHeight: "350px" }}
              >
                <a
                  className={`${styles.hello} position-relative d-block 
                   h-100 overflow-hidden`}
                  href=""
                >
                  <Image
                    src={cat2Image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    className={`${styles.hello} bg-white text-center position-absolute bottom-0 end-0 py-2 px-3`}
                  >
                    <h5 className="m-0">Graphic Design</h5>
                    <small className={`${styles.hello} text-primary`}>
                      49 Courses
                    </small>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
                style={{ minHeight: "350px" }}
              >
                <a
                  className={`${styles.hello} position-relative d-block 
                   h-100 overflow-hidden`}
                  href=""
                >
                  <Image
                    src={cat3Image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    className={`${styles.hello} bg-white text-center position-absolute bottom-0 end-0 py-2 px-3`}
                  >
                    <h5 className="m-0">Video Editing</h5>
                    <small className={`${styles.hello} text-primary`}>
                      49 Courses
                    </small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${styles.hello} col-lg-5 col-md-6 wow zoomIn`}
            data-wow-delay="0.7s"
            style={{ minHeight: "350px" }}
          >
            <a
              className={`${styles.hello} position-relative d-block h-100 overflow-hidden`}
              href=""
            >
              <Image src={cat4Image} alt="" layout="fill" objectFit="cover" />
              <div
                className={`${styles.hello} bg-white text-center position-absolute bottom-0 end-0 py-2 px-3`}
              >
                <h5 className="m-0">Online Marketing</h5>
                <small className={`${styles.hello} text-primary`}>
                  49 Courses
                </small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesStart;
