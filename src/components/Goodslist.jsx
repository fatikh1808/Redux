import React from "react";
import Good from "./Good";


export class Goodslist extends React.Component {


    render() {
        const { data, onToolBuy } = this.props;
        return (
            <div>
                {
                    data.map ((tool) => {
                            return (
                                <div
                                    id={tool.id}
                                    key={tool.id}
                                >
                                    <h2>name={tool.name}</h2>
                                    <h2>author={tool.author}</h2>
                                    img={tool.img}
                                    url={tool.url}
                                    <button
                                        onClick={() => onToolBuy(tool)}
                                    >
                                        Buy
                                    </button>
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default Goodslist;
