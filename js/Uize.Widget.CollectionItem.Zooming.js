/*
	UIZE JAVASCRIPT FRAMEWORK 2011-11-14

	http://www.uize.com/reference/Uize.Widget.CollectionItem.Zooming.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.CollectionItem.Zooming',required:['Uize.Node','Uize.Node.VirtualEvent','Uize.Fade'],builder:function(d_a){var d_b=true,d_c=false,d_d=Uize.Node;var d_e=d_a.subclass(null,function(){var d_f=this;d_f.wire('Changed.over',function(){if(!d_f.get('over')){d_f.isWired&&d_f.unwireNode(document.documentElement,'mousemove');d_f.set({inUse:d_c});}d_f.d_g();});}),d_h=d_e.prototype;function d_i(d_j,d_k){var d_l='border'+Uize.capFirstChar(d_k);return(d_d.getStyle(d_j,d_l+'Style')=='none'?0: +d_d.getStyle(d_j,d_l+'Width').replace(/px/i,'')||0);}d_h.d_m=function(){var d_n=this.d_n;return Uize.isFunction(d_n)?d_n.call(this):d_n;};var d_o=d_h.d_o=function(){this.set({d_p:this.d_q&&this.d_r>1&& !!this.d_n});};var d_s=d_h.d_s=function(){this.set({d_t:this.d_q&&this.d_u});};var d_g=d_h.d_g=function(){this.set({d_v:(this.get('over')||this.d_q)&&this.d_r>1&& !!this.d_n});};var d_w=d_h.d_w=function(){this.set({d_x:this.d_q&& !this.d_u});};d_h.d_y=function(){var d_f=this,
d_z=d_f.isWired?d_f.getNode('previewZoom'):d_c;d_f.set({d_u:d_z&&d_z.Uize_Widget_CollectionItem_Zooming_src==d_f.d_m()});};d_h.d_A=function(d_B,d_C){var d_f=this;if(d_f.isWired){var d_D=d_B=='previewZoom';if(d_C){var d_E=d_f.getNode('preview');d_f.d_F=d_d.getCoords(d_f.getNode('previewShell')||(d_E?d_E.parentNode:null));var d_G=d_f.d_G=d_d.getDimensions(d_E);d_G.width-=d_i(d_E,'left')+d_i(d_E,'right');d_G.height-=d_i(d_E,'top')+d_i(d_E,'bottom');var d_H=d_E.parentNode;d_d.setStyle(d_H,{overflow:'hidden',height:d_H.offsetHeight-d_i(d_H,'top')-d_i(d_H,'bottom')});if(!d_f.getNode(d_B)){d_f.flushNodeCache(d_B);var d_z=d_E.cloneNode(d_b);d_d.setProperties(d_z,{id:d_f.get('idPrefix')+'-'+d_B,title:''});d_d.setStyle(d_z,{left:0,top:0,border:'none',width:d_G.width,height:d_G.height,position:'absolute',backgroundImage:''});d_E.parentNode.appendChild(d_z);d_D?d_f.d_I():d_f.d_J();d_B=='previewZoom'&&d_f.wireNode(d_B,'load',function(){d_f.d_y()});}}d_f.displayNode(d_B,d_C);if(d_C){var d_K=d_D?d_f.d_m():d_f.d_L,
d_j=d_f.getNode(d_B);d_K!=d_j.Uize_Widget_CollectionItem_Zooming_src&&d_K!=d_j.src&&d_f.setNodeProperties(d_j,{src:d_K,Uize_Widget_CollectionItem_Zooming_src:d_K});}}};d_h.d_M=function(){this.isWired&&this.d_L&&this.setNodeProperties('preview',{src:this.d_L});};var d_N=d_h.d_N=function(){var d_f=this;if(d_f.isWired&&((d_f.d_v&&d_f.d_x)||(d_f.d_p&&d_f.d_t))){var d_O={};function d_P(d_Q){var d_R=d_Q?'height':'width';d_O[d_Q?'top':'left']=d_f.get(d_Q?'alignY':'alignX')*(d_f.d_F[d_R]-(d_O[d_R]=d_f.d_G[d_R]*d_f.d_S));}d_P(0);d_P(1);d_f.setNodeStyle(d_f.d_t?'previewZoom':'previewZoomLowRes',d_O);}};d_h.d_T=function(){this.d_A('previewZoomLowRes',this.d_v);};d_h.d_U=function(){this.d_A('previewZoom',this.d_p);};d_h.d_V=function(d_B,d_W){var d_f=this;if(d_f.isWired){d_W&&d_f.d_N();d_f.showNode(d_B,d_W);}};d_h.d_J=function(){this.d_V('previewZoomLowRes',this.d_x);};d_h.d_I=function(){this.d_V('previewZoom',this.d_t);};d_h.updateUi=function(){this.d_M();d_a.prototype.updateUi.call(this);};d_h.wireUi=function(){
var d_f=this;if(!d_f.isWired){var d_E=d_f.getNode('preview'),d_X=d_f.getNode('previewShell')||(d_E?d_E.parentNode:null);d_f.d_L||d_f.set({d_L:d_E.src});d_f.wireNode(d_X,Uize.Node.VirtualEvent.mouseRest(150),function(){if(!d_f.get('over'))return;if(d_f.d_r>1){d_f.set({inUse:d_b});function d_Y(){var d_Z=d_d.getEventAbsPos(),d_0=d_f.d_0;function d_1(d_Q){return(Uize.constrain((d_Z[d_Q?'top':'left']-(d_f.d_F[d_Q?'y':'x']+d_0))/(d_f.d_F[d_Q?'height':'width']-d_0*2),0,1))}d_f.d_F&&d_f.set({d_2:d_1(0),d_3:d_1(1)});}d_Y();d_f.wireNode(document.documentElement,'mousemove',d_Y);}});d_a.prototype.wireUi.call(d_f);}};d_e.registerProperties({d_2:{name:'alignX',onChange:d_N,value:0},d_3:{name:'alignY',onChange:d_N,value:0},d_0:{name:'deadMargin',value:20},d_S:{name:'displayedZoomPower',onChange:d_N,value:1},d_q:{name:'inUse',onChange:[d_s,d_o,d_w,d_g,function(){var d_f=this;if(d_f.isWired){if(d_f.d_q){var d_n=d_f.d_m();if(d_n){if(d_f.d_r>1){d_f.d_4=d_b;d_f.d_5||(d_f.d_5=new Uize.Fade).wire('Changed.value',
function(){d_f.set({d_S:+d_f.d_5})});d_f.d_5.start(Uize.copyInto({startValue:1,endValue:d_f.d_r},d_f.d_6));}else{d_f.setNodeProperties('preview',{src:d_n});}d_f.set({d_7:d_b});}}else{if(d_f.d_4){d_f.d_5.stop();d_f.set({d_S:1});d_f.d_4=d_c;}else{d_f.d_M();}d_f.set({d_7:d_c});}}}],value:d_c},d_L:{name:'previewUrl',onChange:[d_h.d_y,d_h.d_M]},d_n:{name:'previewZoomUrl',onChange:[d_o,d_g]},d_7:{name:'showingPreview',value:d_c},d_r:{name:'zoomPower',onChange:[d_o,d_g],value:1},d_6:{name:'zoomFadeProperties',value:{duration:600,curve:Uize.Fade.celeration(0,1)}},d_u:{onChange:[d_s,d_w],value:d_c},d_p:{onChange:d_h.d_U,value:d_c},d_t:{onChange:d_h.d_I,value:d_c},d_v:{onChange:d_h.d_T,value:d_c},d_x:{onChange:d_h.d_J,value:d_b}});return d_e;}});