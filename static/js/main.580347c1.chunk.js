(this["webpackJsonpdps-static-website"]=this["webpackJsonpdps-static-website"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/schoolLogo.61a4bc37.jpeg"},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/vicePrincipalImage.387362ea.jpeg"},function(e,a,t){},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(2),r=t.n(c),i=(t(12),t(3)),o=t(4),s=t(6),m=t(5),u=(t(13),function(e){return l.a.createElement("div",{className:"topHeaderBox rectangleTopHeader"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{className:"schoolLogo",src:t(14),alt:"dummy"})),l.a.createElement("li",null,l.a.createElement("h1",{className:"schoolName"},"Destination Public School")),l.a.createElement("li",null,l.a.createElement("h2",{className:"schoolAddress"},"Opp. Ramchaura Mandir"))))}),h=(t(15),function(e){return l.a.createElement("div",null,l.a.createElement("button",{className:"tablink",onClick:function(){return e.onclick("Home")}},"Home"),l.a.createElement("button",{className:"tablink",onClick:function(){return e.onclick("About")}},"About"),l.a.createElement("button",{className:"tablink",onClick:function(){return e.onclick("Faculty")}},"Faculty"),l.a.createElement("button",{className:"tablink",onClick:function(){return e.onclick("Events")}},"Events"),l.a.createElement("button",{className:"tablink",onClick:function(){return e.onclick("Contact")}},"Contact"))}),d=(t(16),function(e){return l.a.createElement("div",{className:"rectangleHomeContent"},l.a.createElement("h2",null,"Welcome to Destination Public School"),l.a.createElement("strong",null,l.a.createElement("h3",null,"Vice Principal's Message")),l.a.createElement("img",{className:"principalImage",src:t(17),alt:"dummy"}),l.a.createElement("p",null,"Destination Public School, constantly strives to raise its standard and provide quality education to the underprivileged boys and girls of the vicinity. Our goal therefore, is integral Education, to which our school is primarily committed and towards which it directs all talents, activities and energies."),l.a.createElement("p",null,"Life is a class-room, where-in we live to experiment, and learn through the experiences we go-through whether they are positive or negative."),l.a.createElement("p",null,"Experiences come in different forms like, mistake, stumbles, failures, hardships, hurts, disappointments and also in the form of examples. (where we learn through the experiences of others)"),l.a.createElement("p",null,"Experiences are a high-value-form of information that is complete, and ready to be applied; we should carefully learn through this faculty and get the wisdom that is in it. These marvellous things called experiences are never limited or complete. These immense sensibilities which are full of commonsense, when combined with education they make our knowledge complete."),l.a.createElement("p",null,"Experiences of life are practical teachings that add value in our life. A person who equips himself with these will always enjoy advantage over others, experienced people are always preferred for key positions in companies. Socially also, voice of experience and commonsense is welcomed, moreover, we all feel safe when we are in experienced hands."),l.a.createElement("p",null,"At our schoool, we value every experience; find meaning in them, as each one of them, has a lesson to teach and use them wisely."))}),E=function(e){return l.a.createElement("div",{className:"rectangle"},l.a.createElement("h3",null,"Events content"))},f=function(e){return l.a.createElement("div",{className:"rectangle"},l.a.createElement("h3",null,"Contact content"))},p=function(e){return l.a.createElement("div",{className:"rectangle"},l.a.createElement("h3",null,"About content"))},b=(t(18),t(19),function(e){return l.a.createElement("div",{className:"rectangleFooter"},l.a.createElement("h3",{className:"paddingLeft"},"Follow us"),l.a.createElement("ul",{className:"social"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-google-plus"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-youtube"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("li",null)),l.a.createElement("h3",{className:"paddingLeft"},"Contact"),l.a.createElement("ul",{className:"contact"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-envelope"}),l.a.createElement("label",null,"myschool@gmail.com")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-phone"}),l.a.createElement("label",null,"9932008739 (Vice Principal - Nikhil Kumar Jha), 7991107871 (Principal - Prince Kumar Jha)")),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-map-marker"}),l.a.createElement("label",null,"Destination Public School, Kumar Sudha Complex, Opp. Ramchaura Mandir, Rambhadra, Hajipur, Vaishali"))))}),g=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={selectedTabContent:l.a.createElement(d,null),selectedTabName:"Home"},e.tabClickHandler=function(a){switch(console.log(a),e.setState({selectedTabName:a}),a){case"Home":e.setState({selectedTabContent:l.a.createElement(d,null)});break;case"About":e.setState({selectedTabContent:l.a.createElement(p,null)});break;case"Events":e.setState({selectedTabContent:l.a.createElement(E,null)});break;case"Contact":e.setState({selectedTabContent:l.a.createElement(f,null)});break;default:e.setState({selectedTabContent:l.a.createElement(d,null)})}},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement(u,null),l.a.createElement(h,{onclick:this.tabClickHandler}),this.state.selectedTabContent,l.a.createElement(b,null))}}]),t}(n.Component);var v=function(){return l.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.580347c1.chunk.js.map