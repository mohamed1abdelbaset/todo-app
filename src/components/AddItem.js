import React from 'react'
import './AddItem.css'

class AddItem extends React.Component {

    state = {
        todo : ''
    }

    handleChange = (e) => {
        this.setState({
            todo : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            todo:''
        })
    }

    render() { 
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input type='text' placeholder='add something' id='todo' onChange={this.handleChange} value={this.state.todo} />
                    <input type='submit' value='add' />
                </form>
            </div>
        );
    }
}
 
export default AddItem;