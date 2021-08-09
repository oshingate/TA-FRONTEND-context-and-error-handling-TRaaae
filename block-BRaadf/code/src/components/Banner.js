import React from 'react';
import UserContext from './UserContext';

class Banner extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(props) => {
          console.log(props);
          return (
            <div
              className={
                props
                  ? 'message-dark message--banner message--success'
                  : 'message message--banner message--success'
              }
            >
              <h3 className='message-heading'>This is a success banner!</h3>
              <p>
                It celebrates that you have successfully completed a major task.
              </p>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Banner;
