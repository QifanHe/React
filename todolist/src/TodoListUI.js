 import React, { Fragment } from 'react';
 import 'antd/dist/antd.css'
 import { Input, Button, List } from 'antd'

const TodoListUI = (props)=> {
  return (
    <Fragment>
      <div style={{margin: '10px 10px'}}>
        <Input
          onChange={props.handleInputChange}
          value={props.inputValue}
          placeholder='todo info'
          style={{width: '300px', marginRight: '10px'}}
        />
      <Button type='primary' onClick={props.handleBtnClick}>Submit</Button>
      </div>
      <div>
        <List
          style={{marginTop:'10px', width:'300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={()=>{(props.handleItemDelete(index))}}>{item}</List.Item>)}
        />
      </div>

    </Fragment>
  )
}

 // class TodoListUI extends Component {
 //   render() {
 //     return (
 //       <Fragment>
 //         <div style={{margin: '10px 10px'}}>
 //           <Input
 //             onChange={this.props.handleInputChange}
 //             value={this.props.inputValue}
 //             placeholder='todo info'
 //             style={{width: '300px', marginRight: '10px'}}
 //           />
 //         <Button type='primary' onClick={this.props.handleBtnClick}>Submit</Button>
 //         </div>
 //         <div>
 //           <List
 //             style={{marginTop:'10px', width:'300px'}}
 //             bordered
 //             dataSource={this.props.list}
 //             renderItem={(item, index) => (<List.Item onClick={(index)=>{(this.props.handleItemDelete(index))}}>{item}</List.Item>)}
 //           />
 //         </div>
 //
 //       </Fragment>
 //     )
 //   }
 // }

export default TodoListUI;
