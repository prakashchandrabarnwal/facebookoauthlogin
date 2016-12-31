import React from "react";
import ReactDOM from "react-dom";
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();



function handleTouchTap() {
  document.location.href="https://www.facebook.com/prakash.barnwal.37";
}

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
			<AppBar style={{background: '#007acc'}}
    title={<div style={{cursor: 'pointer',textAlign:'center', fontFamily: "Brush Script MT", fontSize:"50px"}}>Happy New Year</div>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
			{this.state.Loginstatus?
        <div class="container">
 <div className="balloon" style={{marginLeft:"10%"}}>
    
	<div><span>H</span></div>
    <div><span>A</span></div>
    <div><span>P</span></div>
    <div><span>P</span></div>
    <div><span>Y</span></div>
</div>


<div className="balloon" style={{marginTop:"80px",marginLeft:"30%"}}>
    
	<div><span>N</span></div>
    <div><span>E</span></div>
    <div><span>W</span></div>
</div>	
	
	
	<div className="balloon" style={{marginTop:"80px",marginLeft:"40%"}}>
    
	<div><span>Y</span></div>
    <div><span>E</span></div>
    <div><span>A</span></div>
    <div><span>R</span></div>
    <div><span><i className="material-icons" >sentiment_very_satisfied</i></span></div>
</div>
	
	  <h1 style={{position: "absolute",top: "70%",left: "50%", fontFamily: "Brush Script MT"}}> {this.state.name} 
        <i className="material-icons" >sentiment_very_satisfied</i>
        </h1>
</div>
:<IconButton
											    style={{position: "absolute",
											    top: "50%",
												right: "50%"}}
											  onClick={this.handleClick}
											  tooltipPosition="bottom-center"
											  onClick={this.handleClick}>
											   <i className="material-icons" >sentiment_very_satisfied</i>
											</IconButton>}
											
											<div style={{position:"absolute",bottom:"0",right:"0",padding:"3px"}}><a href="https://www.facebook.com/prakash.barnwal.37" ><i className="fa fa-facebook-official" style={{fontSize:"20px",color:"blue"}}></i> Prakash Barnwal</a>
											</div>
			</div>
  </MuiThemeProvider>
	}

});

ReactDOM.render(<Login/>,document.getElementById("container"));