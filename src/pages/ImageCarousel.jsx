import "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="./images/homepage 1.jpg"
          alt="Charity Work"
        />
        <Carousel.Caption>
          <h3>Helping Communities</h3>
          <p>Join us in making a difference.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="./images/homepage 2.jpg"
          alt="Volunteer"
        />
        <Carousel.Caption>
          <h3>Become a Volunteer</h3>
          <p>Make an impact in someone’s life today.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="./images/homepage 3.jpg"
          alt="Donations"
        />
        <Carousel.Caption>
          <h3>Support the Cause</h3>
          <p>Every donation helps us reach more people.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
