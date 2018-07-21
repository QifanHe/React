import React, { Component, Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
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
           onChange={this.handleInputChange.bind(this)}
        />
         <button onClick={this.handleButtonClick.bind(this)}>submit</button></div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <Fragment key={index}>
                  <TodoItem
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete.bind(this)}
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
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleButtonClick(e) {
    if(this.state.inputValue === "") return;
    this.state.list.push(this.state.inputValue);
    this.setState({
      list: this.state.list,
    });
    this.setState({
      inputValue:'',
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

this.setState({
  list: list
})

  }


}

export default TodoList;
