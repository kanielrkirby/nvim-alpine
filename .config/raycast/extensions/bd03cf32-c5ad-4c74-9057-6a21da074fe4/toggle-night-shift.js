var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var u=e=>s(e,"__esModule",{value:!0});var d=(e,t)=>{for(var i in t)s(e,i,{get:t[i],enumerable:!0})},f=(e,t,i,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of c(t))!h.call(e,o)&&(i||o!=="default")&&s(e,o,{get:()=>t[o],enumerable:!(l=g(t,o))||l.enumerable});return e};var y=(e=>(t,i)=>e&&e.get(t)||(i=f(u({}),t,1),e&&e.set(t,i),i))(typeof WeakMap!="undefined"?new WeakMap:0);var p={};d(p,{default:()=>m});var a=require("child_process"),n=require("@raycast/api");async function r(e){let t=await(0,n.showToast)({style:n.Toast.Style.Animated,title:"Running..."}),i=(0,a.spawnSync)("nightlight",e,{encoding:"utf-8",env:{PATH:"/bin:/usr/bin:/usr/local/bin:/opt/homebrew/bin"},maxBuffer:10*1024*1024,shell:!0});i.status!==0?(t.style=n.Toast.Style.Failure,t.title="Failed",t.message=i.stderr.includes("nightlight: command not found")?"Please install nightlight via homebrew.":i.stderr):(t.style=n.Toast.Style.Success,t.title="Done")}async function m(){await r(["toggle"])}module.exports=y(p);0&&(module.exports={});