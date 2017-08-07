// Generated by BUCKLESCRIPT VERSION 1.8.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

var raw_empty = (function() { return {} } );

var raw_set_in_path = (
function(data, path, value){
    var base = data || {};
    var ref = base;
    while(path.length > 1){
        var next = path.shift();
        ref[next] = ref[next] || {};
        ref = ref[next];
    }
    if(path.length == 1) {
        var next = path.shift();
        ref[next] = value;
    }
    return base;
}
);

function empty() {
  return Curry._1(raw_empty, /* () */0);
}

var set_in_path = Curry.__3(raw_set_in_path);

exports.empty       = empty;
exports.set_in_path = set_in_path;
/* raw_empty Not a pure module */