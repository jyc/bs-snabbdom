// Generated by BUCKLESCRIPT VERSION 1.8.2, PLEASE EDIT WITH CARE
'use strict';

var Snabbdom_base = require("./snabbdom_base.js");

function prop(key, value) {
  var partial_arg = /* array */[
    "props",
    key
  ];
  return (function (param) {
      return Snabbdom_base.set_data_path(partial_arg, value, param);
    });
}

exports.prop = prop;
/* Snabbdom_base Not a pure module */