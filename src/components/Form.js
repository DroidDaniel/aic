import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });
  const { name, email, city, phone, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/danieldisowsa/google_sheets/BkUQyviigJTDWxoX?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [new Date().toLocaleString(), name, email, city, phone, message],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        email: "",
        city: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
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
              </div>
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
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
              </div>
              <div className="form__field">
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
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
    </section>
  );
}

export default Form;
