
import {useForm} from "react-hook-form";
export function HookForm()
{
    const{register,handleSubmit,formState:{errors}} = useForm()
    const submit = (values)=>{
        console.log(values);
    }
   return(
     <div className="container-fluid">
        <h3>Register</h3>
        <form onSubmit={handleSubmit(submit)}>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName"{...register("UserName", { required: true, minLength: 4, pattern: /[A-Z]{4,10}/})}/></dd>
                <dd className="text-danger"> {(errors.UserName?.type === "required") ? <span>true</span> : <span> false </span>}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile"{...register("Mobile", {required:true, pattern: /\+91\d{10}/})}/></dd>
                <dt>Age</dt>
                <dd><input type="text" name="UserName"{...register("UserName", {required:true,minLength:15, maxLength:30})}/></dd>
                <dt>City</dt>
                <dd>
                    <select {...register("City", { required: "City is required" })}>
                       <option value="">Delhi</option>
                       <option>Hyd</option>
                       <option>Mumbai</option>
                    </select>
                </dd>
            </dl>
            <button type="submit">Submit</button>
        </form>
    </div>
   )
}