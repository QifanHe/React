const defaultState = {
  inputValue: '123',
  list: [1,2,3]
}

// reducer can receive state but cannot modify state
export default (state = defaultState, action)=>{
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'change_input_value') {
    newState.inputValue = action.value;
  }
  if (action.type === 'add_todo_item') {
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
  }
  return newState;
}
