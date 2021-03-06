import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {store} from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
