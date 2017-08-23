var express = require('express');
var path = require('path');
var tables = require('../data/tables.js');
var waitlist = require('../data/waitlist.js');

module.exports = (function() {
    
      var app = express.Router();

      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
      app.get("/view", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
      });

      app.get("/make", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/make.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

      //serving json data for api calls on page
      app.get("/api/tables", function(req, res){
        res.json(tables)
      });

      app.get("/api/waitlist", function(req, res){
        res.json(waitlist)
      });

      return app;

    })();