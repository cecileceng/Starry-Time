//REACT DEPENDENCIES
var React = require("react");
var ReactDOM = require("react-dom");

//GRAB PROPERTY ASSOCIATED WITH ROUTER
var Router = require("react-router").Router

//GRABS ROUTES
var routes = require(".config/routes");

//RENDERS CONTENTS ACCORDING TO ROUTE PAGE
//DISPLAYS CONTENTS INDIV APP OF INDEX.HTML
//REACTDOM TAKES IN TWO PARAMS (CONTENTS AND LOC)
ReactDOM.render(
	<Router>{routes}</Router>
	document.getElementById("app");
)