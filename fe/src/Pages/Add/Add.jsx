import { Helmet } from "react-helmet-async"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Add.scss"

function Add() {
  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>

      <Formik
       initialValues={{ img: '', name: '', price: '' }}
       validationSchema={Yup.object({
        img: Yup.string()
           .required('Required'),
           name: Yup.string()
           .required('Required'),
           price: Yup.string()
           .required('Required'),
        
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000/product",{
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),

        })
        
       }}
     >
       <Form>
         <label htmlFor="img">img</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
 
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="num" />
         <ErrorMessage name="price" />
 
         <button type="submit">Add</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add