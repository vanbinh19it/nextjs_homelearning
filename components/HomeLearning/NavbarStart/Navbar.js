import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faArrowRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-1 `}
    >
      <a
        href=""
        className={`${styles.navbar_logo} navbar-brand d-flex align-items-center px-4 px-lg-5`}
      >
        <h2 className={`${styles.navbar_logo__title} m-0 text-primary`}>
          <FontAwesomeIcon
            icon={faBook}
            className={`${styles.navbar_logo__title_icon} ms-3`}
          />
          <span className={`${styles.navbar_logo__title_span} ms-2`}>
            eLEARNING
          </span>
        </h2>
      </a>
      <button
        type="button"
        className={`${styles.navbar_button_toggler} navbar-toggler me-4`}
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <span className={`${styles.navbar_toggler_icon} navbar-toggler-icon`} />
      </button>
      <div
        className={`${styles.navbar_collapse} collapse navbar-collapse`}
        id="navbarCollapse"
      >
        <div
          className={`${styles.navbar_collapse_nav} navbar-nav ms-auto p-4 p-lg-0`}
        >
          <a
            href=""
            className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link active`}
          >
            Home
          </a>
          <a
            href=""
            className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link `}
          >
            About
          </a>
          <a
            href=""
            className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link `}
          >
            Courses
          </a>
          <div
            className={`${styles.navbar_collapse_nav_nav_link} nav-item dropdown`}
          >
            <a
              href="#"
              className={`${styles.navbar_collapse_nav_nav_link} nav-link "dropdown-toggle"`}
              data-bs-toggle="dropdown"
            >
              Page
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`${styles.navbar_collapse_nav_icon_dropdown} ms-1`}
              />
            </a>
            <div
              className={`${styles.navbar_collapse_nav_dropdown_menu} dropdown-menu fade-down m-0`}
            >
              <a
                href=""
                className={`${styles.navbar_collapse_nav_dropdown_item} dropdown-item`}
              >
                Our Team
              </a>
              <a
                href=""
                className={`${styles.navbar_collapse_nav_dropdown_item} dropdown-item`}
              >
                Testimonial
              </a>
              <a
                href="404.html"
                className={`${styles.navbar_collapse_nav_dropdown_item} dropdown-item`}
              >
                404 Page
              </a>
            </div>
          </div>
          <a
            href=""
            className={`${styles.navbar_collapse_nav_nav_link} nav-item nav-link`}
          >
            Contact
          </a>
        </div>
        <a
          href=""
          className={`${styles.hello} btn btn-primary py-4 px-lg-5 d-none d-lg-block`}
        >
          Join Now
          <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
