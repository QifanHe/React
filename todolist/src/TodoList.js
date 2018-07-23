import React, { Component, Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem'
import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
    // when a component's state or props is changed
    // render() function will be called
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }




  render() {
    return (
      <Fragment>
        {/* asdfasdf  */}
        <div>
          <label htmlFor="insertArea">
            enter content:
          </label>
          <input
            className='input'
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
        />
         <button onClick={this.handleButtonClick}>submit</button></div>
        <ul>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    axios.get('/api/todolist')
      .then((res)=>{
        console.log(res.data);
        this.setState(() => {
          return {
            list:[...res.data]
          }
        })
      })
      .catch(()=>{alert('err')})
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
          {/* <li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{__html:item}}
            >
          </li> */}


        </Fragment>
    )
    })
  }


  handleButtonClick(e) {
    this.setState((prevState)=> ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    })
  }
}

export default TodoList;
