/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Build.Util Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2012-2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 4
	codeCompleteness: 100
	docCompleteness: 2
*/

/*?
	Introduction
		The =UizeSite.Build.Util= package provides various utility methods to facilitate building of pages for the UIZE Web site.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'UizeSite.Build.Util',
	required:[
		'Uize.Url',
		'Uize.String',
		'Uize.Services.FileSystem'
	],
	builder:function () {
		'use strict';

		/*** General Variables ***/
			var
				_fileSystem = Uize.Services.FileSystem.singleton (),
				_widgetClassSuffixRegExp = /\.Widget$/
			;

		return {
			getIndexableFiles:function (_sourcePath,_indexableFolderUnderSource,_indexableFileExtensionRegExp) {
				return _fileSystem.getFiles ({
					path:_sourcePath + '/' + _indexableFolderUnderSource,
					pathMatcher:function (_filePath) {
						return (
							_indexableFileExtensionRegExp.test (_filePath) &&
							!Uize.String.startsWith (Uize.Url.from (_filePath).fileName,'~')
						);
					}
				});
			},

			visualTestsModuleNameFromWidgetClass:function (_widgetClass) {
				return (
					_widgetClassSuffixRegExp.test (_widgetClass)
						? _widgetClass.replace (_widgetClassSuffixRegExp,'.VisualTests')
						: ''
				);
			},

			visualSamplerModuleNameFromWidgetClass:function (_widgetClass) {
				return (
					_widgetClassSuffixRegExp.test (_widgetClass)
						? _widgetClass.replace (_widgetClassSuffixRegExp,'.VisualSampler')
						: ''
				);
			}
		};
	}
});

