import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import Register from "./Register";
import Authorization from "./Authorization";
import Basket from "./Basket";
import Home from "./Home";
import data from "../reduxComp/components/Tools";

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tools: data,
            buy: [],
        }
    }

    handleToolBuy = (tool) => {
        this.setState({
            buy: [...this.state.buy, tool]
        }, () => {console.log(this.state)});
    };
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/register'}>Register</Link>
                        </li>
                        <li>
                            <Link to={'/authorization'}>Authorization</Link>
                        </li>
                        <li>
                            <Link to={'/basket'}>Basket</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={'/register'}>
                        <Register/>
                    </Route>
                    <Route path={'/authorization'}>
                        <Authorization/>
                    </Route>
                    <Route path={'/basket'}>
                        <Basket
                            oldData={this.state.buy}
                        />
                    </Route>
                    <Route path={'/'}>
                        <Home
                            tools={this.state.tools}
                            handleToolBuy={this.handleToolBuy}
                        />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Main;
