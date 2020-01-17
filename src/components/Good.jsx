import React from "react";

export class Good extends React.Component {
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Good;
