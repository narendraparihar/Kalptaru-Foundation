import  "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GetInvolvedPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center justify-content-center text-center"
        style={{ height: "60vh", background: "url('https://source.unsplash.com/1600x900/?volunteer,helping') no-repeat center center/cover", width: "100%" }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Get Involved</h1>
          <p className="lead">Join us in making a real impact in people&apos;s lives.</p>
        </div>
      </section>

      {/* Why Get Involved Section */}
      {/* Get Involved Section */}
<section className="container py-5">
  <h2 className="fw-bold text-center text-dark">Why Get Involved?</h2>
  <p className="text-center text-secondary">
    Your support helps us provide education, healthcare, and food to those in need.
  </p>

  <div className="row mt-4 text-center">
    <div className="col-md-4">
      <div className="p-4 bg-light shadow rounded">
        <i className="fas fa-graduation-cap fa-3x text-primary"></i>
        <h4 className="mt-3 text-dark">Education</h4>
        <p className="text-dark">Help us provide free education to underprivileged children.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-4 bg-light shadow rounded">
        <i className="fas fa-heartbeat fa-3x text-danger"></i>
        <h4 className="mt-3 text-dark">Healthcare</h4>
        <p className="text-dark">Support medical camps and health awareness programs.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-4 bg-light shadow rounded">
        <i className="fas fa-hands-helping fa-3x text-success"></i>
        <h4 className="mt-3 text-dark">Community Support</h4>
        <p className="text-dark">Join hands to uplift the lives of the underprivileged. Your one step will provide better life to someone</p>
      </div>
    </div>
  </div>
</section>



      {/* Donation Section */}
      <section className="container py-5">
      <h2 className="fw-bold text-center">Ways to Donate</h2>
      <p className="text-dark text-center">
        Your support can make a difference. Choose a donation method that suits you.
      </p>

      <div className="row text-center">
        <div className="col-md-4">
          <div className="card shadow p-4 bg-light">
          <i className="fas fa-credit-card fa-3x text-primary"></i>
           
            <h4 className="fw-bold mt-3">Online Transfer</h4>
            <p className="text-muted">Donate via UPI, Net Banking, or Debit/Credit Card.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4 bg-light">
          <i className="fas fa-university fa-3x text-primary"></i>
            <h4 className="fw-bold mt-3">Bank Deposit</h4>
            <p className="text-muted">Directly deposit into our NGO&apos;s bank account.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4 bg-light">
            <i className="fas fa-hand-holding-heart fa-3x text-danger"></i>
            <h4 className="fw-bold mt-3">In-Kind Donations</h4>
            <p className="text-muted">Donate clothes, food, and other essentials.</p>
          </div>
        </div>
      </div>
    </section>


      {/* Contact Section */}
     {/* Contact Section */}
<section className="bg-light py-5">
  <div className="container text-center">
    <h2 className="fw-bold text-dark">Contact Us</h2>
    <p className="text-muted">For partnerships, inquiries, or volunteer information, reach out to us.</p>

    <div className="row mt-4">
      <div className="col-md-4">
        <div className="p-4 bg-white shadow rounded">
          <i className="fas fa-envelope fa-3x text-primary"></i>
          <h4 className="mt-3 text-dark">Email</h4>
          <p className="text-dark">info@ngo.org</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 bg-white shadow rounded">
          <i className="fas fa-phone fa-3x text-success"></i>
          <h4 className="mt-3 text-dark">Call Us</h4>
          <p className="text-dark">+91 98765 43210</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 bg-white shadow rounded">
          <i className="fas fa-map-marker-alt fa-3x text-danger"></i>
          <h4 className="mt-3 text-dark">Visit Us</h4>
          <p className="text-dark">123 NGO Street, Ahmedabad</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default GetInvolvedPage;
