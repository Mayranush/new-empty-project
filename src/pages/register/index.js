import React from "react";
import {connect} from "react-redux";
import {projectDataActions, signUpActions} from "../../actions/index";
import {Link} from "react-router/es6";
import "./register.scss";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstnameChange = this.firstnameChange.bind(this);
    this.handleLastnameChange = this.lastnameChange.bind(this);
    this.handleREmailChange = this.emailChange.bind(this);
    this.handleTwitterChange = this.twitterChange.bind(this);
    this.handleRPasswordChange = this.passwordChange.bind(this);
    this.handleRConfirmPasswordChange = this.confirmChange.bind(this);
    this.handleRegisterUser = this.registerUser.bind(this);
  }

  twitterChange(e) {
    let twitterAccount = e.target.value;
    this.props.changeMessage('register', 'signUpErrorText', '');
    if (twitterAccount == '') {
      this.props.changeMessage('register', 'twitterAccountErrorText', 'Twitter account is empty');
    } else {
      this.props.changeMessage('register', 'twitterAccountErrorText', '');
    }
    this.props.changeMessage('register', 'twitterAccount', twitterAccount);
  }

  firstnameChange(e) {
    this.props.changeMessage('register', 'signUpErrorText', '');
    let firstname = e.target.value;
    if (firstname != '') {
      this.props.changeMessage('register', 'firstname', firstname);
    }

  }

  lastnameChange(e) {
    this.props.changeMessage('register', 'signUpErrorText', '');
    let lastname = e.target.value;
    if (lastname != '') {
      this.props.changeMessage('register', 'lastname', lastname);
    }

  }

  emailChange(e) {
    this.props.changeMessage('register', 'signUpErrorText', '');
    let email = e.target.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == '') {
      this.props.changeMessage('register', 'emailErrorText', 'email is empty');
    } else if (re.test(email)) {
      this.props.changeMessage('register', 'emailErrorText', '');
    } else {
      this.props.changeMessage('register', 'emailErrorText', 'not correct email');
    }
    this.props.changeMessage('register', 'email', email);
  }

  passwordChange(e) {
    this.props.changeMessage('register', 'signUpErrorText', '');
    let password = e.target.value;
    if (password == '') {
      this.props.changeMessage('register', 'passwordErrorText', 'password is empty');
    } else if (password == this.props.data.register.confirmPassword) {
      this.props.changeMessage('register', 'passwordErrorText', '');
      this.props.changeMessage('register', 'password', password);
    }
    else {
      this.props.changeMessage('register', 'passwordErrorText', 'password not matching');
      this.props.changeMessage('register', 'password', password);
    }

  }

  confirmChange(e) {
    this.props.changeMessage('register', 'signUpErrorText', '');
    let password = e.target.value;
    if (password == '') {
      this.props.changeMessage('register', 'passwordErrorText', 'password is empty');
    } else if (password == this.props.data.register.password) {
      this.props.changeMessage('register', 'passwordErrorText', '');
      this.props.changeMessage('register', 'confirmPassword', password);
    } else {
      this.props.changeMessage('register', 'passwordErrorText', 'password not matching');
      this.props.changeMessage('register', 'confirmPassword', password);
    }

  }

  registerUser(e) {
    e.stopPropagation();
    e.preventDefault();

    let obj = {
      email: this.props.data.register.email,
      password: this.props.data.register.password,
      firstname: this.props.data.register.firstname,
      lastname: this.props.data.register.lastname,
      twUsername: this.props.data.register.twitterAccount,

    };

    if (this.props.data.register.emailErrorText.length == 0
      && this.props.data.register.twitterAccountErrorText.length == 0
      && this.props.data.register.passwordErrorText.length == 0
      && this.props.data.register.email.length != 0
      && this.props.data.register.twitterAccount.length != 0
      && this.props.data.register.password.length != 0

      && this.props.data.register.password == this.props.data.register.confirmPassword) {
      this.props.signUp(obj);
    } else {
      this.props.changeMessage('register', 'signUpErrorText', 'Please fill data correctly');
      // this.props.data.register.email.length == 0 && this.props.changeMessage('register','emailErrorText', ' ');
      // this.props.data.register.twitterAccount.length == 0 && this.props.changeMessage('register','twitterAccountErrorText', ' ');
      // this.props.data.register.email.length == 0 && this.props.changeMessage('register','emailErrorText', ' ');
      // this.props.data.register.email.length == 0 && this.props.changeMessage('register','emailErrorText', ' ');
    }

  }

  render() {
    return (
      <div className="bg-dark bg-dark-register">
        <div className="card card-register mx-auto mt-5">
          <div className="card-header">
            <span className="register">Register an Account</span>
            <span className="withTwitter">with</span>
            <a href="#" className="btn btn-primary btn-lg">
              <i className="fa fa-twitter fa-fw"/>
              <span className="network-name">Twitter</span>
            </a>
          </div>

          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="firstname">First name</label>
                    <input className="form-control" id="inputname"
                           type="text" aria-describedby="nameHelp"
                           onBlur={(e) => this.handleFirstnameChange(e)}
                           placeholder="Enter first name"/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastname">Last name</label>
                    <input className="form-control" id="inputLastname"
                           type="text" aria-describedby="nameHelp"
                           onBlur={(e) => this.handleLastnameChange(e)}
                           placeholder="Enter last name"/>
                  </div>
                </div>
              </div>
              <div className="form-group email">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="email">Email address</label>
                    <input
                      className={this.props.data.register.emailErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="exampleInputEmail1" type="email" aria-describedby="emailHelp"
                      onBlur={(e) => this.handleREmailChange(e)}
                      placeholder="Enter email"/>
                    {this.props.data.register.emailErrorText.length != 0 ? <p
                      className="error-for-input">*{this.props.data.register.emailErrorText}</p> : ''}

                  </div>
                  <div className="col-md-6">
                    <label htmlFor="twitterAccount">Twitter Username</label>
                    <input
                      className={this.props.data.register.twitterAccountErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="twitterUsername" type="text" aria-describedby="twitterUsernameHelp"
                      onBlur={(e) => this.handleTwitterChange(e)}
                      placeholder="Enter Twitter username"/>
                    {this.props.data.register.twitterAccountErrorText.length != 0 ? <p
                      className="error-for-input">*{this.props.data.register.twitterAccountErrorText}</p> : ''}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                      className={this.props.data.register.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="exampleInputPassword1" type="password" placeholder="Password"
                      onBlur={(e) => this.handleRPasswordChange(e)}/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password">Confirm password</label>
                    <input
                      className={this.props.data.register.passwordErrorText.length != 0 ? 'input-error form-control' : 'form-control'}
                      id="exampleConfirmPassword" type="password" placeholder="Confirm password"
                      onBlur={(e) => this.handleRConfirmPasswordChange(e)}/>

                  </div>
                </div>
              </div>
              <p
                className="error-for-input">{this.props.data.register.passwordErrorText.length != 0 ? '*' + this.props.data.register.passwordErrorText : ''}</p>
              <p
                className="error-for-input">{this.props.data.register.signUpErrorText.length != 0 ? '*' + this.props.data.register.signUpErrorText : ''}</p>

              <button className="btn btn-primary btn-block register" onClick={(e) => this.handleRegisterUser(e)}>Sign
                Up
              </button>
            </form>
            <div className="text-center">
              <Link className="d-block small mt-3 login-link" to="/login"> Already have an account? Go to Login
                Page</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({data: state.projectDataReducer.data}),
  {
    ...projectDataActions,
    ...signUpActions
  }
)(Register);