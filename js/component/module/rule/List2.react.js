"use strict";define(["react","backbone","common","jsx!component/common/HeaderComponent.react"],function(React,Backbone,common,HeaderComponent){return React.createClass({getInitialState:function(){return{items:[{id:0,title:"术前"},{id:1,title:"术中"},{id:2,title:"术后"}]}},componentWillUnmount:function(){},componentDidMount:function(){$("#content").removeClass("home-loading").removeClass("pt-page-moveToLeft").addClass("pt-page-moveFromLeft"),$(".rule-detail").on("click",function(){var item=$(this).data("id");$("#content").removeClass("pt-page-moveFromLeft").addClass("pt-page-moveToLeft");var rout=new Backbone.Router;setTimeout(function(){rout.navigate("rule/detail?id="+item.id,{trigger:!0})},100)}),common.scrollbar()},render:function(){var header="";return $TJ.hasHeader&&(header=React.createElement(HeaderComponent,{back:!0,title:"规章制度"})),React.createElement("div",null,header,React.createElement("div",{className:$TJ.hasHeader?"hasHeader":""},React.createElement("div",{className:"search-title"},React.createElement("p",{className:"search"},React.createElement("input",{id:"search",type:"search",placeholder:"搜索关键字"}),React.createElement("i",{className:"ion-ios-search"}))),React.createElement("div",{className:"list rule-list"},this.state.items.map(function(item,i){return React.createElement("div",{className:"item top go-right rule-detail","data-id":JSON.stringify(item)},item.title)},this))))}})});