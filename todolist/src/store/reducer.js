import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
}

// reducer can receive state but cannot modify state
export default (state = defaultState, action)=>{
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
  }
  if (action.type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
  }
  if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1);
  }
  if (action.type === INIT_LIST_ACTION) {
    newState.list = [...action.data]
  }

  return newState;
}
