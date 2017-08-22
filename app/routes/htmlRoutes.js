var path = require('path');

module.exports = function(app) {
    
      app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
      app.get("/view", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/make.html"));
      });

      app.get("/make", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

      //serving json data for api calls on page
      app.get("/api/tables", function(req, res){
        res.json(path.join(__dirname, "../data/tables.js"))
      });

      app.get("/api/waitlist", function(req, res){
        res.json(path.join(__dirname, "../data/waitlist.js"))
      });
    };