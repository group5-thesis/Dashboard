import React, { Component } from "react";

export default class Homescreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      credentials: {
        client_id:
          "748349014387-4l8akrja8b1g2loavcvam75eu1o3nsl9.apps.googleusercontent.com",
        project_id: "learned-advice-287801",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_secret: "5hm481T13Nkn6AAWMlaPkYZG",
        javascript_origins: ["http://locahost:3000"],
      },
      isSignedIn: false,
      auth2: null,
    };
  }

  componentDidMount() {
    const successCallback = this.onSuccess.bind(this);
    let client_id = this.state.credentials.client_id;
    window.gapi.load("auth2", () => {
      this.auth2 = window.gapi.auth2.init({
        client_id: client_id,
      });
      this.auth2.then((e) => {
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });
      });
      if (this.auth2.isSignedIn.get()) {
        this.setState({
          isSignedIn: true,
        });
      }
    });
   
    window.gapi.load("signin2", function () {
      var opts = {
        width: 200,
        height: 50,
        client_id: client_id,
        onsuccess: successCallback,
      };
      window.gapi.signin2.render("loginButton", opts);
    });
  
  }

  onSuccess() {
    const setUserProfile = this.setUser.bind(this);
    if (this.auth2.isSignedIn.get()) {
      var profile = this.auth2.currentUser.get().getBasicProfile();
      setUserProfile(profile);
    }
    this.setState({
      isSignedIn: true,
      err: null,
    });
  }

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err,
    });
  }

  setUser(profile) {
    this.setState({
      user: {
        ID: profile.getId(),
        fullname: profile.getName(),
        firstname: profile.getGivenName(),
        lastname: profile.getFamilyName(),
        profileImage: profile.getImageUrl(),
        email: profile.getEmail(),
      },
    });
  }
  getContent() {
    if (this.state.isSignedIn) {
      return (
        <p>
          hello {this.state.user ? this.state.user.fullname : "Guest"}, you're
          signed in{" "}
        </p>
      );
    } else {
      return (
        <div>
          <p>You are not signed in. Click here to sign in.</p>
          <button id="loginButton">Login with Google</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Google Auth App.</h2>
          {this.getContent()}
        </header>
        <button
          className="button"
          onClick={() => {
            this.auth2.disconnect();
          }}
        >
          logout
        </button>
      </div>
    );
  }
}
