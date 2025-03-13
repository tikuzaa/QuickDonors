import Works from "../components/Works"
import Testimonials from "../components/Testimonials"
import Navbar from "../components/Navigation";
import Footer from "../components/Footer/Footer";
import './style.scss'


const Home = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="relative -translate-y-23">
        

        <div className="relative">
          <div className="gradient-bg overflow-hidden">
          {/* <div className="relative z-50">
          <Navbar />
        </div> */}
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className="gradients-container">
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div className="interactive"></div>
            </div>
          </div>
        </div>

        <Works />
        <Testimonials />
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
