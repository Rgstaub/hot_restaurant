var express = require('express');
var jsonfile = require('jsonfile')

var tableFile = __dirname + '/../data/tables.json'
var waitlistFile = __dirname + '/../data/waitList.json'

module.exports = (function() {
    // 'use strict';
    var api = express.Router();

    api.post("/new", function(req, res) {
        // var newcharacter = req.body;
        // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

        jsonfile.readFile(file, function(err, obj) {
            if(err) console.log(err);
            
            obj.people.forEach(function(element) {
                
            });

            jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
                console.error(err)
            });

        })
    
        res.send(req.body);
    });

    return api;
})();