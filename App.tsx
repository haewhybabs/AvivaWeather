import React, { FunctionComponent } from 'react'
import { StatusBar } from 'react-native';
import MainStack from './src/navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/store/reducers';
import colors from './src/constants/colors';
const App : React.FC =()=> {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.PRIMARY_MIX} />
      <MainStack />
    </Provider>
  )
}
export default App;
let store = createStore(reducers);