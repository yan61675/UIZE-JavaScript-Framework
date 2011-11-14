/*
	UIZE JAVASCRIPT FRAMEWORK 2011-11-14

	http://www.uize.com/reference/Uize.Widget.Tree.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Tree',builder:function(c_a){var c_b,c_c=false;var c_d=c_a.subclass(),c_e=c_d.prototype;c_d.itemHasChildren=function(c_f){return!!(c_f&&c_f.items&&c_f.items.length);};c_d.itemIsDivider=function(c_f){return!!c_f&&c_f.title=='-'&& !c_d.itemHasChildren(c_f);};c_e.c_g=function(c_h){return(typeof c_h=='string'?c_h:this.getItemInfoFromSpecifier(c_h).itemSpecifier);};c_e.getItemFromSpecifier=function(c_h){return this.getItemInfoFromSpecifier(c_h).item;};c_e.getItemInfoFromSpecifier=function(c_h){var c_i=this,c_f,c_j=c_i.c_j,c_k=[],c_l=[],c_m=Uize.isArray(c_h),c_n=c_i.c_n,c_o=c_m?c_h:c_h.split(c_n),c_p=c_o.length;for(var c_q= -1;++c_q<c_p;){var c_r=c_o[c_q];if(c_m&&typeof c_r=='string')c_r=Uize.findRecordNo(c_j,{title:c_r});c_f=c_j[c_r];if(c_f){c_j=c_f.items;c_k.push(c_r);c_l.push(c_f.title);}else{break;}}return{item:c_f,titleParts:c_l,itemSpecifier:c_f?c_k.join(c_n):''};};c_e.setExpandedDepth=function(c_s,c_h){var c_i=this;c_i.traverseTree({itemHandler:function(c_f,c_h,c_t){
c_i.setItemExpanded(c_h,c_t<c_s);},itemSpecifier:c_h});};c_e.setItemExpanded=function(c_h,c_u){var c_f=this.getItemFromSpecifier(c_h);c_f.expanded=typeof c_u=='boolean'?c_u:c_f.expanded===c_c;};c_e.collapseAllBut=function(c_v){var c_i=this,c_n=c_i.c_n;c_v=c_i.c_g(c_v);c_i.traverseTree({itemHandler:function(c_f,c_h){c_i.setItemExpanded(c_h,!(c_v+c_n).indexOf(c_h+c_n));}});};c_e.traverseTree=function(c_w){var c_i=this,c_h=c_w.itemSpecifier,c_n=c_i.c_n,c_x=function(){},c_y=c_w.itemHandler||c_x,c_z=c_w.beforeSubItemsHandler||c_x,c_A=c_w.afterSubItemsHandler||c_x;function c_B(c_f,c_h,c_t){c_y(c_f,c_h,c_t);var c_C=c_f.items;if(c_C&&c_C.length){c_z(c_f,c_h,c_t);c_D(c_C,c_h+c_n,c_t+1);c_A(c_f,c_h,c_t);}}function c_D(c_j,c_E,c_t){for(var c_F= -1,c_G=c_j.length;++c_F<c_G;)c_B(c_j[c_F],c_E+c_F,c_t);}if(c_h){c_h=c_i.c_g(c_h);c_B(c_i.getItemFromSpecifier(c_h),c_h,0);}else{c_D(c_i.c_j,'',0);}};c_d.registerProperties({c_n:{name:'itemDelimiter',value:'x'},c_j:{name:'items',value:[],onChange:function(){var c_i=this;
if(c_i.isWired){c_i.removeUi();c_i.insertUi();}}},c_H:{name:'value',value:[]}});c_d.set({built:c_c});return c_d;}});