import React from 'react'
import './App.css';
import AddItem from './components/AddItem';
import TodoItem from './components/TodoItem';

class App extends React.Component {

  state = {
    items : [
      {id:1, todo:'mohamed'},
      {id:2, todo:'alaa'},
      {id:3, todo:'maher'}
    ]
  }

  deleteItem = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id)
    // items.splice(i, 1)
    
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random()
    let items = this.state.items
    items.push(item)
    this.setState({items})
  }

  render() { 
    return (
      <div className="App">
        <AddItem className="additem" addItem = {this.addItem} />
        <hr/>
        <TodoItem className="todoitem" items = {this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
