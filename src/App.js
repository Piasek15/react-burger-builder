import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Layout>
                        <Switch>
                            <Route path="/checkout" component={Checkout}/>
                            <Route path="/" component={BurgerBuilder}/>
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
