import React, { Component } from 'react';

const styles = {
  base: {
    height: '100%',
    width: '100%',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.base}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
