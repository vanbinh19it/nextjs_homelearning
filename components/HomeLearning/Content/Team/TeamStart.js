import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import instructor1 from "../../../../public/static/assets/img/team-1.jpg";
import instructor2 from "../../../../public/static/assets/img/team-2.jpg";
import instructor3 from "../../../../public/static/assets/img/team-3.jpg";
import instructor4 from "../../../../public/static/assets/img/team-4.jpg";

import styles from "./TeamStart.module.scss";

const TeamStart = () => {
  return (
    <div className={`${styles.hello} container-xxl py-5 p-0`}>
      <div className={`${styles.hello} container p-0`}>
        <div
          className={`${styles.hello} text-center wow fadeInUp`}
          data-wow-delay="0.1s"
        >
          <h6
            className={`${styles.hello} section-title bg-white text-center text-primary px-3`}
          >
            Instructors
          </h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>
        <div className={`${styles.hello} row g-4`}>
          {[instructor1, instructor2, instructor3, instructor4].map(
            (instructor, index) => (
              <div
                key={index}
                className={`${styles.hello} col-lg-3 col-md-6 wow fadeInUp`}
                data-wow-delay={`${0.1 * (index + 1)}s`}
              >
                <div className={`${styles.hello} team-item bg-light`}>
                  <div className={`${styles.hello} overflow-hidden`}>
                    <Image
                      className={`${styles.hello} img-fluid`}
                      src={instructor}
                      alt={`Instructor ${index + 1}`}
                    />
                  </div>
                  <div
                    className={`${styles.hello} position-relative d-flex justify-content-center`}
                    style={{ marginTop: "-23px" }}
                  >
                    <div
                      className={`${styles.hello} bg-light d-flex justify-content-center pt-2 px-1`}
                    >
                      <a
                        className={`${styles.hello} btn btn-sm-square btn-primary mx-1`}
                        href="#"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a
                        className={`${styles.hello} btn btn-sm-square btn-primary mx-1`}
                        href="#"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a
                        className={`${styles.hello} btn btn-sm-square btn-primary mx-1`}
                        href="#"
                      >
                        <FontAwesomeIcon icon={faSquareInstagram} />
                      </a>
                    </div>
                  </div>
                  <div className={`${styles.hello} text-center p-4`}>
                    <h5 className="mb-0">Instructor Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamStart;
