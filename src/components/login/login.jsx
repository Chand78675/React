import { UseCaptcha } from '../../hooks/use-captcha'
import { useFetch } from '../../hooks/use-fetch';
import  './login.css'
export function Login()
{
    const code = UseCaptcha();
    const categories = useFetch('https://fakestoreapi.com/products/categories');
    return(
            <>
               <div className='d-flex justify content-center'>
                  <form className="login-form">
                     <dl>
                         <dt className='bi bi-person-circle'>User login</dt>
                         <dd><input type="text"className='form-control'/></dd>
                         <dt>Password</dt>
                         <dd><input type="password"className='form-control'/></dd>
                         <dt>Verify <button className='btn bi bi-arrow-counterclockwise'></button></dt>
                         <dd>{code}</dd>
                      </dl>
                      <button className='btn btn-warning w-100'>Login</button>
                      <ul>
                        {
                        categories.map(category => <li key={category}>{category}</li>)
                        }
                      </ul>
                    </form>
                </div>
            </>
    )
}