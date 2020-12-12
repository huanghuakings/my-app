import {createStore} from 'redux'
import reducer from './reducer.js'
 
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//配置调试工具
 
export default store;