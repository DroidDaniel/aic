import React, { useEffect, useRef, useState } from "react";
import "./Form.css";

function Form() {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    City: "",
    Phone: "",
    Message: "",
  });
  const { Name, Email, City, Phone, Message } = data;

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
    if (!values.Name) {
      errors.name = "Username is required!";
    }
    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid email format!";
    }
    if (!values.City) {
      errors.city = "City is required!";
    }
    if (!values.Phone) {
      errors.phone = "Phone is required!";
    }
    return errors;
  };

  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyj-nMjdCsQ27dhZ2ql1qhxB2YFdy45GO3tAPH2kU-92Gx843FCUXFMayZceh290bVk3A/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
    if (Name && Email && City && Phone) {
      fetch(scriptUrl, {
        method: "POST",
        body: new FormData(formRef.current),
      })
        .then((res) => {
          console.log("OK");
        })
        .catch((err) => console.log(err));
      setData({
        Name: "",
        Email: "",
        City: "",
        Phone: "",
        Message: "",
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
          <form
            onSubmit={handleSubmit}
            method="post"
            ref={formRef}
            name="google-sheet"
          >
            <div className="form_field_set">
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  value={Name}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.name}</p>
              </div>
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  value={Email}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.Email}</p>
              </div>
            </div>
            <div className="form_field_set">
              <div className="form__field">
                <input
                  type="text"
                  placeholder="City"
                  name="City"
                  value={City}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.city}</p>
              </div>
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Phone"
                  name="Phone"
                  value={Phone}
                  onChange={handleChange}
                />
                <p className="form__fielderror_message">{formErrors.phone}</p>
              </div>
            </div>
            <div className="form__field-tex_tarea">
              <textarea
                rows="8"
                name="Message"
                placeholder="Suggestion box"
                value={Message}
                onChange={handleChange}
              />
            </div>
            <div className="form__field_btn">
              <button className="btn__submit">JOIN</button>
            </div>
          </form>
        </div>
      </div>
      <p className="success__message">{thankMessage}</p>
    </section>
  );
}

export default Form;
