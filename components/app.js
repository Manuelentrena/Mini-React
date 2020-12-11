import { Component } from '../lib/react.js';
import User from './user.js';
import Layout from './layout.js';
import UserStyled from './user-styled.js';

class App extends Component{
  render(){
    return `
      <div class="app">
      ${new Layout({
        childrem: `
          ${new User({
            avatar: './img/ash.jpg',
            name: 'Ash',
          }).render()}
          ${new UserStyled({
            avatar: './img/ash.jpg',
            name: 'Ash',
          }).render()}
        `
      }).render()}
      </div>
    `;
  }
}

export default App