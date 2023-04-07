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
        </div>
      </div>
    </>
  );
}

export default Contact;
