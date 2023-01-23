import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/customers/${_id}`)
      .then((data) => setDetails(data.data));
  }, []);
  return (
    <div>Details</div>
  )
}

export default Details