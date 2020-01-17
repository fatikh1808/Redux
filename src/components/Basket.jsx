import React from "react";
import Good from "./Good";

export class Basket extends React.Component {
    render() {
       const oldData = this.props.oldData;
        return (
            <div>
                {
                    oldData.map((tool) => {
                        return(
                            <div
                                id={tool.id}
                                key={tool.id}
                            >
                                <h2>name={tool.name}</h2>
                                <h2>author={tool.author}</h2>
                                img={tool.img}
                                url={tool.url}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Basket;
