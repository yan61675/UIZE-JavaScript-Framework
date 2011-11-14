/*
	UIZE Web Site 2011-11-14

	http://www.uize.com/reference/UizeDotCom.Templates.ParamsTable.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Templates.ParamsTable',builder:function(){var _a=function(){};_a.process=function(input){var output=[];var params=input.params,idPrefix=input.idPrefix;output.push('\r\n<table id="',idPrefix,'" class="paramsTable">');for(var paramName in params){output.push('\r\n	<tr>\r\n		<td class="fieldLabel">',paramName,'</td>\r\n		<td class="field">');var paramType=params[paramName],paramId=idPrefix+'_'+paramName;if(paramType=='boolean'){output.push('\r\n			<input id="',paramId,'" type="checkbox"/>');}else if(Uize.isArray(paramType)){output.push('\r\n			<select id="',paramId,'">');for(var optionNo= -1,totalOptions=paramType.length;++optionNo<totalOptions;){var value=paramType[optionNo];output.push('\r\n				<option value="',value,'">',value,'</option>');}output.push('\r\n			</select>');}else if(typeof paramType=='object'){output.push('\r\n			<input id="',paramId,'" type="text" style="width:50px;"/> (',paramType.minValue,'-',paramType.maxValue,')');}else if(paramType=='string-multiline'){
output.push('\r\n			<textarea id="',paramId,'"/ wrap="off"></textarea>');}else{output.push('\r\n			<input id="',paramId,'" type="text"/>');}output.push('\r\n		</td>\r\n	</tr>');}output.push('\r\n</table>\r\n');return output.join('');};_a.input={params:'object',idPrefix:'string'};return _a;}});