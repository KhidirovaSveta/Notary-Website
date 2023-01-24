import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";
const Details = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/customers/${_id}`)
      .then((data) => setDetails(data.data));
  }, []);

  const deleteBtn = () => {
    axios
      .delete(`http://localhost:8080/customers/${_id}`)
      .then((data) =>
        axios
          .get(`http://localhost:8080/customers`)
          .then((data) => setDetails(data.data))
      );
    navigate("/");
  };

  return (
    <div id="Details">
      <div className="container">
        <div className="details">
          <button onClick={() => navigate(-1)} className="backhomeBtn"> Go Back </button>
          <div className="detail">
            <img src={details.imgUrl} alt="" />

            <div className="customersInfo">
              <h2 className="details-main">{details.name}</h2>
              <p className="details-parag">{details.position}</p>
              <p>{details.description}</p>
              <button
                className="detailsBtn"
                onClick={() => deleteBtn(details._id)}
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
