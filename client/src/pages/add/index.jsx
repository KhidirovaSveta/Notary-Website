import React from 'react'
import { Formik, Form, Field } from 'formik';
import { SignupSchema } from './schema';
import axios from 'axios';
import "./index.scss"
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

const AddCustomer = () => {
  const navigate = useNavigate()
  return (
    <div id='Form'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
            </Helmet>
     <h1 className='addCustomer'>Add Customer</h1>
     <Formik
       initialValues={{
        imgUrl: '',
        name: '',
        position: '',
        description: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         axios.post(`http://localhost:8080/customers`, values)
         console.log(values);
         navigate("/")
       }}
     >

       {({ errors, touched }) => (
           <Form>
            <div className="input">
           <Field name="imgUrl" placeholder="imgUrl" className="inputVal"/>
           {errors.imgUrl && touched.imgUrl ? (
             <div>{errors.imgUlr}</div>
           ) : null}
            </div>

            <div className="input">
           <Field name="name" placeholder="name" className="inputVal"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           </div>


            <div className="input">
           <Field name="position" placeholder="position" className="inputVal"/>
           {errors.position && touched.position ? (
             <div>{errors.position}</div>
           ) : null}
           </div>

           <div className="input">
           <Field name="description" placeholder="description" className="inputVal"/>
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           </div>

           <button type="submit" className='subBtn'>Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default AddCustomer