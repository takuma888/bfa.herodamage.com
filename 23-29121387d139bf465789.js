(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{472:function(e,t,r){"use strict";var o=r(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=o(r(514))},514:function(e,t,r){"use strict";var o=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=o(r(15)),a=o(r(18)),i=o(r(8)),l=o(r(0)),s=(o(r(1)),o(r(152))),u=(r(20),o(r(102))),c=r(242),d=o(r(476)),p=r(240),h=function(e){return{root:(0,i.default)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,c.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,c.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,c.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,c.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,c.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},mini:{width:40,height:40},sizeSmall:{padding:"4px 8px",minWidth:64,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function g(e){var t,r=e.children,o=e.classes,u=e.className,c=e.color,h=e.disabled,g=e.disableFocusRipple,f=e.focusVisibleClassName,m=e.fullWidth,b=e.mini,y=e.size,v=e.variant,C=(0,a.default)(e,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","mini","size","variant"]),w="fab"===v||"extendedFab"===v,O="contained"===v||"raised"===v,k="text"===v||"flat"===v,E=(0,s.default)(o.root,(t={},(0,n.default)(t,o.fab,w),(0,n.default)(t,o.mini,w&&b),(0,n.default)(t,o.extendedFab,"extendedFab"===v),(0,n.default)(t,o.text,k),(0,n.default)(t,o.textPrimary,k&&"primary"===c),(0,n.default)(t,o.textSecondary,k&&"secondary"===c),(0,n.default)(t,o.flat,k),(0,n.default)(t,o.flatPrimary,k&&"primary"===c),(0,n.default)(t,o.flatSecondary,k&&"secondary"===c),(0,n.default)(t,o.contained,O||w),(0,n.default)(t,o.containedPrimary,(O||w)&&"primary"===c),(0,n.default)(t,o.containedSecondary,(O||w)&&"secondary"===c),(0,n.default)(t,o.raised,O||w),(0,n.default)(t,o.raisedPrimary,(O||w)&&"primary"===c),(0,n.default)(t,o.raisedSecondary,(O||w)&&"secondary"===c),(0,n.default)(t,o.outlined,"outlined"===v),(0,n.default)(t,o.outlinedPrimary,"outlined"===v&&"primary"===c),(0,n.default)(t,o.outlinedSecondary,"outlined"===v&&"secondary"===c),(0,n.default)(t,o["size".concat((0,p.capitalize)(y))],"medium"!==y),(0,n.default)(t,o.disabled,h),(0,n.default)(t,o.fullWidth,m),(0,n.default)(t,o.colorInherit,"inherit"===c),t),u);return l.default.createElement(d.default,(0,i.default)({className:E,disabled:h,focusRipple:!g,focusVisibleClassName:(0,s.default)(o.focusVisible,f)},C),l.default.createElement("span",{className:o.label},r))}t.styles=h,g.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var f=(0,u.default)(h,{name:"MuiButton"})(g);t.default=f},685:function(e,t,r){"use strict";r.d(t,"a",function(){return D});var o=r(0),n=r(686),a=r.n(n),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function l(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return(s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function u(e,t,r,o){return new(r||(r=Promise))(function(n,a){function i(e){try{s(o.next(e))}catch(t){a(t)}}function l(e){try{s(o.throw(e))}catch(t){a(t)}}function s(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}s((o=o.apply(e,t||[])).next())})}function c(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var d={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(e,t){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleGoogleChartsLoaderScriptLoaded=function(e){var r=t.props,o=r.chartVersion,n=r.chartPackages,a=r.chartLanguage,i=r.mapsApiKey,l=r.onLoad;e.charts.load(o||"current",{packages:n||["corechart","controls"],language:a||"en",mapsApiKey:i}),e.charts.setOnLoadCallback(function(){l(e)})},t}return l(t,e),t.prototype.shouldComponentUpdate=function(e){return e.chartPackages===this.props.chartPackages},t.prototype.render=function(){var e=this,t=this.props.onError;return Object(o.createElement)(a.a,{url:"https://www.gstatic.com/charts/loader.js",onError:t,onLoad:function(){var t=window;t.google&&e.handleGoogleChartsLoaderScriptLoaded(t.google)}})},t}(o.Component),h=0,g=function(){return"reactgooglegraph-"+(h+=1)},f=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],m=function(e,t,r){return void 0===r&&(r={}),u(void 0,void 0,void 0,function(){return c(this,function(o){return[2,new Promise(function(o,n){var a=r.headers?"headers="+r.headers:"headers=0",i=r.query?"&tq="+encodeURIComponent(r.query):"",l=r.gid?"&gid="+r.gid:"",s=r.sheet?"&sheet="+r.sheet:"",u=r.access_token?"&access_token="+r.access_token:"",c=t+"/gviz/tq?"+(""+a+l+s+i+u);new e.visualization.Query(c).send(function(e){e.isError()?n("Error in query:  "+e.getMessage()+" "+e.getDetailedMessage()):o(e.getDataTable())})})]})})},b=Object(o.createContext)(d),y=b.Provider,v=b.Consumer,C=function(e){var t=e.children,r=e.value;return Object(o.createElement)(y,{value:r},t)},w=function(e){var t=e.render;return Object(o.createElement)(v,null,function(e){return t(e)})},O="#CCCCCC",k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hiddenColumns:[]},t.listenToLegendToggle=function(){var e=t.props,r=e.google,o=e.googleChartWrapper;r.visualization.events.addListener(o,"select",function(){var e=o.getChart().getSelection(),r=o.getDataTable();if(0!==e.length&&null===e[0].row&&null!==r){var n=e[0].column,a=t.getColumnID(r,n);t.state.hiddenColumns.includes(a)?t.setState(function(e){return s({},e,{hiddenColumns:e.hiddenColumns.filter(function(e){return e!==a}).slice()})}):t.setState(function(e){return s({},e,{hiddenColumns:e.hiddenColumns.concat([a])})})}})},t.applyFormatters=function(e,r){for(var o=t.props.google,n=0,a=r;n<a.length;n++){var i=a[n];switch(i.type){case"ArrowFormat":(l=new o.visualization.ArrowFormat(i.options)).format(e,i.column);break;case"BarFormat":(l=new o.visualization.BarFormat(i.options)).format(e,i.column);break;case"ColorFormat":for(var l=new o.visualization.ColorFormat(i.options),s=0,u=i.ranges;s<u.length;s++){var c=u[s];l.addRange.apply(l,c)}l.format(e,i.column);break;case"DateFormat":(l=new o.visualization.DateFormat(i.options)).format(e,i.column);break;case"NumberFormat":(l=new o.visualization.NumberFormat(i.options)).format(e,i.column);break;case"PatternFormat":(l=new o.visualization.PatternFormat(i.options)).format(e,i.column)}}},t.getColumnID=function(e,t){return e.getColumnId(t)||e.getColumnLabel(t)},t.draw=function(e){var r=e.data,o=e.diffdata,n=e.rows,a=e.columns,i=e.options,l=e.legend_toggle,s=e.legendToggle,d=e.chartType,p=e.formatters,h=e.spreadSheetUrl,g=e.spreadSheetQueryParameters;return u(t,void 0,void 0,function(){var e,t,u,f,b,y,v,C,w,O,k,E,P,x;return c(this,function(c){switch(c.label){case 0:return e=this.props,t=e.google,u=e.googleChartWrapper,b=null,null!==o&&(y=t.visualization.arrayToDataTable(o.old),v=t.visualization.arrayToDataTable(o.new),b=t.visualization[d].prototype.computeDiff(y,v)),null===r?[3,1]:(f=Array.isArray(r)?t.visualization.arrayToDataTable(r):new t.visualization.DataTable(r),[3,5]);case 1:return null===n||null===a?[3,2]:(f=t.visualization.arrayToDataTable([a].concat(n)),[3,5]);case 2:return null===h?[3,4]:[4,m(t,h,g)];case 3:return f=c.sent(),[3,5];case 4:f=t.visualization.arrayToDataTable([]),c.label=5;case 5:for(C=f.getNumberOfColumns(),w=0;w<C;w+=1)O=this.getColumnID(f,w),this.state.hiddenColumns.includes(O)&&(k=f.getColumnLabel(w),E=f.getColumnId(w),P=f.getColumnType(w),f.removeColumn(w),f.addColumn({label:k,id:E,type:P}));return x=u.getChart(),"Timeline"===u.getChartType()&&x&&x.clearChart(),u.setOptions(i),u.setDataTable(f),u.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(f),null!==b&&(u.setDataTable(b),u.draw()),null!==p&&(this.applyFormatters(f,p),u.setDataTable(f),u.draw()),!0!==s&&!0!==l||this.grayOutHiddenColumns({options:i}),[2]}})})},t.grayOutHiddenColumns=function(e){var r=e.options,o=t.props.googleChartWrapper,n=o.getDataTable();if(null!==n){var a=n.getNumberOfColumns();if(!1!==t.state.hiddenColumns.length>0){var i=Array.from({length:a-1}).map(function(e,o){var a=t.getColumnID(n,o+1);return t.state.hiddenColumns.includes(a)?O:void 0!==r.colors&&null!==r.colors?r.colors[o]:f[o]});o.setOptions(s({},r,{colors:i})),o.draw()}}},t.onResize=function(){t.props.googleChartWrapper.draw()},t}return l(t,e),t.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.google,r=e.googleChartWrapper;window.removeEventListener("resize",this.onResize),t.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()},t.prototype.componentDidUpdate=function(){this.draw(this.props)},t.prototype.render=function(){return null},t}(o.Component),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){var e=this.props,t=e.google,r=e.googleChartWrapper,n=e.googleChartDashboard;return Object(o.createElement)(w,{render:function(e){return Object(o.createElement)(k,s({},e,{google:t,googleChartWrapper:r,googleChartDashboard:n}))}})},t}(o.Component),P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.listenToEvents=function(e){var t=this,r=e.chartEvents,o=e.google,n=e.googleChartWrapper;if(null!==r){o.visualization.events.removeAllListeners(n);for(var a=function(e){var r=e.eventName,a=e.callback;o.visualization.events.addListener(n,r,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];a({chartWrapper:n,props:t.props,google:o,eventArgs:e})})},i=0,l=r;i<l.length;i++){a(l[i])}}},t.prototype.render=function(){var e=this,t=this.props,r=t.google,n=t.googleChartWrapper;return Object(o.createElement)(w,{render:function(t){return e.listenToEvents({chartEvents:t.chartEvents||null,google:r,googleChartWrapper:n}),null}})},t}(o.Component),x=0,T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},t.graphID=null,t.dashboard_ref=Object(o.createRef)(),t.toolbar_ref=Object(o.createRef)(),t.getGraphID=function(){var e,r=t.props,o=r.graphID,n=r.graph_id;return e=null===o&&null===n?null===t.graphID?g():t.graphID:null!==o&&null===n?o:null!==n&&null===o?n:o,t.graphID=e,t.graphID},t.getControlID=function(e,t){return x+=1,void 0===e?"googlechart-control-"+t+"-"+x:e},t.addControls=function(e,r){var o=t.props,n=o.google,a=o.controls,i=null===a?null:a.map(function(e,r){var o=e.controlID,a=e.controlType,i=e.options,l=e.controlWrapperParams,u=t.getControlID(o,r);return{controlProp:e,control:new n.visualization.ControlWrapper(s({containerId:u,controlType:a,options:i},l))}});if(null===i)return null;r.bind(i.map(function(e){return e.control}),e);for(var l=function(r){for(var o=r.control,a=r.controlProp.controlEvents,i=function(r){var a=r.callback,i=r.eventName;n.visualization.events.removeListener(o,i,a),n.visualization.events.addListener(o,i,function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];a({chartWrapper:e,controlWrapper:o,props:t.props,google:n,eventArgs:r})})},l=0,s=void 0===a?[]:a;l<s.length;l++){i(s[l])}},u=0,c=i;u<c.length;u++){l(c[u])}return i},t.renderChart=function(){var e=t.props,r=e.width,n=e.height,a=e.options,i=e.style,l=e.className,u=e.rootProps,c=e.google,d=s({height:n||a&&a.height,width:r||a&&a.width},i);return Object(o.createElement)("div",s({id:t.getGraphID(),style:d,className:l},u),t.state.isReady&&null!==t.state.googleChartWrapper?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(E,{googleChartWrapper:t.state.googleChartWrapper,google:c,googleChartDashboard:t.state.googleChartDashboard}),Object(o.createElement)(P,{googleChartWrapper:t.state.googleChartWrapper,google:c})):null)},t.renderControl=function(e){return void 0===e&&(e=function(e){e.control,e.controlProp;return!0}),t.state.isReady&&null!==t.state.googleChartControls?Object(o.createElement)(o.Fragment,null,t.state.googleChartControls.filter(function(t){var r=t.controlProp,o=t.control;return e({control:o,controlProp:r})}).map(function(e){var t=e.control;e.controlProp;return Object(o.createElement)("div",{key:t.getContainerId(),id:t.getContainerId()})})):null},t.renderToolBar=function(){return null===t.props.toolbarItems?null:Object(o.createElement)("div",{ref:t.toolbar_ref})},t}return l(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.options,r=e.google,o=e.chartType,n=e.chartWrapperParams,a=e.toolbarItems,i=e.getChartEditor,l=e.getChartWrapper,u=s({chartType:o,options:t,containerId:this.getGraphID()},n),c=new r.visualization.ChartWrapper(u);c.setOptions(t),l(c,r);var d=new r.visualization.Dashboard(this.dashboard_ref),p=this.addControls(c,d);null!==a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var h=null;null!==i&&i({chartEditor:h=new r.visualization.ChartEditor,chartWrapper:c,google:r}),this.setState({googleChartEditor:h,googleChartControls:p,googleChartDashboard:d,googleChartWrapper:c,isReady:!0})},t.prototype.shouldComponentUpdate=function(e,t){return this.state.isReady!==t.isReady},t.prototype.render=function(){var e=this.props,t=e.width,r=e.height,n=e.options,a=e.style,i=s({height:r||n&&n.height,width:t||n&&n.width},a);return null!==this.props.render?Object(o.createElement)("div",{ref:this.dashboard_ref,style:i},Object(o.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(o.createElement)("div",{ref:this.dashboard_ref,style:i},this.renderControl(function(e){return"bottom"!==e.controlProp.controlPosition}),this.renderChart(),this.renderControl(function(e){return"bottom"===e.controlProp.controlPosition}),this.renderToolBar())},t}(o.Component),D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loadingStatus:"loading",google:null},t}return l(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.chartLanguage,n=t.chartPackages,a=t.chartVersion,i=t.mapsApiKey,l=t.loader,u=t.errorElement;return Object(o.createElement)(C,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(o.createElement)(T,s({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&u?u:l,Object(o.createElement)(p,s({},{chartLanguage:r,chartPackages:n,chartVersion:a,mapsApiKey:i},{onLoad:function(t){e.setState({loadingStatus:"ready",google:t})},onError:function(){e.setState({loadingStatus:"errored"})}})))},t.defaultProps=d,t}(o.Component)},686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=r(0),i=(o=a)&&o.__esModule?o:{default:o},l=r(1);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),n(t,[{key:"componentDidMount",value:function(){var e,t,r,o=this.props,n=o.onError,a=o.onLoad,i=o.url;this.constructor.loadedScripts[i]?a():this.constructor.erroredScripts[i]?n():this.constructor.scriptObservers[i]?this.constructor.scriptObservers[i][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[i]=(e={},t=this.scriptLoaderId,r=this.props,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,r=t.onCreate,o=t.url,n=t.attributes,a=document.createElement("script");r(),n&&Object.keys(n).forEach(function(e){return a.setAttribute(e,n[e])}),a.src=o,a.hasAttribute("async")||(a.async=1);var i=function(t){var r=e.constructor.scriptObservers[o];Object.keys(r).forEach(function(n){t(r[n])&&delete e.constructor.scriptObservers[o][e.scriptLoaderId]})};a.onload=function(){e.constructor.loadedScripts[o]=!0,i(function(e){return e.onLoad(),!0})},a.onerror=function(){e.constructor.erroredScripts[o]=!0,i(function(e){return e.onError(),!0})},document.body.appendChild(a)}},{key:"render",value:function(){return null}}]),t}();s.propTypes={attributes:l.PropTypes.object,onCreate:l.PropTypes.func,onError:l.PropTypes.func.isRequired,onLoad:l.PropTypes.func.isRequired,url:l.PropTypes.string.isRequired},s.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},s.scriptObservers={},s.loadedScripts={},s.erroredScripts={},s.idCount=0,t.default=s,e.exports=t.default}}]);