const express = require("express");
const api = express();
const {addUser} = require("./routes/addUser");

function createApi(){
		
	api.get("/add-user", addUser());

	return api;
}


module.exports = {createApi};
