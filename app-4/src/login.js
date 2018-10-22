import React, {Component} from 'react'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleUsername (username) {
        this.setState({username: username})
    }

    handlePassword(password) {
        this.setState({password: password})
    }

    handleClick() {
        alert('Username: ' +this.state.username+ ' Password: ' +this.state.password);
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleUsername(e.target.value)}></input>
                <input onChange={e => this.handlePassword(e.target.value)}></input>
                <button onClick={() => this.handleClick()}>Login</button>
            </div>
        )
    }
}

export default Login;