(this["webpackJsonpdrum-machine-3"]=this["webpackJsonpdrum-machine-3"]||[]).push([[0],{10:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r.n(c),n=r(4),a=r.n(n),o=(r(9),r(2)),i=(r(10),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},{keyCode:86,keyTrigger:"V",id:"Tacet",url:"#"}]),d=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"},{keyCode:86,keyTrigger:"V",id:"Tacet",url:"#"}],m=r(0);function u(e){var t=e.clip,r=e.volume,s=e.power,n=e.setDisplayText,a=e.setRecording,i=Object(c.useState)(!1),d=Object(o.a)(i,2),u=d[0],l=d[1];Object(c.useEffect)((function(){return document.addEventListener("keydown",p),function(){return document.removeEventListener("keydown",p)}}));var p=function(e){e.keyCode===t.keyCode&&j()},j=function(){if(s){var e=document.getElementById(t.id);e.volume=r,e.currentTime=0,e.play(),l(!0),setTimeout((function(){return l(!1)}),200),n(t.id),a((function(e){return e+t.id+"|"}))}};return Object(m.jsxs)("div",{onClick:j,className:"buttons btn btn-secondary ".concat(u&&"btn-warning"),children:[Object(m.jsx)("audio",{src:t.url,id:t.id}),t.keyTrigger]})}var l=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),r=t[0],s=t[1],n=Object(c.useState)("Heater Kit"),a=Object(o.a)(n,2),l=a[0],p=a[1],j=Object(c.useState)(i),b=Object(o.a)(j,2),h=b[0],k=b[1],g=Object(c.useState)(!0),y=Object(o.a)(g,2),O=y[0],C=y[1],f=Object(c.useState)(""),x=Object(o.a)(f,2),v=x[0],T=x[1],w=Object(c.useState)(.5),H=Object(o.a)(w,2),_=H[0],z=H[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{id:"drum-machine",children:[Object(m.jsx)("div",{id:"pad-bank",children:h.map((function(e,t){return Object(m.jsx)(u,{clip:e,volume:r,power:O,setDisplayText:p,setRecording:T},t)}))}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{id:"controls",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h5",{children:"Power"}),Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",onClick:function(){O?(C(!1),p("OFF")):(C(!0),p("ON"))},value:O}),Object(m.jsx)("span",{className:"slider"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("h5",{id:"screen",children:l}),Object(m.jsx)("h4",{children:"Volume"}),Object(m.jsx)("input",{type:"range",value:r,min:"0",max:"1",step:"0.01",onChange:function(e){return s(e.target.value)},className:"w-50"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{id:"switcher",children:[Object(m.jsx)("h5",{children:"Audio Bank"}),Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",onClick:function(){O&&(h===i?(k(d),p("Smooth Piano Kit"),T("")):(k(i),p("Heater Kit"),T("")))}}),Object(m.jsx)("span",{className:"slider"})]})]})]})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{id:"recording",children:[v&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h4",{children:["Tempo (",_,")"]}),Object(m.jsx)("input",{type:"range",value:_,min:"0.1",max:"2",step:"0.01",onChange:function(e){return z(e.target.value)},className:"w-50"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){var e=0,t=v.split("|");console.log(t);var c=setInterval((function(){var c=document.getElementById(t[e]);c.volume=r,c.currentTime=0,c.play(),e++}),500*_);setTimeout((function(){return clearInterval(c)}),500*_*t.length-1)},className:"btn btn-success",children:"Play"}),Object(m.jsx)("button",{onClick:function(){var e=v.split("|");e.pop(),e.pop();var t=e.join("|");T(t+"|")},className:"btn btn-danger",children:"Delete"}),Object(m.jsx)("button",{onClick:function(){return T("")},className:"btn btn-secondary",children:"Clear"})]}),Object(m.jsx)("h4",{children:v})]})]})},p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),c(e),s(e),n(e),a(e)}))};r(12);a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(l,{})}),document.getElementById("root")),p()},9:function(e,t,r){}},[[13,1,2]]]);
//# sourceMappingURL=main.b8750a44.chunk.js.map