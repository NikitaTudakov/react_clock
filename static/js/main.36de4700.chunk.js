(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),l=n(3),i=n(4),u=n(6),m=n(5),s=function(e){var t=e.time;return c.a.createElement("div",{className:"clock"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Current time:"," ",t.toLocaleTimeString()),console.log("Current time: ".concat(t.toLocaleTimeString())))},k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={clockName:Math.random(),time:new Date,isClockVisible:!0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({time:new Date})}),1e3)}},{key:"randomName",value:function(){var e=Math.random();console.log("The Clock was renamed from ".concat(this.state.clockName," to ").concat(e)),this.setState({clockName:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.time,a=t.isClockVisible;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement(s,{time:n}):"",c.a.createElement("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!0})}},"Show Clock"),c.a.createElement("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!1})}},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:function(){return e.randomName()}},"Set random name"))}}]),n}(c.a.Component);r.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.36de4700.chunk.js.map