import React from "react";

export class Authorization extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {

        const {id} = event.currentTarget;
        this.setState({[id]: event.currentTarget.value});
    };

    handleAuthorisation = () => {
        let AuthUser = {
            login: this.state.login,
            password: this.state.password,
        };

        this.setState({login: '', password: ''});
    };


    render() {
        return (
            <div>
                <form>
                    <input
                        id={'login'}
                        type={'text'}
                        placeholder={'Login'}
                        value={this.state.login}
                        onChange={this.handleChange}
                    />
                    <input
                        id={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.handleAuthorisation}>
                    Authorisation
                </button>
            </div>
        );
    }
}

export default Authorization;
