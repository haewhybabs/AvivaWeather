import React, { FunctionComponent } from 'react'
import MainStack from './src/navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/store/reducers';
const App : React.FC =()=> {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  )
}
export default App;
let store = createStore(reducers);