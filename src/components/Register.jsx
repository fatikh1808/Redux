import React from "react";

export class Register extends React.Component {

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
        console.log(this.state.login);
    };

    handleAddUser = () => {
        let newUser = {
            login: this.state.login,
            password: this.state.password,
        };
        // this.props.onUserAdd(newUser);
        this.setState({login: '', password: ''});
        console.log(newUser)
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
                <button onClick={this.handleAddUser}>
                    Register
                </button>
            </div>
        );
    }
}

export default Register;
