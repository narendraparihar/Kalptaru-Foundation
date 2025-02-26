import  "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
const ServicesPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center justify-content-center text-center"
        style={{ height: "60vh", background: "url('https://source.unsplash.com/1600x900/?education,charity') no-repeat center center/cover", width: "100%" }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead">Empowering communities through education and charity programs.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <h2 className="fw-bold text-center">What We Do</h2>
        <p className="text-center text-muted">We focus on transforming lives through education and charity programs.</p>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="p-4 bg-light shadow rounded text-center">
              <i className="fas fa-book-open fa-4x text-primary"></i>
              <h4 className="mt-3 text-dark">Education for All</h4>
              <p className="text-muted">Providing quality education, scholarships, and mentorship programs to underprivileged children.</p>
              <a href="/education" className="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light shadow rounded text-center">
              <i className="fas fa-hand-holding-heart fa-4x text-danger"></i>
              <h4 className="mt-3 text-dark">Charity & Welfare</h4>
              <p className="text-muted">Supporting communities with food, medical assistance, and emergency relief.</p>
              <a href="/charity" className="btn btn-outline-danger">Get Involved</a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Our Impact</h2>
          <p className="lead">Together, we have made a difference in thousands of lives.</p>

          <div className="row mt-4">
            <div className="col-md-4">
              <h3 className="fw-bold">5,000+</h3>
              <p>Children Educated</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold">10,000+</h3>
              <p>Meals Distributed</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold">50+</h3>
              <p>Communities Helped</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
