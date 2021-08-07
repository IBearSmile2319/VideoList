import { Route, Switch } from "react-router-dom"
import Home from "@pages/Home"
import Login from "@pages/Login"
import Register from "@pages/Register"
import NotFount from "@pages/NotFount"
import Player from "@pages/Player"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route exact path="/login" render={props => <Login {...props} />} />
            <Route exact path="/register" render={props => <Register {...props} />} />
            <Route exact path="/player/:id" render={props => <Player {...props} />} />
            <Route render={props => <NotFount {...props} />} />
        </Switch>
    )
}

export default Routes
