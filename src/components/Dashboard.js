import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dp } from "../firebaseConfig";
import "./Dashboard.css";
import BackToHome from "./BackToHome";

function Dashboard() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(dp, "Articles");
    const q = query(articleRef, orderBy("Date", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, []);

  const [searchTerm, setsearchTerm] = useState("");

  return (
    <section className="dhasboardsection">
      <div className="aic__common_container">
        <h6 className="aic__table_title">AIC JOINERS DETAIL</h6>

        <div className="search__box">
          <BackToHome content="Log Out" url="/login" />
          <div className="search__field">
            <input
              type="text"
              placeholder="Search City..."
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="aictable">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {articles
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.city.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map(({ id, name, email, city, phone, message }) => (
                  <tr key={id} className="works_img_wrapper">
                    <td>{name}</td>

                    <td>
                      <a href={`mailto:${email}`} className="works_img_link">
                        {email}
                      </a>
                    </td>
                    <td>{city}</td>
                    <td>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </td>
                    <td>{message}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
