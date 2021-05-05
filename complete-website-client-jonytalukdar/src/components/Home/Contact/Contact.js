import React from 'react';
import './Contact.css';
import contact from '../../../images/contact.png';
const Contact = () => {
  return (
    <section className="contact py-4">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="row">
        <div className="container col-md-6">
          <div className="col-md-9 mx-auto">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message *"
                ></textarea>
              </div>
              <div className="form-group">
                <button type="button" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
