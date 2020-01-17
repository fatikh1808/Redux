import React from "react";
import PropTypes from 'prop-types'

export class Page extends React.Component{

    render(){
        const {tools, setBuy} = this.props;
        return(
            <div>
                {
                    tools.map ((tool) => {
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
                                    onClick={() => setBuy(tool)}
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

Page.propTypes = {
    tools: PropTypes.array.isRequired,
    setBuy: PropTypes.func.isRequired,
};
