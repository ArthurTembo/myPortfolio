import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2fptv8b", "template_bimc52s", form.current, {
        publicKey: "bPeikhqDVaotbjNRx",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success",
            text: "Your message has been successfully sent!",
            icon: "success",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Oops...",
            text: "Your message couldn't be sent!",
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="container-fluid">
      <div className="justify-content-center">
        <div className="col-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-2 bg-light rounded shadow row"
          >
            <div className={`col-md-6`}>
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className={`col-md-6`}>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  className="form-control"
                  required
                />
              </div>
              <div className={`d-flex justify-content-md-center`}>
                <button type="submit" className="btn btn-primary w-100 mt-md-3">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
