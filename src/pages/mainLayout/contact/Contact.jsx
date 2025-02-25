// import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Message sent successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      position: "center",
    });
    event.target.reset();
  };

  return (
    <>
      {/* <Helmet>
        <title>Contact | Track & Retrieve</title>
      </Helmet> */}
      <section>
        <h3 className="text-3xl font-semibold text-center">Contact us</h3>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10 mt-10">
          <form
            onSubmit={handleSubmit}
            id="contact_form"
            className="flex flex-col space-y-2 p-5 lg:p-10 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl"
          >
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" required />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Your Email" required />
            <label htmlFor="">Subject</label>
            <input type="text" placeholder="Subject" required />
            <label htmlFor="">Message</label>
            <textarea
              placeholder="Your Message"
              className="min-h-20 max-h-52"
              required
            />
            <label className="flex justify-center">
              <button type="submit" className="btn btn-wide btn-info mt-3">
                Submit
              </button>
            </label>
          </form>

          <div className="mt-10 md:mt-0">
            <h3 className="text-2xl font-semibold mb-2">
              Let’s Help You to build your Projects and Tasks
            </h3>
            <p>
              Have a question, feedback, or need assistance? We’re here to help!
              Feel free to reach out to us for any inquiries regarding our
              Real-Time Task Management Application. Whether it’s about bug
              reports, feature requests, collaborations, or general support,
              we’d love to hear from you.
            </p>

            <div className="mt-10 space-y-2">
              <div className="flex items-center gap-x-2">
                <span className="p-3 border border-gray-300 dark:border-gray-700 rounded">
                  <FaPhoneAlt />
                </span>
                <span>01356 546 568</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="p-3 border border-gray-300 dark:border-gray-700 rounded">
                  <FaEnvelope />
                </span>
                <a href="mailto:info@trackandretrieve.com">info@taskiApp.com</a>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
