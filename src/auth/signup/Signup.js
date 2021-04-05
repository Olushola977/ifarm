
import './Signup.scss';
import AuthWrapper from 'auth/authbase/authWrapper';
import Input from 'utils/input';
import Button from 'utils/button';

/**
 * Sign Up Component
 */

function Signup() {
    return (
        <AuthWrapper 
            header="Sign Up"
            text="Have an Account already?"
                textlink="Log In"
                path="/auth/login"
                textcolor="#D32F2F"
                linkcolor="#4CAF50"
            >
            <div className="form-group py-2">
                <form>
                <Input
                    id="signupemailinput"
                        type="email"
                        placeholder="Email"
                    />
                    <div className="d-flex justify-content-between">
                        <Input
                            id="signupfirstnameinput"
                            type="name"
                            placeholder="FirstName"
                        />
                        <Input
                            id="signuplastnameinput"
                            type="name"
                            placeholder="LastName"
                        />
                    </div>
                    <Input
                        id="signupfirstpasswordinput"
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        id="signupsecondpasswordinput"
                        type="password"
                        placeholder="Re-type Password"
                    />
                    <Button
                        name="Sign Up"
                        bg="#00796B"
                        colour="#fff"
                        fontsize="16px"
                        fontweight="600"
                    />
                </form>
            </div>
        </AuthWrapper>
    )
}

export default Signup