import { createStore } from 'redux'
import { combineReducers } from 'redux';

// importing reducers here
import Ad_Players_Selected from './Reducers/Data-Handler';
import Players_Selected_Data from './Reducers/SelectedPlayers'

// -- this will combine all reducers in one
const rootReducer = combineReducers({
  Ad_Players_Selected,
  Players_Selected_Data
  // more reducers go here
})


let store = createStore(
    rootReducer
  )

export default store;  // to main index,js