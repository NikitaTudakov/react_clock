(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),l=n.n(o),r=n(3),i=n(4),m=n(6),s=n(5),u=function(e){var t=e.time,n=e.name;return c.a.createElement("div",{className:"clock"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Name: ",n),c.a.createElement("p",null,"Current time:"," ",t.toLocaleTimeString()),console.log("Current time: ".concat(t.toLocaleTimeString())))},k=(n(12),function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={clockName:Math.floor(1e3*Math.random()),time:new Date,isClockVisible:!0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({time:new Date})}),1e3)}},{key:"randomName",value:function(){var e=Math.floor(1e3*Math.random());console.log("The Clock was renamed from ".concat(this.state.clockName," to ").concat(e)),this.setState({clockName:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.time,a=t.isClockVisible,o=t.clockName;return c.a.createElement("div",{className:"container"},a?c.a.createElement(u,{time:n,name:o}):"",c.a.createElement("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!0})},className:"button"},"Show Clock"),c.a.createElement("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!1})},className:"button"},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:function(){return e.randomName()},className:"button"},"Set random name"))}}]),n}(c.a.Component));l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.ac2c8732.chunk.js.map