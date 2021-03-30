import { Switch, Route } from 'react-router-dom';
import Login from 'auth/login';
import Signup from 'auth/signup';
import ResetPassword from 'auth/resetpassword';
import './AuthBase.scss'

/**
 * Auth Page Layout
 */

function PageLayout() {
    return (
        <>
            <div className="authContainer">
                <Switch>
                    <Route path="/auth/login" exact component={Login} />
                    <Route path="/auth/signup" exact component={Signup} />
                    <Route path="/auth/resetpassword" exact component={ResetPassword} />
                </Switch>
            </div>
        </>
    )
}

export default PageLayout