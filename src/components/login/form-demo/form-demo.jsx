import { useState } from "react"
import { useFormik } from "formik"
import * as yup from "yup";
export function FormDemo()
{
    
    const formik = useFormik({
        initialValues:
        {
            UserName:'',
            Mobile:'',
            Password:'',
            City:'',
        },
        validationSchema:yup.object({
            UserName: yup.string().required('User Nmae Required').min(4,'Name to short'),
            Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/,'invalid Mobile'),
            Password: yup.string().required('Password Required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,20}/,'Must be 8-20 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.')
        }),
        onSubmit:(user)=>{
            console.log(user);
        }
    })
    return(
        <div className="container-fluid">
            <h2>User Registerations</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps("userName")} name="UserName"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...formik.getFieldProps("Mobile")} name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>Password</dt>
                    <dd><input  type="Password" {...formik.getFieldProps("Password")} name="Password"/></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" {...formik.getFieldProps("City")}>
                            <option value="-1">Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button disabled={(formik.isValid)?false:true} className="mx-2" type="submit">Register</button>
                <button className={(formik.dirty)?'d-inline':'d-none'}disabled={(formik.dirty)?false:true} type="submit">Save</button>
            </form>
        </div>
    )
}