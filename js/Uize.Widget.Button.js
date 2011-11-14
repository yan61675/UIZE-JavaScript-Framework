/*
	UIZE JAVASCRIPT FRAMEWORK 2011-11-14

	http://www.uize.com/reference/Uize.Widget.Button.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Button',required:'Uize.Node',builder:function(c_a){var c_b,c_c=true,c_d=false,c_e=Uize.Node;var c_f=c_a.subclass(null,function(){var c_g=this;function c_h(){if(c_g.isWired){c_g.c_i()||c_g.set({c_j:''});c_g.c_h();}}c_g.wire({'Changed.busyInherited':c_h,'Changed.enabledInherited':c_h});}),c_k=c_f.prototype;var c_l,c_m={},c_n={grayed:16,'':8,over:4,active:2,playing:1},c_o='(Grayed|Over|Active|Playing)',c_p=new RegExp(c_o),c_q=new RegExp('(?:(?:(\\S+)\\s+\\1'+c_o+'))','g'),c_r=new RegExp('\\S*'+c_o+'\\b','g'),c_s=/\b(disabled|over|active|playing)\b/,c_t={},c_u={mouseover:['over','Over'],mouseout:['','Out'],mousedown:['down','Down'],mouseup:['over','Up'],click:['over','Click'],dblclick:['over','Double Click']};c_k.c_v=c_d;c_k.c_i=function(c_w){var c_g=this;return!!(c_g.get('enabledInherited')&& !c_g.get('busyInherited')&&(c_w|| !c_g.c_x||c_g.c_y||c_g.c_z));};c_k.c_A=function(){this.c_B!=c_b&&this.isWired&&this.setNodeInnerHtml('text',this.c_B);};var c_h=c_k.c_h=function(){
var c_g=this;if(c_g.isWired){var c_C=c_g.c_C,c_D=c_g.get('enabledInherited'),c_E=c_g.get('busyInherited'),c_F=(!c_D?16:0)|(!c_g.c_j||c_E?8:0)|(c_g==c_l?4:0)|(c_g.c_j=='down'||c_g.c_x?2:0)|(c_g.c_G?1:0),c_H=c_g.c_I[c_F];if(c_H==c_b){for(var c_J= -1,c_K=c_g.c_K,c_L=c_K.length;++c_J<c_L;){var c_M=c_K[c_J];if(c_F&c_n[c_M]){c_H=c_M;break;}}c_g.c_I[c_F]=c_H;}if(c_g.c_N=='classes'){var c_O=c_C.className,c_P='';if(c_g.c_Q=='disambiguated'){var c_R=c_g.c_R;if(c_R==c_b){var c_S=c_O.match(c_q);if(c_S){c_R=c_S[c_S.length-1].split(' ',2)[0];}else{c_S=c_O.replace(c_r,'').match(/(\S+)\s*$/);if(c_S)c_R=c_S[c_S.length-1];}if(c_g.c_R=c_R=c_R||'')c_g.c_T=c_t[c_R]||(c_t[c_R]=new RegExp(c_R+'(\\s+'+c_R+c_o+')?'));}var c_U=c_H?' '+c_R+Uize.capFirstChar(c_H):'';c_P=c_R?c_O.replace(c_g.c_T,c_R+c_U):c_O.replace(c_p,'')+c_U;}else{var c_V=c_H=='grayed'?'disabled':c_H;c_P=c_s.test(c_O)?c_O.replace(c_s,c_V):c_O+(c_V?' ':'')+c_V;}if(c_P!=c_O)c_C.className=c_P;}else if(c_g.c_N=='frames'){
c_g.c_W.style.top='-'+(c_g.c_X.c_Y[c_H]*c_g.c_Z.height)+'px';}if(c_g.c_0&&Uize.Tooltip){var c_1=c_g.c_j=='over'&&c_D&& !c_g.c_x;c_1!=c_g.c_v&&Uize.Tooltip.showTooltip(c_g.c_0,c_g.c_v=c_1);}c_g.get('busyInherited')?c_e.setStyle(c_C,{cursor:'wait'}):c_e.showClickable(c_C,c_g.c_i());}};c_k.c_2=function(c_3){var c_g=this;if(c_g.isWired){var c_4=c_3.type,c_5=c_4=='click',c_i=c_g.c_i(c_4=='dblclick');if(!c_g.c_6){c_g.c_6=c_c;function c_2(c_3){c_g.c_2(c_3)}c_g.wireNode(c_g.c_C,{mouseout:c_2,mousedown:c_2,mouseup:c_2,dblclick:c_2});}if(c_5)c_3.cancelBubble=c_c;if(c_i){var c_7=c_u[c_4];c_g.set({c_j:c_7[0]});c_g.fire({name:c_7[1],domEvent:c_3});c_5&&(c_g.c_x?c_g.c_y:c_g.c_8)&&c_g.set({c_x:!c_g.c_x});}}};c_k.updateUi=function(){if(this.isWired){this.c_h();this.c_A();}};c_k.wireUi=function(){var c_g=this;if(!c_g.isWired){c_g.c_W=c_b;var c_C=c_g.c_C=c_g.getNode();if(c_C){var c_9=c_C.childNodes;if(c_9.length&&(c_9.length>1||c_9[0].nodeType!=3)&&(c_g.c_W=c_g.getNode('frames'))){c_g.c_N='frames';
c_g.c_Z=c_e.getDimensions(c_g.c_W.parentNode);}if(c_g.c_ba&&c_C.tagName=='A'&& !c_C.onclick)c_C.onclick=c_e.returnTrue;function c_2(c_3){c_g.c_2(c_3)}c_g.wireNode(c_C,{mouseover:c_2,click:c_2});c_g.c_B==c_b&&c_g.set({c_B:c_g.getNodeValue('text')});c_a.prototype.wireUi.call(c_g);}}};c_f.addChildButton=function(c_bb,c_bc){var c_g=this,c_bd;function c_be(){c_bd.wire('Click',function(c_bf){if(c_bc)typeof c_bc=='string'?c_g.fire(c_bc):c_bc(c_bf);c_g.fire(c_bf);});}if(c_g==c_f){c_bd=new c_f({idPrefix:c_bb,name:c_bb,c_ba:c_c});c_be();(window[c_bd.instanceId]=c_bd).wireUi();}else{c_bd=c_g.children[c_bb];if(!c_bd){c_bd=c_g.addChild(c_bb,c_f);c_be();}}return c_bd;};c_f.registerProperties({c_z:{name:'allowClickWhenSelected',onChange:c_h},c_8:'clickToSelect',c_y:{name:'clickToDeselect',onChange:c_h},c_Q:{name:'classNamingForStates',value:'disambiguated'},c_X:{name:'frameOrder',onChange:function(){var c_X=this.c_X;if(!c_X.c_Y){for(var c_bg= -1,c_bh=c_X.length,c_Y=c_X.c_Y={};++c_bg<c_bh;)c_Y[c_X[c_bg]]=c_bg;}},
value:['grayed','','over','active','playing']},c_ba:{name:'followLink',value:c_d},c_N:{name:'mode',value:'classes'},c_G:{name:'playing',onChange:c_h,value:c_d},c_x:{name:'selected',onChange:c_h,value:c_d},c_j:{name:'state',onChange:function(){var c_g=this;if(!c_g.c_j){if(c_l==c_g)c_l=c_b;}else if(c_g.c_j=='over'){c_l&&c_l!=c_g&&c_l.set({c_j:''});c_l=c_g;}c_g.isWired&&c_g.c_h();},value:''},c_K:{name:'statePrecedence',onChange:function(){var c_g=this,c_bi=c_g.c_K.c_bj||(c_g.c_K.c_bj=c_g.c_K.join(','));c_g.c_I=c_m[c_bi]||(c_m[c_bi]={});c_g.isWired&&c_g.c_h();},value:['playing','active','grayed','over','']},c_B:{name:'text',onChange:c_k.c_A},c_0:'tooltip'});return c_f;}});