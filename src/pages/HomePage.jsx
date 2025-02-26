import  "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import homepage1 from "../../public/images/homepage 1.jpg"
import homepage2 from "../../public/images/homepage 2.jpg"
import homepage3 from "../../public/images/homepage 3.jpg"
const HomePage = () => {
  const homeImages = [
    homepage1,
    homepage2,
    homepage3,
    
  ];
  return (
    <div>

      {/* Navbar */}
      <Navbar />
      <ImageCarousel images={homeImages} />
      {/* Hero Section */}
      <header className="hero-section text-white d-flex align-items-center justify-content-center text-center"
        style={{ 
          height: "100vh", 
          background: "./images/homepage 1.jpg",
          width: "100%"
        }}>
        <div className="container">
          <h1 className="display-3 fw-bold">Empowering Communities</h1>
          <p className="lead">Making a difference through education & charity.</p>
          <Link to="/get-involved" className="btn btn-lg btn-outline-light">Get Involved</Link>
        </div>
      </header>

      {/* Mission & Impact Section */}
      <section className="py-5 bg-light w-100">
        <div className="container text-center">
          <h2 className="fw-bold text-muted">Our Mission & Impact</h2>
          <p className="text-muted">We strive to create sustainable change in communities through education and charity.</p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded">
                <h3 className="text-primary fw-bold">+5000</h3>
                <p  className="text-muted">Children Educated</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded">
                <h3 className="text-primary fw-bold">+300</h3>
                <p  className="text-muted">Volunteers Engaged</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white shadow rounded">
                <h3 className="text-primary fw-bold">+200</h3>
                <p  className="text-muted">Community Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Full Width */}
      <section className="py-5" style={{ background: "#f8f9fa", width: "100%" }}>
        <div className="container text-center">
          <h2 className="fw-bold text-muted">Featured Projects</h2>
          <p className="text-muted">Explore some of our impactful initiatives.</p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img src="https://source.unsplash.com/400x250/?education" className="card-img-top" alt="Education"/>
                <div className="card-body">
                  <h5 className="card-title">School for Underprivileged</h5>
                  <p className="card-text">Providing free education to children in need.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://source.unsplash.com/400x250/?healthcare,aid" className="card-img-top" alt="Healthcare"/>
                <div className="card-body">
                  <h5 className="card-title">Healthcare Initiatives</h5>
                  <p className="card-text">Bringing medical aid to remote areas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://source.unsplash.com/400x250/?community,help" className="card-img-top" alt="Community"/>
                <div className="card-body">
                  <h5 className="card-title">Community Development</h5>
                  <p className="card-text">Empowering locals through skill training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default HomePage;
