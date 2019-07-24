(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),i=a.n(s),r=(a(16),a(2)),o=a(3),l=a(5),d=a(4),u=a(1),m=a(6),h=a(9),b=function(e){var t=e.todos,a=e.deleteItem,n=e.chooseItem,s=t.length?t.map(function(e){return c.a.createElement("div",{className:"todo item",style:{padding:"10px 0px"},key:e.id,onClick:function(){n(e.content)}},c.a.createElement("div",{className:"right floated content"},c.a.createElement("button",{className:"ui big icon button",style:{background:"none",color:"black"},onClick:function(){a(e.id)}},c.a.createElement("i",{className:"trash alternate outline icon"}))),c.a.createElement("div",{className:"middle aligned content"},c.a.createElement("h2",{style:{lineHeight:2}},e.content)))}):c.a.createElement("div",{className:"ui placeholder segment center aligned",style:{background:"none",border:"0px",boxShadow:"none"}},c.a.createElement("h2",null,"Yay! You don't have any todo task left!"));return c.a.createElement("div",{className:"ui big divided list"},s)},v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={content:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleKeyPressed=a.handleKeyPressed.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({content:t})}},{key:"handleKeyPressed",value:function(e){"Enter"===e.key&&this.handleSubmit()}},{key:"handleSubmit",value:function(e){this.props.addItem(this.state),this.setState({content:""})}},{key:"render",value:function(){var e=this.state.content,t=this.handleChange,a=this.handleSubmit,n=this.handleKeyPressed;return c.a.createElement("div",{className:"ui big fluid action input"},c.a.createElement("input",{type:"text",value:e,placeholder:"Add new todo",onKeyPress:n,onChange:t}),c.a.createElement("button",{className:"ui icon black button",onClick:a},c.a.createElement("i",{className:"plus icon"})))}}]),t}(c.a.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={todos:[{id:1,content:"Clean Dishes"},{id:2,content:"Buy Groceries"}]},a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.chooseItem=a.chooseItem.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"deleteItem",value:function(e){var t=this.state.todos.filter(function(t){return t.id!==e});this.setState({todos:t})}},{key:"addItem",value:function(e){e.id=Math.random();var t=[].concat(Object(h.a)(this.state.todos),[e]);this.setState({todos:t})}},{key:"chooseItem",value:function(e){this.props.updateTask(e)}},{key:"render",value:function(){var e=this.state.todos,t=this.deleteItem,a=this.addItem,n=this.chooseItem;return c.a.createElement("div",{style:{padding:"2rem 1rem"}},c.a.createElement(v,{addItem:a}),c.a.createElement(b,{todos:e,deleteItem:t,chooseItem:n}))}}]),t}(c.a.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={},a.convertTime=a.convertTime.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"convertTime",value:function(e){var t=Math.floor(e/60),a=e-60*t;return a<10&&(a="0"+a),e=t+":"+a}},{key:"render",value:function(){var e=this.props.time,t=this.convertTime;return c.a.createElement("div",{className:"ui huge header center aligned",style:{fontSize:"6rem"}},t(e))}}]),t}(c.a.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={time:1500,start:!1,percentage:0},a.play=a.play.bind(Object(u.a)(a)),a.stop=a.stop.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"play",value:function(e){var t=this;this.state.start!==e.start&&(this.setState({start:!this.state.start}),this.state.start?clearInterval(this.interval):this.interval=setInterval(function(){t.setState({time:t.state.time-1,percentage:t.state.percentage+.06})},1e3))}},{key:"stop",value:function(){this.setState({start:!1,time:1500,percentage:0}),clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.time,a=e.start,n=e.percentage,s=this.props.showTask,i=this.play,r=this.stop;return c.a.createElement("div",{className:"ui center middle aligned grid"},c.a.createElement("div",{className:"sixteen center aligned wide column"},c.a.createElement(k,{time:t}),s?c.a.createElement("h1",{className:"header"},s):c.a.createElement("h1",{className:"header",style:{opacity:".3"}},"What to do next?"),c.a.createElement("button",{className:"ui massive icon button",style:{background:"none",color:"black"},onClick:i},a?c.a.createElement("i",{className:"pause icon"}):c.a.createElement("i",{className:"play icon"})),c.a.createElement("button",{className:"ui massive icon button",style:{background:"none",color:"black"},onClick:r},c.a.createElement("i",{className:"stop icon"})),c.a.createElement("div",{className:"ui divider"}),c.a.createElement("h3",null,"You just started on the road. ",c.a.createElement("br",null),"Keep going!"),c.a.createElement("div",{className:"progress-bar-wrapper"},c.a.createElement("i",{className:"truck icon",style:{left:"".concat(n,"%")}}),c.a.createElement("div",{className:"progress-bar"}),c.a.createElement("i",{className:"flag checkered icon"}))))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={currentTask:null},a.updateTask=a.updateTask.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"updateTask",value:function(e){this.setState({currentTask:e})}},{key:"render",value:function(){var e=this.state.currentTask,t=this.updateTask;return c.a.createElement("div",{className:"ui equal height stackable grid"},c.a.createElement("div",{className:"eight wide column",style:{background:"yellow"}},c.a.createElement(y,{showTask:e})),c.a.createElement("div",{className:"eight wide column"},c.a.createElement(p,{updateTask:t})))}}]),t}(c.a.Component);var f=function(){return c.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4e6694d3.chunk.js.map