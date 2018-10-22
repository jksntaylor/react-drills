import React, {Component} from 'react'

export default class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
        this.setState({input: value})
    }

    handleClick() {
        this.props.add(this.state.input);
        this.setState({input: ''})
    }

    render() {
        return (
            <div>
                <input value={this.state.input} placeholder='Enter New Task' onChange={e => this.handleChange(e.target.value)}/>
                <button onClick={this.handleClick}>Add Task</button>
            </div>
        )
    }
}