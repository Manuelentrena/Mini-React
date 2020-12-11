import { Component } from '../lib/react.js';

class Layout extends Component {
  render () {
    const { childrem } = this.props;
    return `
      <div class="wrapper">
        ${childrem}
      </div>
    `;
  }
}

export default Layout