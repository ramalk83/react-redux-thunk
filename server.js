const mysql=require("mysql");
var cors = require('cors');
const express=require("express");
const bodyParser=require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routess/people");


var app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/people",PeopleRoutes);

app.listen(3000);


