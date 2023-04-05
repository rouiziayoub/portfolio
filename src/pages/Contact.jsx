import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  function handleChangeName(event) {
    SetName(event.target.value);
  }
  function handleChangeEmail(event) {
    SetEmail(event.target.value);
  }
  function handleChangeMessage(event) {
    SetMessage(event.target.value);
  }
  function sumbit(e) {
    e.preventDefault();
    if (name !== "" || email !== "" || message !== "") {
      emailjs
        .send(
          "service_nwkcd91",
          "template_b83rkwe",
          { to_name: name, to_email: email, to_message: message },
          "h-n0AzzNNEJZzA7Hr"
        )
        .then(() => {
          toast.success("Successfully toasted!");
          SetName("");
          SetEmail("");
          SetMessage("");
        })
        .catch(() => {
          toast.error("this didn't work.");
        });
    } else {
      toast.error("un des input est vide remplir tout les champs.");
    }
  }
  return (
    <>
      <div className="container">
        <div className="row  justify-content-center align-items-center">
          <div className="col-md-6 ">
            <h4 className="">Contact Us</h4>
            <form onSubmit={sumbit} className="row g-4 ">
              <div className="form-group mb-5">
                <label htmlFor="name">
                  Your Name : <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control py-4"
                  id="name"
                  placeholder="Entre your full Name"
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
              <div className="form-group_mb-3">
                <label htmlFor="Email">
                  Your Email: <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control py-4"
                  id="email"
                  placeholder="Entre your email address"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="form-group_mb-3">
                <label htmlFor="message">
                  Your message : <span className="text-danger">*</span>
                </label>
                <textarea
                  type="email"
                  className="form-control"
                  rows="5"
                  id="message"
                  placeholder="Your message her..."
                  value={message}
                  onChange={handleChangeMessage}
                />
              </div>
              <div className="form-group mt-5">
                <button className="btn btn-contact w-50 ">Send message</button>
                <Toaster />
              </div>
            </form>
          </div>
          <div className="col-md-6 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.324794084718!2d-7.696353685537175!3d33.570915350389754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d33ee4eb778d%3A0x8d8470ec4438619!2sHay%20hassani!5e0!3m2!1sfr!2sma!4v1680618600466!5m2!1sfr!2sma"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
