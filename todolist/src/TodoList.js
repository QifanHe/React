import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { getAddItemAction, getDeleteItemAction, getInputChangeAction } from './store/actionCreators'


class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div style={{margin: '10px 10px'}}>
          <Input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder='todo info'
            style={{width: '300px', marginRight: '10px'}}
          />
        <Button type='primary' onClick={this.handleBtnClick}>Submit</Button>
        </div>
        <div>
          <List
            style={{marginTop:'10px', width:'300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
          />
        </div>

      </Fragment>
    )
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
