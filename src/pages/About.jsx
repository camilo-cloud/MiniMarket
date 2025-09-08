import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./About.css";

export default function About() {
  return (
    <div className="about__container">
      <div className="about__header">
        <h1 className="about__title">The Heart of Your Neighborhood, Now at Your Doorstep</h1>
      </div>

      <div className="about__story">
        <h2 className="about__section-title">Our Story</h2>
        <p>
          Since opening our doors, our goal has been simple: to be more than just a store, but a part of the community. We started as a small corner shop with a big dream: to offer fresh, high-quality products to our neighbors. Over time, your trust has allowed us to grow.
        </p>
        <p>
          Today, we're taking a new step to fit into your modern life. We've launched our website to bring the same freshness and friendly service you've always known directly to you. It's our way of remaining your trusted local minimarket, blending neighborhood tradition with the convenience you need.
        </p>
        <div className="about__cta">
            <Link to="/products">
                <Button variant="primary">Explore Our Products</Button>
            </Link>
        </div>
      </div>

      <div className="about__values">
        <h2 className="about__section-title">Our Values</h2>
        <div className="values__grid">
          <div className="value__item">
            <div className="value__icon">&#x1F343;</div> {/* Leaf Emoji */} 
            <h3 className="value__title">Quality & Freshness</h3>
            <p>We handpick the best products every day to ensure you bring only the finest to your table.</p>
          </div>
          <div className="value__item">
            <div className="value__icon">&#x1F496;</div> {/* Heart Emoji */}
            <h3 className="value__title">Community First</h3>
            <p>We know our customers and pride ourselves on providing personal, familiar service.</p>
          </div>
          <div className="value__item">
            <div className="value__icon">&#x1F69A;</div> {/* Truck Emoji */}
            <h3 className="value__title">Everyday Convenience</h3>
            <p>We make your life easier with fast, local delivery. Your order in minutes, without leaving home.</p>
          </div>
        </div>
      </div>

      <div className="about__testimonials">
        <h2 className="about__section-title">What Our Neighbors Say</h2>
        <div className="testimonials__grid">
            <div className="testimonial__item">
                <p className="testimonial__text">"The quality of the fruits and vegetables is always top-notch. It feels like having a farmer's market right around the corner!"</p>
                <p className="testimonial__author">- Sarah J.</p>
            </div>
            <div className="testimonial__item">
                <p className="testimonial__text">"I love that I can now order online. The delivery is surprisingly fast and the service is just as friendly as in the store."</p>
                <p className="testimonial__author">- Mark T.</p>
            </div>
            <div className="testimonial__item">
                <p className="testimonial__text">"This is what a neighborhood store should be. They know my name and always have what I need. A true local gem."</p>
                <p className="testimonial__author">- Emily R.</p>
            </div>
        </div>
      </div>

    </div>
  );
}
