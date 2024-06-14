import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faGlobe,
  faHouse,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./ServiceStart.module.scss";

const ServiceStart = () => {
  return (
    <div className={`${styles.hello} container-xxl py-5 p-1`}>
      <div className={`${styles.hello} container p-1`}>
        <div className={`${styles.hello} row g-4`}>
          <div
            className={`${styles.hello} col-lg-3 col-sm-6 wow fadeInUp`}
            data-wow-delay="0.1s"
          >
            <div className={`${styles.hello} service-item text-center pt-3`}>
              <div className="p-4">
                {/* <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i> */}
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="mb-4"
                  size="3x"
                  color="#06bbcc"
                />

                <h5 className="mb-3">Skilled Instructors</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.hello} col-lg-3 col-sm-6 wow fadeInUp`}
            data-wow-delay="0.3s"
          >
            <div className={`${styles.hello} service-item text-center pt-3`}>
              <div className="p-4">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="mb-4"
                  size="3x"
                  color="#06bbcc"
                />
                <h5 className="mb-3">Online Classes</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.hello} col-lg-3 col-sm-6 wow fadeInUp`}
            data-wow-delay="0.5s"
          >
            <div className={`${styles.hello} service-item text-center pt-3`}>
              <div className="p-4">
                {/* <i className="fa fa-3x fa-home text-primary mb-4"></i> */}
                <FontAwesomeIcon
                  icon={faHouse}
                  className="mb-4"
                  size="3x"
                  color="#06bbcc"
                />
                <h5 className="mb-3">Home Projects</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.hello} col-lg-3 col-sm-6 wow fadeInUp`}
            data-wow-delay="0.7s"
          >
            <div className={`${styles.hello} service-item text-center pt-3`}>
              <div className="p-4">
                {/* <i className="fa fa-3x fa-book-open text-primary mb-4"></i> */}
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="mb-4"
                  size="3x"
                  color="#06bbcc"
                />
                <h5 className="mb-3">Book Library</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStart;
