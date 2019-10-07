(this["webpackJsonppma-challenge"]=this["webpackJsonppma-challenge"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){e.exports=a(25)},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),s=a.n(o),i=(a(20),a(1)),c=a(3),p=a(4),l=a(6),u=a(5),h=a(7),d=(a(11),a(2)),m=a.n(d),b=a(13),O=a.n(b),f=a(14);a.n(f)()(m.a);var k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e;return r.a.createElement(O.a,(e={constructorType:"chart"},Object(i.a)(e,"constructorType","ganttChart"),Object(i.a)(e,"ref",this.chartComponent),Object(i.a)(e,"highcharts",m.a),Object(i.a)(e,"options",this.props.chartOptions),e))}}]),t}(r.a.Component),v=a(9),y=a(8),j=a.n(y);a(22);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget.value,a=e.currentTarget.name;"start"===a?t=Date.parse(t):"end"===a&&(t=Date.parse(t));D({},this.props.activeTask);var n=D({},this.props.activeTask,Object(i.a)({},a,t));this.props.updateTask(this.props.activeTask.position,n)}},{key:"render",value:function(){return r.a.createElement("div",{className:"input-container"},r.a.createElement("span",{onClick:this.props.hideInput,className:"close-button"},"Close"),r.a.createElement("h2",null,"Update Tasks"),r.a.createElement("form",{className:"input-form"},r.a.createElement("label",null,"Task Name:",r.a.createElement("input",{type:"text",name:"name",value:this.props.activeTask.name,onChange:this.handleChange})),r.a.createElement("label",null,"Task Start Date:",r.a.createElement("input",{type:"date",name:"start",value:j()(this.props.activeTask.start).format("YYYY-MM-DD"),onChange:this.handleChange})),r.a.createElement("label",null,"Task End Date:",r.a.createElement("input",{type:"date",name:"end",value:j()(this.props.activeTask.end).format("YYYY-MM-DD"),onChange:this.handleChange})),r.a.createElement("label",null,"Task Color:",r.a.createElement("input",{type:"color",name:"color",value:this.props.activeTask.color,onChange:this.handleChange}))))}}]),t}(r.a.Component);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).showInput=function(e){a.setState({inputDisplay:!0,activeTask:{id:e.point.options.id,name:e.point.options.name,start:e.point.options.start,end:e.point.options.end,color:e.point.options.color,position:e.point.options.position,rank:e.point.options.rank}})},a.hideInput=function(){a.setState({inputDisplay:!1})},a.updateTask=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.options);console.log(n),n.series[0].data[e]=t,a.setState({options:n,activeTask:{id:n.series[0].data[e].id,name:n.series[0].data[e].name,start:n.series[0].data[e].start,end:n.series[0].data[e].end,color:n.series[0].data[e].color,position:n.series[0].data[e].position,rank:n.series[0].data[e].rank}})},a.state={options:{title:{text:"Very Important Companywide Tasklist"},xAxis:{type:"datetime"},series:[{data:[{id:"task1",name:"Shred Classified Documents",start:Date.parse("01/17/2020"),end:Date.parse("02/14/2020"),color:"#4682B4",position:0,rank:0},{id:"task2",name:"Change Tires on Vehicle Fleet",start:Date.parse("01/31/2020"),end:Date.parse("03/17/2020"),color:"#D8BFD8",position:1,rank:1},{id:"task3",name:"Export Data to Excel Spreadsheet",start:Date.parse("03/31/2020"),end:Date.parse("04/17/2020"),color:"#FFE4B5",position:2,rank:2},{id:"task4",name:"Purchase 8000 Reams of Printer Paper",start:Date.parse("04/18/2020"),end:Date.parse("05/19/2020"),color:"#FF6347",position:3,rank:3},{id:"task5",name:"Interview Prospective Candidates",start:Date.parse("05/31/2020"),end:Date.parse("06/21/2020"),color:"#FF1493",position:4,rank:4},{id:"task6",name:"Clone Github Repositories",start:Date.parse("07/31/2020"),end:Date.parse("08/19/2020"),color:"#7FFF00",position:5,rank:5}],events:{click:function(e){a.showInput(e)}}}]},inputDisplay:!1,activeTask:{}},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(k,{chartOptions:this.state.options})),this.state.inputDisplay?r.a.createElement(E,{hideInput:this.hideInput,updateTask:this.updateTask,activeTask:this.state.activeTask}):null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d82afdbe.chunk.js.map