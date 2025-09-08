import { useState } from "react";
import "./Contact.css";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
    success: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email) => {
    // Simple regex for basic email validation
    return /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus({ submitted: true, error: null, success: false });

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
        setFormStatus({ submitted: false, error: "All fields are required.", success: false });
        return;
    }
    if (!validateEmail(formData.email)) {
        setFormStatus({ submitted: false, error: "Please enter a valid email address.", success: false });
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        console.log("Form data submitted:", formData);
        setFormStatus({ submitted: false, error: null, success: true });
        setFormData({ name: "", email: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setFormStatus({ submitted: false, error: null, success: false });
        }, 5000);

    }, 1000);
  };

  return (
    <div className="contact__container">
      <div className="contact__header">
        <h1 className="contact__title">Get In Touch</h1>
        <p className="contact__subtitle">Have a question or want to say hello? Drop us a line!</p>
      </div>

      <div className="contact__content">
        <div className="contact__info">
            <h2 className="contact__info-title">Contact Information</h2>
            <p>Reach out to us through any of the channels below.</p>
            
            <ul className="info__list">
                <li className="info__item">
                    <span className="info__icon">📍</span>
                    <p>123 Green Grocer Lane<br/>Nabesville, NS 45678</p>
                </li>
                <li className="info__item">
                    <span className="info__icon">✉️</span>
                    <p>hello@minimarket.com</p>
                </li>
                <li className="info__item">
                    <span className="info__icon">📞</span>
                    <p>(123) 456-7890</p>
                </li>
            </ul>

            <h3 className="contact__info-title">Store Hours</h3>
            <ul className="info__list">
                 <li className="info__item">
                    <span className="info__icon">🕒</span>
                    <p>Monday - Saturday: 8:00 AM - 9:00 PM<br/>Sundays: 10:00 AM - 7:00 PM</p>
                </li>
            </ul>
        </div>

        <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form__group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form__group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                
                <div className="form__status">
                    {formStatus.error && <p className="status__message--error">{formStatus.error}</p>}
                    {formStatus.success && <p className="status__message--success">Message sent! We'll get back to you soon.</p>}
                </div>

                <Button variant="primary" type="submit" disabled={formStatus.submitted}>
                    {formStatus.submitted ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </div>
      </div>
    </div>
  );
}
