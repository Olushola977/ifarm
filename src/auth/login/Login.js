import { Link } from 'react-router-dom';
import './Login.scss';
import AuthWrapper from 'auth/authbase/authWrapper';
import Input from 'utils/input';
import Button from 'utils/button';

/**
 * Login Component
 */

function Login() {
    return (
        <div>
            <AuthWrapper 
                header="Login"
                text="Don't have an Account?"
                textlink="Sign Up"
                path="/auth/signup"
                textcolor="#D32F2F"
                linkcolor="#4CAF50"
            >
                <div className="form-group py-2">
                    <form>
                            <Input 
                                id="loginusernameinput"
                                type="name"
                                placeholder="Username"
                            />
                            <Input 
                                id="loginpasswordinput"
                                type="password"
                                placeholder="Password"
                            />
                            <Button
                                name="Log In"
                                bg="#00796B"
                                colour="#fff"
                                fontsize="16px"
                                fontweight="600"
                                additionalClass="mt-3"
                            />
                    </form>
                </div>
                <div>
                    <Link to="/auth/resetpassword" style={{color: "#D32F2F", fontSize: "14px"}} >Forgot Password?</Link>
                </div>
            </AuthWrapper>
        </div>
    )
}

export default Login