import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Source1 from "../../../public/static/assets/img//course-1.jpg";
import Source2 from "../../../public/static/assets/img/course-2.jpg";
import Source3 from "../../../public/static/assets/img/course-3.jpg";

import styles from "./Footer.module.scss";

const FooterStart = () => {
  return (
    <div
      className={`${styles.footer} container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn`}
      data-wow-delay="0.1s"
    >
      <div className={`${styles.footer_item_tren} container py-5`}>
        <div className={`${styles.footer_content} row g-5`}>
          <div className={`${styles.footer_list_item} col-lg-3 col-md-6`}>
            <h4 className={`${styles.footer_title} text-white mb-3`}>
              Quick Link
            </h4>
            <Link href="#" legacyBehavior>
              <a className={`${styles.footer_item_content} btn btn-link`}>
                About Us
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className={`${styles.footer_item_content} btn  btn-link`}>
                Contact Us
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className={`${styles.footer_item_content} btn btn-link`}>
                Privacy Policy
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className={`${styles.footer_item_content} btn btn-link`}>
                Terms & Condition
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className={`${styles.footer_item_content} btn  btn-link`}>
                FAQs & Help
              </a>
            </Link>
          </div>
          <div className={`${styles.hello} col-lg-3 col-md-6`}>
            <h4 className={`${styles.hello} text-white mb-3`}>Contact</h4>
            <p className={`${styles.hello} mb-2`}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={`${styles.hello} me-3`}
              />
              123 Street, New York, USA
            </p>
            <p className={`${styles.hello} mb-2`}>
              <FontAwesomeIcon
                icon={faPhone}
                className={`${styles.hello} me-3`}
              />
              +012 345 67890
            </p>
            <p className={`${styles.hello} mb-2`}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`${styles.hello} me-3`}
              />
              info@example.com
            </p>
            <div className={`${styles.hello} d-flex pt-2`}>
              <Link href="#" legacyBehavior>
                <a
                  className={`${styles.hello} btn btn-outline-light btn-social`}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a
                  className={`${styles.hello} btn btn-outline-light btn-social`}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a
                  className={`${styles.hello} btn btn-outline-light btn-social`}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a
                  className={`${styles.hello} btn btn-outline-light btn-social`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </Link>
            </div>
          </div>
          <div className={`${styles.hello} col-lg-3 col-md-6`}>
            <h4 className={`${styles.hello} text-white mb-3`}>Gallery</h4>
            <div className={`${styles.hello} row g-2 pt-2`}>
              <div className={`${styles.hello} col-4`}>
                <Image
                  className={`${styles.hello} img-fluid bg-light p-1`}
                  src={Source1}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={`${styles.hello} col-4`}>
                <Image
                  className={`${styles.hello} img-fluid bg-light p-1`}
                  src={Source2}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={`${styles.hello} col-4`}>
                <Image
                  className={`${styles.hello} img-fluid bg-light p-1`}
                  src={Source3}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={`${styles.hello} col-4`}>
                <Image
                  className={`${styles.hello} img-fluid bg-light p-1`}
                  src={Source2}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={`${styles.hello} col-4`}>
                <Image
                  className={`${styles.hello} img-fluid bg-light p-1`}
                  src={Source3}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={`${styles.hello} col-4`}>
                <Image
                  className={`${styles.hello} img-fluid bg-light p-1`}
                  src={Source1}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.hello} col-lg-3 col-md-6`}>
            <h4 className={`${styles.hello} text-white mb-3`}>Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className={`${styles.hello} position-relative mx-auto`}
              style={{ maxWidth: "400px" }}
            >
              <input
                className={`${styles.hello} form-control border-0 w-100 py-3 ps-4 pe-5`}
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className={`${styles.hello} btn btn-primary py-2 position-absolute top-1 end-0 mt-2 me-2`}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.hello} container`}>
        <div className={`${styles.hello} copyright`}>
          <div className={`${styles.hello} row`}>
            <div
              className={`${styles.hello} col-md-6 text-center text-md-start mb-3 mb-md-0`}
            >
              &copy;{" "}
              <Link href="#" legacyBehavior>
                <a className={`${styles.hello} border-bottom`}>
                  Your Site Name
                </a>
              </Link>
              , All Right Reserved. Designed By{" "}
              <Link href="https://htmlcodex.com" legacyBehavior>
                <a className={`${styles.hello} border-bottom`}>HTML Codex</a>
              </Link>
            </div>
            <div className={`${styles.hello} col-md-6 text-center text-md-end`}>
              <div className={`${styles.hello} footer-menu`}>
                <Link href="#" legacyBehavior>
                  <a>Home</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a>Cookies</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a>Help</a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a>FQAs</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterStart;
