import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        { content }
      </div>
    )
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }


}
TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}


export default TodoItem;
