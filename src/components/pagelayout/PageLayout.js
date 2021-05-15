import Header from 'partials/header/desktopheader';
import Footer from 'partials/footer';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/home';
import CategoryWrapper from 'components/categorywrapper';
import About from 'components/about';
import Services from 'components/services';
import Farms from 'components/farms';
import Contact from 'components/contact';
import NotFound from 'components/notfound';
import Cart from 'components/cart';

/**
 * Base Page Layout
 */

function PageLayout() {
    return (
        <>
        <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ifarm/about" exact component={About} />
                <Route path="/ifarm/services" exact component={Services} />
                <Route path="/ifarm/farms" exact component={Farms} />
                <Route path="/ifarm/cart" exact component={Cart} />
                <Route path="/ifarm/contact-us" exact component={Contact} />
                <Route path="/category/*" exact component={CategoryWrapper} />
                <Route path="*" component={NotFound} />
            </Switch>
        <Footer />
        </>
    )
}

export default PageLayout