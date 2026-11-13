import { Formik,Form,Field,ErrorMessage } from "formik"
import * as yup from "yup";
export function FormikDemo()
{
    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <Formik initialValues={{UserName:'',Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('User Name Required').min(4,'To short'),Mobile:yup.string().required('Mobile Required').matches(/\+91\d{10}/,'invalid Mobile')})} onSubmit={(values)=>{console.log(values)}}>
                {
                    form=>
                    <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName"/></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile"/></dd>
                        <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                    </dl>
                    <button disabled={(form.isValid)?false:true} type="submit">Submit</button>
                    <div className="mt-4 text-danger" style={{display:(form.isValid)?'none':'block'}}>
                        <h4>Please checake the foolowing errors</h4>
                        <ul>
                            {
                                Object.keys(form.errors).map(key=><li key={key}>{form.errors[key]}</li>)
                            }
                        </ul>
                    </div>
                   </Form>
                }
            </Formik>
        </div>
    )
}