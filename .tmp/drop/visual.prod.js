var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){function t(e,t,i,s){if(e){var n=e[t];if(n){var a=n[i];if(void 0!==a)return a}}return s}function i(e,t,i,s,n){var a=e.objects;if(a){var o=a[t];if(o){var l=o[i];if(l){var r=l[s];if(void 0!==r)return r}}}return n}e.getValue=t,e.getCategoricalObjectValue=i}(t=e.PBI_CV_3DFBB0D1_6AFB_4242_B6E1_7116023B1167||(e.PBI_CV_3DFBB0D1_6AFB_4242_B6E1_7116023B1167={}))}(t=e.visual||(e.visual={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){var t=function(){function t(e){this.imageDiv=document.createElement("div"),this.imageDiv.className="rcv_autoScaleImageContainer",e.element.appendChild(this.imageDiv),this.imageElement=document.createElement("img"),this.imageElement.className="rcv_autoScaleImage",this.imageDiv.appendChild(this.imageElement),this.settings_spline={smoothness:30,lineColor:"red"},this.settings_scatter={pointColor:"blue"},this.settings_conf={showConf:!0,confLevel:.99}}return t.prototype.update=function(t){var i=t.dataViews;if(i&&0!==i.length){var s=i[0];if(s&&s.metadata){this.settings_spline={smoothness:e.getValue(s.metadata.objects,"spline_settings","percentile",30),lineColor:e.getValue(s.metadata.objects,"spline_settings","lineColor","red")},this.settings_scatter={pointColor:e.getValue(s.metadata.objects,"scatter_settings","pointColor","blue")},this.settings_conf={confLevel:e.getValue(s.metadata.objects,"conf_settings","confLevel",.99),showConf:e.getValue(s.metadata.objects,"conf_settings","showConf",!0)};var n=null;s.scriptResult&&s.scriptResult.payloadBase64&&(n="data:image/png;base64,"+s.scriptResult.payloadBase64),n?this.imageElement.src=n:this.imageElement.src=null,this.onResizing(t.viewport)}}},t.prototype.onResizing=function(e){this.imageDiv.style.height=e.height+"px",this.imageDiv.style.width=e.width+"px"},t.prototype.enumerateObjectInstances=function(e){var t=e.objectName,i=[];switch(t){case"spline_settings":i.push({objectName:t,properties:{percentile:this.settings_spline.smoothness,lineColor:this.settings_spline.lineColor},selector:null});break;case"conf_settings":i.push({objectName:t,properties:{confLevel:this.settings_conf.confLevel,showConf:this.settings_conf.showConf},selector:null});break;case"scatter_settings":i.push({objectName:t,properties:{pointColor:this.settings_scatter.pointColor},selector:null})}return i},t}();e.Visual=t}(t=e.PBI_CV_3DFBB0D1_6AFB_4242_B6E1_7116023B1167||(e.PBI_CV_3DFBB0D1_6AFB_4242_B6E1_7116023B1167={}))}(t=e.visual||(e.visual={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(t){var i;!function(t){t.PBI_CV_3DFBB0D1_6AFB_4242_B6E1_7116023B1167={name:"PBI_CV_3DFBB0D1_6AFB_4242_B6E1_7116023B1167",displayName:"spline",class:"Visual",version:"1.0.0",apiVersion:"1.2.0",create:function(t){return new e.extensibility.visual.PBI_CV_3DFBB0D1_6AFB_4242_B6E1_7116023B1167.Visual(t)},custom:!0}}(i=t.plugins||(t.plugins={}))}(t=e.visuals||(e.visuals={}))}(powerbi||(powerbi={}));