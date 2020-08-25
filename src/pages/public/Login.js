import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mdiAccount, mdiKey } from "@mdi/js";
import "assets/css/login.css";
import { Field, TextInput } from "components/Form";
import Button from "components/Button";
import { ActionTypes, actionCreator } from "app_utils/actions";
import { postRequest } from "app_utils/helpers/api";
import Anchor from "components/Anchor";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  handleChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  attemptLogin() {
    this.setState({ loading: true });
    this.props.doLogin(this.state);
    this.setState({ loading: false });
    this.props.history.push("/admin/dashboard");
  }

  render() {
    return (
      <div>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="login">
              <img src={require("assets/img/logo.svg")} width="325px" />
              <Field>
                <TextInput
                  label="username/email"
                  value={this.state.email}
                  placeholder="Input Username"
                  isIcon={{ show: true, name: mdiAccount, float: "left" }}
                  {...{
                    onChange: (e) => {
                      this.handleChange("email", e.target.value);
                    },
                  }}
                ></TextInput>
              </Field>
              <Field>
                <TextInput
                  label="password"
                  type="password"
                  value={this.state.password}
                  placeholder="**********"
                  isIcon={{ show: true, name: mdiKey, float: "left" }}
                  {...{
                    onChange: (e) => {
                      this.handleChange("password", e.target.value);
                    },
                  }}
                ></TextInput>
              </Field>
              <br />
              <Button
                label="Login"
                variant={{
                  type: "is-block is-fullwidth is-medium",
                  color: "primary",
                  textColor: "white",
                }}
                {...{
                  onClick: () => {
                    this.attemptLogin();
                  },
                }}
              />
              <br />
              <nav className="level">
                <div className="level-item has-text-centered is-link">
                  <Anchor label="Forgot Password?" />
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <Anchor label="Create Account" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, _) => ({
  async doLogin(credentials, onError) {
    postRequest()
      .then((res) => {
        dispatch(actionCreator(ActionTypes.LOGIN));
        localStorage.setItem("token", true);
      })
      .catch((err) => console.log(err));
    // try {
    //     const authResponse = await fetch(`https://ctosdata.com/persona/login?username=${credentials.username}&password=${credentials.password}`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const responseJSON = await authResponse.json();
    //     if (authResponse.ok && authResponse.status == 200) {

    //         AsyncStorage.setItem('token', responseJSON.token)
    //             .then(() => dispatch(actionCreator(DashboardActionTypes.LOAD_DATA)))
    //             .catch(error => console.debug(error))
    //             .finally(_ => dispatch(actionCreator(ActionTypes.LOGIN)));
    //     }

    //     else {
    //         throw (authResponse.status);
    //     }
    // } catch (error) {
    //     onError(error)
    // }
  },
});
export default connect(null, mapDispatchToProps)(Login);
