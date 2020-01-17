import React from "react";
import Goodslist from "./Goodslist";


export class Home extends React.Component {
    render() {
        return (
            <div>
        <Goodslist
        data={this.props.tools}
        onToolBuy={this.props.handleToolBuy}
        />
        'vnutri home'
            </div>
        );
    }
}

export default Home;
