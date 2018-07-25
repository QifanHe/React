import React, { Component } from 'react'
import store from './store'
import { getInitList, getAddItemAction, getDeleteItemAction, getInputChangeAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';

class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // axios.get('/api/todolist').then((res)=>{
    //       const data = res.data;
    //       const action = initListAction(data);
    //       store.dispatch(action);
    //     }).catch(()=>{
    //       alert('err')
    //     })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

}

export default Todolist;
