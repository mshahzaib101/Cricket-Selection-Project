import actionMain from '../Actions/action-main';

const INITIAL_STORE = {
    Players_Selected : [],  //players selected will go here
}

function Players_Selected_Data(state = INITIAL_STORE, action) {
    console.log('switch')
    switch (action.type) {  
     
    case actionMain.Selected_Players_var:
    console.log('running', action.payload)
      return state.Players_Selected= action.payload;

    default:
    console.log('not running')
      return state
    }
  }
  
  export default Players_Selected_Data;