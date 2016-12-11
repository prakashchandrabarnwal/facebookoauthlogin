import React from "react";
import ReactDOM from "react-dom";
import IconButton from 'material-ui/IconButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();



var Login=React.createClass({

getInitialState() {
	return {Loginstatus:false,name:""}	
},

 componentDidMount: function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1785668921682645',
      cookie     : true, 
      xfbml      : true,  
      version    : 'v2.1' 
    });

    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }.bind(this);

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
},
testAPI: function() {
  FB.api('/me', function(response) {
  	this.setState({Loginstatus:true,name:response.name});
   }.bind(this));
},
statusChangeCallback: function(response) {
  if (response.status === 'connected') {
  	console.log("hello 2");
    this.testAPI();
  } 
},
checkLoginState: function() {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  }.bind(this));
},

handleClick: function() {
  FB.login(this.checkLoginState());
},
	render(){
		console.log("state status",this.state.Loginstatus);
		return <MuiThemeProvider>
			<div>
			{this.state.Loginstatus?<div style={{position: "absolute",top: "50%",left: "20%"}}> HI {this.state.name},How are you :) ? </div> :<IconButton
											    style={{position: "absolute",
											    top: "50%",
												right: "50%"}}
											  onClick={this.handleClick}
											  tooltipPosition="bottom-center"
											  tooltip="Login"
											  onClick={this.handleClick}>
											   <i className="material-icons" >sentiment_very_satisfied</i>
											</IconButton>}
			</div>
  </MuiThemeProvider>
	}

});

ReactDOM.render(<Login/>,document.getElementById("container"));