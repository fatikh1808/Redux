import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { Page } from "../components/page/Page";
import {Basket} from "../components/basket/Basket";
import {setBuy} from "../actions/PageActions";
import Auth from "../components/auth/auth";

export class Main extends React.Component {
    render(){
        const {page, basket, setBuyAction} = this.props;
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
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
                    <Route path={'/authorization'}>
                        <Auth/>
                    </Route>
                    <Route path={'/basket'}>
                        <Basket tools={basket.buyTools}/>
                    </Route>
                    <Route path={'/'}>
                        <Page tools={page.tools} setBuy={setBuyAction}/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = store => {
    console.log(store);
    return{
        user: store.user,
        page: store.page,
        basket: store.basket,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setBuyAction: tool => dispatch(setBuy(tool)),
    }
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)



