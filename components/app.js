import { Component, createElement } from '../lib/react/index.js';
import Layout from './layout.js';
import UserStyled from './user-styled.js';

class App extends Component{
  render(){
    return createElement('div', 
    {
      class: 'app',
      children: new Layout({
        children: [
          new UserStyled({
            name: 'Manuel Entrena',
            avatar: './img/avatar.png',
            age: 10,
          }),
        ],
      }),
    });
  }
}

export default App