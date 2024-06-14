import FooterStart from "@/components/HomeLearning/Footer/FooterStart";
import Navbar from "@/components/HomeLearning/NavbarStart/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "react-scroll-to-top";

import "../public/static/assets/css/bootstrap.min.css";
import "../public/static/assets/css/style.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <FooterStart />

      <ScrollToTop
        smooth
        style={{ bottom: "90px" }}
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      />
    </>
  );
}

export default App;
