"use strict";var i=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var d=(s,t)=>{for(var e in t)i(s,e,{get:t[e],enumerable:!0})},u=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of r(t))!w.call(s,a)&&a!==e&&i(s,a,{get:()=>t[a],enumerable:!(n=c(t,a))||n.enumerable});return s};var y=s=>u(i({},"__esModule",{value:!0}),s);var T={};d(T,{default:()=>m});module.exports=y(T);var o=require("@raycast/api");async function m(){let s=await(0,o.showToast)({style:o.Toast.Style.Animated,title:"Tossing coin..."}),t=Math.random()>.5?"Heads":"Tails";await l(600),s.style=o.Toast.Style.Success,s.title=`\u{1FA99} ${t}!`,await l(1e3)}var l=s=>new Promise(t=>setTimeout(t,s));0&&(module.exports={});
