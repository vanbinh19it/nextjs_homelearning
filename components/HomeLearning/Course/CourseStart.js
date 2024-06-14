import React from "react";
import Image from "next/image";

import course1 from "../../../public/static/assets/img/course-1.jpg";
import course2 from "../../../public/static/assets/img/course-2.jpg";
import course3 from "../../../public/static/assets/img/course-3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faClock,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./CourseStart.module.scss";

const CourseStart = () => {
  return (
    <div className={`${styles.hello} container-xxl py-5 p-0`}>
      <div className="container p-0">
        <div
          className={`${styles.hello} text-center wow fadeInUp`}
          data-wow-delay="0.1s"
        >
          <h6
            className={`${styles.hello} section-title bg-white text-center text-primary px-3`}
          >
            Courses
          </h6>
          <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className={`${styles.hello} row g-4 justify-content-center`}>
          <div
            className={`${styles.hello} col-lg-4 col-md-6 wow fadeInUp`}
            data-wow-delay="0.1s"
          >
            <div className={`${styles.hello} course-item bg-light`}>
              <div
                className={`${styles.hello} position-relative overflow-hidden`}
              >
                <Image
                  className={`${styles.hello} img-fluid`}
                  src={course1}
                  alt="Course 1"
                />
                <div
                  className={`${styles.hello} w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4`}
                >
                  <a
                    href="#"
                    className={`${styles.hello} flex-shrink-0 btn btn-sm btn-primary px-3 border-end`}
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className={`${styles.hello} flex-shrink-0 btn btn-sm btn-primary px-3`}
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className={`${styles.hello} text-center p-4 pb-0`}>
                <h3 className="mb-0">$149.00</h3>
                <div className={`${styles.hello} mb-3`}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <small>(123)</small>
                </div>
                <h5 className="mb-4">
                  Web Design & Development Course for Beginners
                </h5>
              </div>
              <div className={`${styles.hello} d-flex border-top`}>
                <small
                  className={`${styles.hello} flex-fill text-center border-end py-2`}
                >
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  John Doe
                </small>
                <small
                  className={`${styles.hello} flex-fill text-center border-end py-2`}
                >
                  <FontAwesomeIcon
                    icon={faClock}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  1.49 Hrs
                </small>
                <small className={`${styles.hello} flex-fill text-center py-2`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  30 Students
                </small>
              </div>
            </div>
          </div>
          <div
            className={`${styles.hello} col-lg-4 col-md-6 wow fadeInUp`}
            data-wow-delay="0.3s"
          >
            <div className={`${styles.hello} course-item bg-light`}>
              <div
                className={`${styles.hello} position-relative overflow-hidden`}
              >
                <Image className="img-fluid" src={course2} alt="Course 2" />
                <div
                  className={`${styles.hello} w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4`}
                >
                  <a
                    href="#"
                    className={`${styles.hello} flex-shrink-0 btn btn-sm btn-primary px-3 border-end`}
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className={`${styles.hello} flex-shrink-0 btn btn-sm btn-primary px-3`}
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className={`${styles.hello} text-center p-4 pb-0`}>
                <h3 className={`${styles.hello} mb-0`}>$149.00</h3>
                <div className={`${styles.hello} mb-3`}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <small>(123)</small>
                </div>
                <h5 className="mb-4">
                  Web Design & Development Course for Beginners
                </h5>
              </div>
              <div className={`${styles.hello} d-flex border-top`}>
                <small
                  className={`${styles.hello} flex-fill text-center border-end py-2`}
                >
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  John Doe
                </small>
                <small
                  className={`${styles.hello} flex-fill text-center border-end py-2`}
                >
                  <FontAwesomeIcon
                    icon={faClock}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  1.49 Hrs
                </small>
                <small className={`${styles.hello} flex-fill text-center py-2`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  30 Students
                </small>
              </div>
            </div>
          </div>
          <div
            className={`${styles.hello} col-lg-4 col-md-6 wow fadeInUp`}
            data-wow-delay="0.5s"
          >
            <div className={`${styles.hello} course-item bg-light`}>
              <div
                className={`${styles.hello} position-relative overflow-hidden`}
              >
                <Image
                  className={`${styles.hello} img-fluid`}
                  src={course3}
                  alt="Course 3"
                />
                <div
                  className={`${styles.hello} w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4`}
                >
                  <a
                    href="#"
                    className={`${styles.hello} flex-shrink-0 btn btn-sm btn-primary px-3 border-end`}
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className={`${styles.hello} flex-shrink-0 btn btn-sm btn-primary px-3`}
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className={`${styles.hello} text-center p-4 pb-0`}>
                <h3 className="mb-0">$149.00</h3>
                <div className={`${styles.hello} mb-3`}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${styles.hello} text-primary`}
                  />

                  <small>(123)</small>
                </div>
                <h5 className="mb-4">
                  Web Design & Development Course for Beginners
                </h5>
              </div>
              <div className={`${styles.hello} d-flex border-top`}>
                <small
                  className={`${styles.hello} flex-fill text-center border-end py-2`}
                >
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  John Doe
                </small>
                <small
                  className={`${styles.hello} flex-fill text-center border-end py-2`}
                >
                  <FontAwesomeIcon
                    icon={faClock}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  1.49 Hrs
                </small>
                <small className={`${styles.hello} flex-fill text-center py-2`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`${styles.hello} text-primary me-2`}
                  />
                  30 Students
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStart;
