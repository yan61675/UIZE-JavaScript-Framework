/*
	UIZE JAVASCRIPT FRAMEWORK 2011-11-14

	http://www.uize.com/reference/Uize.Widget.Calculator.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Calculator',required:['Uize.Widget.Button','Uize.Widget.TextInput','Uize.Node.Event'],builder:function(c_a){var c_b=true,c_c=false,c_d;var c_e={divide:1,multiply:1,subtract:1,add:1},c_f={negate:1,percent:1,squareRoot:1},c_g=Uize.copyInto({memoryPlus:1,memoryMinus:1},c_f,c_e),c_h={0:'digit0',1:'digit1',2:'digit2',3:'digit3',4:'digit4',5:'digit5',6:'digit6',7:'digit7',8:'digit8',9:'digit9','.':'point','/':'divide','*':'multiply','-':'subtract','+':'add','=':'equals',' ':'clear','%':'percent',m:'memoryPlus'},c_i={digit0:'0',digit1:'1',digit2:'2',digit3:'3',digit4:'4',digit5:'5',digit6:'6',digit7:'7',digit8:'8',digit9:'9',point:'.'},c_j='`~!@#$^&()_{}[]\\|:;"\'<,>?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';var c_k={enabled:'inherit'},c_l={enabled:false};function c_m(c_n){return c_n?c_k:c_l}var c_o=c_a.subclass(null,function(){var c_p=this;function c_q(){var c_r=c_p.c_s()? +c_t:c_d;c_p.set(c_p.c_u,c_r);c_p.set({c_r:c_r});}
var c_t=c_p.addChild('entry',Uize.Widget.TextInput,{value:c_p.c_r});function c_v(){if(c_p.c_w){c_p.c_w.set({state:''});c_p.c_w=c_d;}}function c_x(c_y){c_v();var c_z=c_y.domEvent,c_A=Uize.Node.Event.isKeyEscape(c_z),c_B=c_A?' ':Uize.Node.Event.isKeyEnter(c_z)?'=':String.fromCharCode(Uize.Node.Event.charCode(c_z));if(c_B){var c_C=c_h[c_B];if(c_C){var c_D=c_p.children[c_C];if(c_D.get('enabledInherited')){(c_p.c_w=c_D).set({state:'down'});if(!c_A&&(!c_i[c_C]||c_E())){c_D.fire({name:'Click',domEvent:c_z});c_y.abort=c_b;}}else{c_y.abort=c_b;}}else if(c_j.indexOf(c_B)> -1){c_y.abort=c_b;}}}c_t.wire({'Changed.value':function(){c_q();c_p.c_F();},'Key Press':c_x,'Key Up':c_v});function c_G(c_r){c_t.set({value:isNaN(c_r)?'ERROR':(c_r+'')||'0'});c_q();}function c_H(c_C,c_I){return Uize.Widget.Button.addChildButton.call(c_p,c_C,function(c_y){c_I(c_y);c_t.focus();});}function c_J(){c_p.set({c_J:c_b})}function c_E(){var c_K=c_t+'';return(c_p.c_J|| !c_p.c_s()||c_K=='0'||c_K=='-0');}function c_L(c_y){var
 c_M=c_i[c_y.source.get('name')],c_K=c_t+'',c_N=c_E()?(c_K=='-0'?'-':''):c_K;c_p.c_u=='operandA'&&c_p.c_J&&c_p.set({operator:c_d});c_p.set({c_J:c_c});c_G((c_N||(c_M=='.'?'0':''))+c_M);}for(var c_O in c_i)c_H(c_O,c_L);function c_P(){var c_Q,c_R=c_p.c_R,c_S=c_p.c_S;c_S==c_d&&c_p.set({c_S:c_S=c_R});switch(c_p.c_T){case'divide':c_Q=c_R/c_S;break;case'multiply':c_Q=c_R*c_S;break;case'subtract':c_Q=c_R-c_S;break;case'add':c_Q=c_R+c_S;break;}c_p.set({c_u:'operandA',c_R:c_Q});c_G(c_Q);c_J();}function c_U(){!c_p.c_J&&c_p.c_T&&c_P();}var c_V=c_H('equals',c_P);function c_W(c_X){c_p.c_u=='operandB'&&c_p.c_T&&c_P();c_p.set({c_Y:(c_p.c_Y||0)+c_t*c_X});c_J();}c_H('memoryPlus',function(){c_W(1)});c_H('memoryMinus',function(){c_W(-1)});c_H('memoryRecall',function(){c_G(c_p.c_Y);c_J();});c_H('memoryClear',function(){c_p.set({c_Y:c_d});c_J();});function c_Z(){if(c_p.c_T?c_p.c_J&&c_p.c_S==c_d: !c_p.c_R){c_p.set({c_J:c_c});c_G('-0');return c_b;}}function c_0(c_y){var c_C=c_y.source.get('name');if(c_C!='subtract'|| !c_Z()){c_U();
c_p.set({c_T:c_d});c_p.set({c_T:c_C});}}for(var c_C in c_e)c_H(c_C,c_0);c_H('negate',function(){if(!c_Z()){var c_K=c_t+'';c_G(c_K.indexOf('-')> -1?c_K.replace('-',''):'-'+c_K);}});c_H('percent',function(){var c_T=c_p.c_T,c_K=c_t/100;c_T&&c_p.c_u=='operandA'&&c_p.set({c_T:c_T=c_d});if(c_T=='subtract'||c_T=='add'){c_K=c_T=='subtract'?1-c_K:1+c_K;c_G(c_p.c_R);c_p.set({c_T:'multiply'});}c_G(c_K);c_T?c_P():c_p.set({c_T:'multiply'});});c_H('squareRoot',function(){c_G(Math.sqrt(+c_t));c_J();});function c_1(){c_G(0)}function c_2(){c_1();c_p.set({c_R:0,c_S:c_d,c_T:c_d});}c_H('clearEntry',c_1);c_H('clear',c_2);c_t.wire('Cancel',c_2);c_p.c_3=c_b;c_p.c_4();c_p.c_F();}),c_5=c_o.prototype;c_5.c_s=function(){return!isNaN((this.children.entry+'')||'?');};c_5.c_4=function(){var c_p=this;if(c_p.c_3){var c_6=c_m(c_p.c_Y!=c_d);c_p.children.memoryRecall.set(c_6);c_p.children.memoryClear.set(c_6);}};c_5.c_7=function(){var c_p=this;c_p.c_3&&c_p.children.point.set(c_m(c_p.c_J||(c_p.children.entry+'').indexOf('.')== -1));};
c_5.c_8=function(){var c_p=this;c_p.c_3&&c_p.children.equals.set(c_m(c_p.c_T&&c_p.c_s()));};c_5.c_F=function(){var c_p=this;if(c_p.c_3){var c_9=c_p.children,c_6=c_m(c_p.c_s());for(var c_C in c_g)c_9[c_C].set(c_6);}c_p.c_7();c_p.c_8();};c_5.wireUi=function(){var c_p=this;if(!c_p.isWired){c_p.wireNode('','click',function(){c_p.children.entry.focus()});c_a.prototype.wireUi.call(c_p);}};function c_ba(c_r){return isNaN(c_r)?c_d: +c_r}c_o.registerProperties({c_u:{name:'activeOperand',value:'operandA'},c_J:{name:'clearOnNextDigit',onChange:c_5.c_7},c_Y:{name:'memory',onChange:c_5.c_4},c_R:{name:'operandA',conformer:c_ba},c_S:{name:'operandB',conformer:c_ba},c_T:{name:'operator',onChange:[function(){var c_p=this;c_p.set({c_S:c_d,c_u:'operand'+(c_p.c_T?'B':'A')});c_p.c_T&&c_p.set({c_J:c_b});},c_5.c_8]},c_r:{name:'value',conformer:c_ba,onChange:function(){this.set(this.c_u,this.c_r)},value:0}});return c_o;}});