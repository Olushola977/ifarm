
import AuthWrapper from 'auth/authbase/authWrapper';
import Input from 'utils/input';
import Button from 'utils/button';

/**
 * Reset Password Component
 */

function ResetPassword() {
    return (
        <div>
            <AuthWrapper 
                header="Reset Password"
                textlink="Go Back to Login"
                path="/auth/login"
                linkcolor="#D32F2F"
            >
                <div className="form-group py-2">
                    <form>
                            <Input 
                                type="email"
                                placeholder="Email"
                            />
                            <Button
                                name="Reset Password"
                                bg="#00796B"
                                colour="#fff"
                                fontsize="16px"
                                fontweight="600"
                            />
                    </form>
                </div>
            </AuthWrapper>
        </div>
    )
}

export default ResetPassword