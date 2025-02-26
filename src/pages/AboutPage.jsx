import  "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      {/* NGO Story Section */}
      <section className="container mt-5 pt-5">
        <h1 className="fw-bold text-center">About Our NGO</h1>
        <p className="text-center text-muted">Empowering lives through education, healthcare, and community support.</p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <img src="https://source.unsplash.com/600x400/?charity,community" alt="NGO Work" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Our Mission</h3>
            <p>We aim to provide education, healthcare, and sustainable development programs for underprivileged communities.</p>
            <h3 className="fw-bold">Our Vision</h3>
            <p>To create a world where every individual has equal opportunities to thrive.</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container mt-5">
        <h2 className="fw-bold text-center">Meet Our Team</h2>
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <img src="https://source.unsplash.com/150x150/?man,leader" alt="Leader" className="rounded-circle shadow" />
            <h5 className="mt-3">John Doe</h5>
            <p className="text-muted">Founder & CEO</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://source.unsplash.com/150x150/?woman,leader" alt="Director" className="rounded-circle shadow" />
            <h5 className="mt-3">Jane Smith</h5>
            <p className="text-muted">Director of Operations</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://source.unsplash.com/150x150/?young,leader" alt="Coordinator" className="rounded-circle shadow" />
            <h5 className="mt-3">Mark Wilson</h5>
            <p className="text-muted">Community Coordinator</p>
          </div>
        </div>
      </section>


      {/* Campaigns Section */}
      <section className="container mt-5">
        <h2 className="fw-bold text-center">Our Campaigns</h2>
        <p className="text-center text-muted">Discover the initiatives making a difference.</p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://source.unsplash.com/400x250/?education,school" alt="Education Campaign" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Education for All</h5>
                <p className="card-text">Providing free education to underprivileged children.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://source.unsplash.com/400x250/?health,medical" alt="Healthcare Campaign" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Healthcare Access</h5>
                <p className="card-text">Free medical check-ups and health awareness programs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://source.unsplash.com/400x250/?food,help" alt="Food Campaign" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Food Distribution</h5>
                <p className="card-text">Delivering meals to families in need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
