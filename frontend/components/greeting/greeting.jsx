import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {

    this.props.logout().then(() => this.props.router.push(`/`));
  }

  render() {
    const currentUser = this.props.currentUser;
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome {currentUser.username}</h1>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={`/signup`}>Sign Up</Link><br/>
          <Link to={`/login`}>Log In</Link>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
