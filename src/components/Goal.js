import React from 'react';

class Goal extends React.Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>GOAL ITEM</div>
    );
  }
}

export default Goal;