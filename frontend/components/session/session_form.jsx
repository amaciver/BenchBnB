import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push(`/`));
 }


  render() {
    let formType;
    if (this.props.formType === '/login') {
      formType = 'Log In';
    } else {
      formType = 'Sign Up';
    }
    return (
      <div>
        <header>{formType}</header>
        <form>
          <input
            type="text"
            placeholder="Username"
            onChange={this.update('username')}
            />
          <input
            type="password"
            placeholder="Password"
            onChange={this.update('password')}
            />
          <button onClick={this.handleSubmit}>{formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
