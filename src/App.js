import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import RootRouter from './routers';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import redux from './redux';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs()

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
