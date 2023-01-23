import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from 'antd';
import "./index.scss"
import { Link } from "react-router-dom";


const Cards = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
    axios.get(`http://localhost:8080/customers`).then((data) => setCustomers(data.data))
    }, [])


    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8080/customers/${_id}`).then((data) =>  axios.get(`http://localhost:8080/customers`).then((data) => setCustomers(data.data))
        )

    }

    const handleSearch = (value) => {
      axios.get(`http://localhost:8080/customers`).then((data) => {
        let search = data.data.filter((customers) => customers.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        setCustomers(search)
      }
    )}

  return (
    <div id='Cards'>
            <h1 className='happyCus'>Happy Customers</h1>
            <div className="searchInp">
            <input  type="text"  onChange={(e) => handleSearch(e.target.value)} placeholder="Search Customers"/>
            </div>
        <div className="container">
            <div className="cards"> 
           {customers?.map((cus) => {
              return(
        
                  <div className="card">
                    {/* <Link to={`/details/${cus._id}`}> */}
                  <Card
                         style={{
                          width: 380,
                          height: 320,
                          boxShadow: "0 1px 17px #0003",
                         }}>
                          <div className="top">
                            {console.log(cus.imgUlr)}
                          <img src={cus?.imgUlr} alt=""  className='happyImg'/>
                          <div className="position">
                          <p className='cardTitle'>{cus.name}</p>
                          <p>{cus.position}</p>
                          </div>
                            </div>
                        <p className='happyP'>"{cus.description}"</p>
                        <button onClick={() => handleDelete(cus._id)} className="deleteBtn"> Delete </button>
                </Card>                 
                    
                    {/* </Link> */}
                </div>
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default Cards