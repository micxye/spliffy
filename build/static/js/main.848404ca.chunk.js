(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(63)},30:function(e,t,a){},32:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(3),r=a.n(o),s=(a(30),a(5)),c=a(6),l=a(8),d=a(7),f=a(9),v=(a(32),a(12)),u=a.n(v),h=a(21),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleMouseEnter=function(e){e.srcElement.classList.add("hover"),e.srcElement.querySelector(".favorite").classList.add("show")},a.handleMouseLeave=function(e){e.srcElement.classList.remove("hover"),e.srcElement.querySelector(".favorite").classList.remove("show")},a.handleFavoriteClick=function(){var e=a.props,t=e.gif,i=e.addFavorite,n=e.removeFavorite;a.state.favorite?(a.setState({favorite:!1}),n(t)):(a.setState({favorite:!0}),i(t))},a.openModal=function(){a.setState({open:!0})},a.closeModal=function(){a.setState({open:!1})},a.state={open:!1,favorite:e.favorite},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=r.a.findDOMNode(this);e.addEventListener("mouseenter",this.handleMouseEnter),e.addEventListener("mouseleave",this.handleMouseLeave)}},{key:"render",value:function(){var e=this.props.gif,t=this.state,a=t.open,i=t.favorite,o={width:window.innerWidth-65>e.images.original.width?e.images.original.width:window.innerWidth-65};return n.a.createElement("div",{className:"gif"},n.a.createElement("img",{src:e.images.downsized_medium.url,alt:"gif failed to load",className:"gif-img",onClick:this.openModal}),n.a.createElement("div",{className:i?"favorite favorited show":"favorite",onClick:this.handleFavoriteClick},"\u2665"),n.a.createElement(h.a,{open:a,onClose:this.closeModal,center:!0},n.a.createElement("div",{className:"gif-title"},e.title),n.a.createElement("img",{src:e.images.original.url,alt:"gif failed to load",style:o}),n.a.createElement("div",{className:"gif-url"},n.a.createElement("div",{className:i?"favorite-modal favorited":"favorite-modal",onClick:this.handleFavoriteClick},"\u2665"),n.a.createElement("a",{href:e.bitly_url},e.bitly_url))))}}]),t}(i.Component),m=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).loadMoreGifs=function(){var t=window.pageYOffset+window.innerHeight;document.body.offsetHeight-t<150&&("trending"===e.state.view&&e.getTrendingGifs(),"search"===e.state.view&&e.getSearchGifs())},e.renderTrending=function(){e.setState({view:"trending",gifs:[],loading:!0,offset:0},e.getTrendingGifs)},e.searchGifs=function(t){t.preventDefault(),e.setState({view:"search",gifs:[],loading:!0,offset:0,query:e.state.value},e.getSearchGifs)},e.addFavorite=function(t){var a=Object.assign({},e.state.favorites);a[t.id]=t,e.setState({favorites:a})},e.removeFavorite=function(t){var a=Object.assign({},e.state.favorites);delete a[t.id],e.setState({favorites:a},function(){return"favorite"===e.state.view?e.renderFavorites():null})},e.renderFavorites=function(){e.setState({view:"favorite",gifs:Object.values(e.state.favorites)},e.renderGifs)},e.handleChange=function(t){e.setState({value:t.target.value})},e.state={url:"https://api.giphy.com/v1/gifs/",gifs:[],key:"GoNup8Vhyxzuui7BE9WYUaBN&offset=",view:"trending",offset:0,value:"",query:"",favorites:{},loading:!0},e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTrendingGifs(),window.onscroll=this.loadMoreGifs}},{key:"getTrendingGifs",value:function(){var e=this,t=this.state,a=t.url,i=t.gifs,n=t.key,o=t.offset,r=o+24;u.a.get("".concat(a,"trending?api_key=jZRfFuMp").concat(n).concat(o,"&limit=24")).then(function(t){var a=t.data.data;e.setState({gifs:i.concat(a),offset:r,loading:!1})}).catch(function(t){console.log(t),e.setState({gifs:[],loading:!1})})}},{key:"getSearchGifs",value:function(){var e=this,t=this.state,a=t.url,i=t.gifs,n=t.key,o=t.offset,r=t.query,s=o+24;u.a.get("".concat(a,"search?api_key=jZRfFuMp").concat(n).concat(o,"&limit=24&q=").concat(r)).then(function(t){var a=t.data.data;e.setState({gifs:i.concat(a),offset:s,loading:!1})}).catch(function(t){console.log(t),e.setState({gifs:[],loading:!1})})}},{key:"renderGifs",value:function(){var e=this,t=this.state,a=t.gifs,i=t.view,o=t.favorites,r=t.loading;return 0!==a.length||r?a.map(function(t){var a=Boolean(o[t.id]);return"favorite"===i&&(a=!0),n.a.createElement(g,{gif:t,key:t.id,favorite:a,addFavorite:e.addFavorite,removeFavorite:e.removeFavorite})}):n.a.createElement("div",{id:"error"},"NO GIFS...")}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.view;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{id:"top-bar"},n.a.createElement("div",{id:"logo",onClick:this.renderTrending},n.a.createElement("img",{src:"spliffy.gif",alt:"(_______)",id:"spliffy-logo"}),n.a.createElement("span",{id:"spliffy-text"},"SPLIFFY")),n.a.createElement("div",{id:"search-bar"},n.a.createElement("form",{id:"search-input",onSubmit:this.searchGifs},n.a.createElement("div",null,n.a.createElement("input",{value:t,onChange:this.handleChange,type:"text",placeholder:"Search all gifs"})))),n.a.createElement("img",{src:"search.png",id:"search-button",alt:"search",onClick:this.searchGifs})),n.a.createElement("div",{id:"middle-bar"},n.a.createElement("div",{id:"view"},a.toUpperCase()," GIFS"),n.a.createElement("button",{type:"button",id:"favorites-button",onClick:this.renderFavorites},n.a.createElement("span",{id:"favorites-text"},"FAVORITES"),n.a.createElement("span",{id:"favorites-heart"},"\u2665"))),n.a.createElement("div",{id:"gifs-container"},this.renderGifs()))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.848404ca.chunk.js.map