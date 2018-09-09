import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import App from './App'; //App Wrapper

export default (
    <App>

        {/*Render these above content per page*/}
        <Route path="/example/sass" component={() => <div className={"text-center"}>Header defined in router.js</div>}/>

        {/*Render one of these routes*/}
        <Switch>
            <Route path="/" exact component={require('./components/pages/HomePage').default}/>

            {/*Examples*/}
            <Route path="/example/sass" component={require('./components/pages/examples/SassPage').default}/>
            <Route path="/example/layout" component={require('./components/pages/examples/LayoutPage').default}/>
            <Route path="/example/components" component={require('./components/pages/examples/ComponentsPage').default}/>
            {/*END OF EXAMPLES*/}

            <Route component={require('./components/pages/NotFoundPage').default}/>
        </Switch>

        {/*Render these below content per page*/}
        <Route path="/example/sass" component={() => <div className={"text-center"}>Footer defined in router.js</div>}/>

    </App>
);
