
import authService from "../services/auth.service"
import React, {Component} from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            message: ""
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }
    handleSubmit(event) {
        if (!this.state.password.length >= 8) {
            this.setState ({message : "password must be at least 8 characters long"});
        } else if (!this.state.username) {
            this.setState ({message : "username must not be empty"});
            
        } else {
            this.setState({message: ""});
            authService.login(this.state.username,this.state.password).then((data) => {

            });

        }
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="p">Username:</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                <br/>
                <label>Password:</label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            );

    }
}
export default Login;