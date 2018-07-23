import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'


class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
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
        <Button type='primary'>Submit</Button>
        </div>
        <div>
          <List
            style={{marginTop:'10px', width:'300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>

      </Fragment>
    )
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
  }

}

export default Todolist;
