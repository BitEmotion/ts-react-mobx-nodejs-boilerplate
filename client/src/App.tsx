import React from 'react';
import { Provider } from 'mobx-react';
import RootStore from 'src/Stores';
import { MainPage } from 'src/Pages';

class App extends React.Component {
  stores = new RootStore();

  render(){
    return (
      <Provider {...this.stores}>
        <MainPage/>
      </Provider>
    )
  }
}
export default App;
