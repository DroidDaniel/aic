import React, { useEffect, useState } from "react";
import { dp } from "../firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import "./Form.css";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    Date: Timestamp.now().toDate(),
  });
  const { name, email, city, phone, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [thankMessage, setThankMessage] = useState("");

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Success");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
    const articleRef = collection(dp, "Articles");
    if (name && email && city && phone) {
      addDoc(articleRef, {
        name: data.name,
        email: data.email,
        city: data.city,
        phone: data.phone,
        message: data.message,
        Date: Timestamp.now().toDate(),
      });
      setData({
        ...data,
        name: "",
        email: "",
        city: "",
        phone: "",
        message: "",
      });
      setThankMessage("Thankyou We have Recieved Your Data...");
    } else {
      setThankMessage("Please Enter Valid Data");
    }
  };
  return (
    <section className="joinsection" id="aicjoin">
      <div className="aic__common_container">
        <h6 className="aic__common_title">JOIN THE REVOLUTION</h6>
        <div className="form__wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form_field_set">
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.name}</p>
              </div>
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.email}</p>
              </div>
            </div>
            <div className="form_field_set">
              <div className="form__field">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.city}</p>
              </div>
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.phone}</p>
              </div>
            </div>
            <div className="form__field-tex_tarea">
              <textarea
                rows="8"
                name="message"
                placeholder="Suggestion box"
                value={message}
                onChange={handleChange}
              />
            </div>
            <div className="form__field_btn">
              <button className="btn__submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <p className="success__message">{thankMessage}</p>
    </section>
  );
}

export default Form;
