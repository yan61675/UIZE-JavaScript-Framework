/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Data Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2005-2011 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*ScruncherSettings Mappings="=" LineCompacting="TRUE"*/

/* Module Meta Data
	type: Package
	importance: 7
	codeCompleteness: 100
	testCompleteness: 100
	docCompleteness: 90
*/

/*?
	Introduction
		The =Uize.Data= module provides methods for working with data, including comparing complex data structures, finding records, getting keys and values, etc.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Data',
	builder:function () {
		/*** Variables for Scruncher Optimization ***/
			var
				_package = function () {},
				_string = 'string',
				_true = true,
				_false = false,
				_null = null,
				_undefined,
				_Uize_totalKeys = Uize.totalKeys
			;

		/*** Global Variables ***/
			var _sacredEmptyObject = {};

		/*** Public Static Methods ***/
			_package.getColumn = function (_rows,_columnName,_onlyUniques) {
				var _result = [];
				if (_rows) {
					var _uniqueValuesMap = _onlyUniques ? {} : _null;
					for (var _rowNo = -1, _rowsLength = _rows.length; ++_rowNo < _rowsLength;) {
						var _columnValueForRow = _rows [_rowNo] [_columnName];
						if (
							!_onlyUniques ||
							(!_uniqueValuesMap [_columnValueForRow] && (_uniqueValuesMap [_columnValueForRow] = 1))
						)
							_result.push (_columnValueForRow)
						;
					}
				}
				return _result;
				/*?
					Static Methods
						Uize.Data.getColumn
							Returns an array of the values for the specified column of the specified record set.

							SYNTAX
							..................................................................
							columnValuesARRAY = Uize.Data.getColumn (rowsARRAY,columnNameSTR);
							..................................................................

							EXAMPLE
							.........................................................
							var
								peopleNames = [
									{first:'John',last:'Wilkey'},
									{first:'Marie',last:'Stevenson'},
									{first:'Craig',last:'Pollack'}
								],
								firstNames = Uize.Data.getColumn (peopleNames,'first'),
								lastNames = Uize.Data.getColumn (peopleNames,'last')
							;
							.........................................................

							In the above example, the variable =firstNames= would be an array with the value =['John','Marie','Craig']= and the variable =lastNames= would be an array with the value =['Wilkey','Stevenson','Pollack']=.

							The records / rows in the record set do not need to be objects - they can also be arrays.

							EXAMPLE
							....................................................
							var
								peopleNames = [
									['John','Wilkey'],
									['Marie','Stevenson'],
									['Craig','Pollack']
								],
								firstNames = Uize.Data.getColumn (peopleNames,0),
								lastNames = Uize.Data.getColumn (peopleNames,1)
							;
							....................................................

							In the above example, the =firstNames= and =lastNames= variables would have the same values as in the previous example.

							VARIATION
							..................................................................................
							columnValuesARRAY = Uize.Data.getColumn (rowsARRAY,columnNameSTR,onlyUniquesBOOL);
							..................................................................................

							When the value =true= is specified for the optional =onlyUniquesBOOL= parameter, then this method will only return the unique values for the specified column.

							EXAMPLE
							......................................................................
							var
								employees = [
									{firstName:'John',lastName:'Wilkey',department:'engineering'},
									{firstName:'Marie',lastName:'Stevenson',department:'finance'},
									{firstName:'Craig',lastName:'Pollack',department:'finance'},
									{firstName:'Nick',lastName:'Arendsen',department:'engineering'},
									{firstName:'Mark',lastName:'Strathley',department:'engineering'}
								],
								departments = Uize.Data.getColumn (employees,'department',true)
							;
							......................................................................

							In the above example, the variable =departments= would be an array with the value =['engineering','finance']=.
				*/
			};

			_package.findRecords = function (_records,_match) {
				var _matchingRecords = [];
				if (_records) {
					for (var _recordNo = -1, _recordsLength = _records.length, _record; ++_recordNo < _recordsLength;)
						Uize.recordMatches (_record = _records [_recordNo],_match) && _matchingRecords.push (_record)
					;
				}
				return _matchingRecords;
				/*?
					Static Methods
						Uize.Data.findRecords
							Returns an array of records from the specified record set that match the specified criteria.

							SYNTAX
							.....................................................................
							matchingRecordsARRAY = Uize.Data.findRecords (recordsARRAY,matchOBJ);
							.....................................................................

							EXAMPLE
							..............................................................................
							var
								employees = [
									{firstName:'John',lastName:'Wilkey',department:'engineering'},
									{firstName:'Marie',lastName:'Stevenson',department:'finance'},
									{firstName:'Craig',lastName:'Pollack',department:'finance'},
									{firstName:'Nick',lastName:'Arendsen',department:'engineering'},
									{firstName:'Mark',lastName:'Strathley',department:'engineering'}
								],
								financeEmployees = Uize.Data.findRecords (employees,{department:'finance'})
							;
							..............................................................................

							In the above example, the variable =financeEmployees= would be an array with the value...

							.................................................................
							[
								{firstName:'Marie',lastName:'Stevenson',department:'finance'},
								{firstName:'Craig',lastName:'Pollack',department:'finance'}
							]
							.................................................................

							If the records in your record set are arrays, rather than objects, then you can specify a match object where the keys are numerical indexes representing the array element index / column index, as in...

							EXAMPLE
							.....................................................................
							var
								employees = [
									['John','Wilkey','engineering'],
									['Marie','Stevenson','finance'],
									['Craig','Pollack','finance'],
									['Nick','Arendsen','engineering'],
									['Mark','Strathley','engineering']
								],
								financeEmployees = Uize.Data.findRecords (employees,{2:'finance'})
							;
							.....................................................................

							In the above example, the =financeEmployees= variable would have the same value as in the previous example.

							NOTES
							- see also the =Uize.findRecord=, =Uize.findRecordNo=, and =Uize.recordMatches= static methods of the =Uize= base class
				*/
			};

			_package.filter = function (_object,_propertyNames) {
				var
					_this = this,
					_result = {}
				;
				if (_object && _propertyNames) {
					for (
						var _propertyNameNo = -1, _propertyNamesLength = _propertyNames.length;
						++_propertyNameNo < _propertyNamesLength;
					) {
						var _propertyName = _propertyNames [_propertyNameNo];
						if (_propertyName in _object)
							_result [_propertyName] = _object [_propertyName]
						;
					}
				}
				return _result;
				/*?
					Static Methods
						Uize.Data.filter
							Returns an object with only the properties of the source object that are specified by an array of property names.

							SYNTAX
							....................................................................
							filteredOBJ = Uize.Data.filter (sourceObjectOBJ,propertyNamesARRAY);
							....................................................................

							This method can be useful when receiving an info package of which only a subset needs to be stored or passed on to a subsequent process.

							EXAMPLE
							...................................................................................
							var someNodeStyle = {
								color:'#fff',
								left:'10px',
								top:'-50px',
								position:'absolute',
								display:'none',
								width:'200px',
								height:'300px',
								overflow:'hidden'
							};
							Uize.Node.setStyle (
								'someOtherNode',Uize.Data.filter (someNodeStyle,['left','top','width','height'])
							);
							...................................................................................

							In this example, a node style object that is being used for some node is being filtered for just its dimensions and positioning properties, to then be applied to some other node.

							Without this method, the =setStyle= method call would look like...
							.................................
							Uize.Node.setStyle (
								'someOtherNode',
								{
									left:someNodeStyle.left,
									top:someNodeStyle.top,
									width:someNodeStyle.width,
									height:someNodeStyle.height
								}
							);
							.................................
				*/
			};

			_package.identical = function (_object1,_object2,_options) {
				if (!_options) _options = _sacredEmptyObject;
				var
					_equality = _options.equality,
					_equalityLoose = _equality == 'loose',
					_equalityStrict = !_equalityLoose && _equality != 'type',
					_allowConjoined = _options.allowConjoined !== _false
				;
				function _areIdentical (_object1,_object2) {
					var
						_identical,
						_typeofObject1 = typeof _object1,
						_typesMatch = _typeofObject1 == typeof _object2,
						_object1IsObject = _typeofObject1 == 'object'
					;
					function _compareObjectsForIdentical () {
						if (_identical = _Uize_totalKeys (_object1) == _Uize_totalKeys (_object2)) {
							for (var _propertyName in _object1) {
								if (
									!(_propertyName in _object2) ||
									!_areIdentical (_object1 [_propertyName],_object2 [_propertyName])
								) {
									_identical = _false;
									break;
								}
							}
						}
					}
					if (_typesMatch && _object1IsObject && _object1 && _object2) {
						var _object1Constructor = _object1.constructor;
						if (_object1 == _object2) {
							_identical = _allowConjoined;
						} else if (_identical = _object1Constructor == _object2.constructor) {
							if (
								_object1Constructor == Date ||
								_object1Constructor == String ||
								_object1Constructor == Number ||
								_object1Constructor == Boolean ||
								_object1Constructor == RegExp
							) {
								_identical = _object1 + '' == _object2 + '';
								/* NOTE:
									Coercion to string invokes valueOf or toString, depending on the object type (toString for RegExp), which covers Date, String, Number, Boolean, and RegExp. Calling valueOf, while more performant for some object types, doesn't cover the case for RegExp (since valueOf returns a reference to the object), and it doesn't cover the case of two Number instances with the value NaN, since valueOf would return NaN and NaN is not equal to NaN (whereas, 'NaN' is equal to 'NaN')
								*/
							} else {
								if (typeof _object1.splice == 'function' && typeof _object2.splice == 'function') {
									/* NOTES:
										To compare arrays for their contents being identical, we first test that their lengths are the same. If this test passes, we use a standard iterator to iterate through the arrays to compare their elements.

										If the values of elements are identical between the arrays, then we go on to test the custom properties (if any exist). Most importantly, we don't use a for...in loop to iterate through both elements and custom properties, partly for performance reasons, but mostly because of an unfortunate behavior in Microsoft's JScript interpreter.

										In several versions of Microsoft's JScript interpreter, if an array is initialized using the literal syntax (ie. ['value 1','value 2','value 3']), then any element whose value is initialized to undefined will not be encountered in a for...in loop.

										EXAMPLE
										.....................................
										var
											keysHash = {},
											myArray = ['foo',undefined,'bar']
										;
										for (key in myArray) {
											keysHash [key] = true;
										}
										alert (keysHash [1]);
										.....................................

										In the above example, the alert statement would alert the value undefined in interpreters that exhibit the problematic behavior.

										This behavior would cause a problem if we were using a for...in loop to compare arrays for identical elements and custom properties. So, instead, we compare elements and custom properties separately. In order to compare only custom properties, we splice out the elements of the arrays so we can do a for...in loop to compare the custom properties without encountering the array elements in the loop. After we've compared custom properties, we then restore the spliced elements.
									*/
									if (_identical = _object1.length == _object2.length) {
										for (var _elementNo = _object1.length; --_elementNo >= 0;) {
											if (!_areIdentical (_object1 [_elementNo],_object2 [_elementNo])) {
												_identical = _false;
												break;
											}
										}
										if (_identical) {
											/*** remove array elements and store ***/
												var
													_object1Elements = _object1.splice (0,Infinity),
													_object2Elements = _object2.splice (0,Infinity)
												;

											_compareObjectsForIdentical ();

											/*** restore removed elements to arrays ***/
												_object1.push.apply (_object1,_object1Elements);
												_object2.push.apply (_object2,_object2Elements);
										}
									}
								} else {
									_compareObjectsForIdentical ();
								}
							}
						}
					} else {
						_identical =
							(
								_equalityLoose
									? _object1 == _object2
									: (
										_typesMatch &&
										(_equalityStrict ? _object1 === _object2 : (!_object1IsObject || !_object1 == !_object2))
									)
							) ||
							(_typesMatch && _typeofObject1 == 'number' && isNaN (_object1) && isNaN (_object2))
						;
					}
					return _identical;
				}
				return _areIdentical (_object1,_object2);
				/*?
					Static Methods
						Uize.Data.identical
							Returns a boolean, indicating whether or not the two specified objects are identical in their contents.

							SYNTAX
							...............................................................
							areIdenticalBOOL = Uize.Data.identical (object1OBJ,object2OBJ);
							...............................................................

							This method recurses through the two objects specified by the =object1OBJ= and =object2OBJ= parameters, testing that they have the same structure and property values. The two parameters can be arbitrarily complex data trees, or simple type values (ie. string, number, boolean). In order to be considered identical, the two objects must have the same structure and the same values at all levels of their structure.

							VARIATION
							..........................................................................
							areIdenticalBOOL = Uize.Data.identical (object1OBJ,object2OBJ,optionsOBJ);
							..........................................................................

							When the optional =optionsOBJ= parameter is specified, comparison options can be specified to determine the criteria this method uses when comparing the two objects.

							optionsOBJ
								An object, with multiple optional properties, specifying the criteria this method should use when comparing the two objects.

								The value of the =optionsOBJ= parameter should be an object of the form...

								...............................................................................
								{
									equality : equalitySTR,             // 'type' | 'loose' | 'strict' (default)
									allowConjoined : allowConjoinedBOOL // false | true (default)
								}
								...............................................................................

								equality
									A string, specifying how the values of properties at any level of the objects' structure should be tested for equality.

									The optional =equality= property of the =optionsOBJ= parameter can have the following values...

									- ='type'= - When the value ='type'= is specified, the values of properties do not need to be equal - only be of the same type. This setting is useful when merely trying to determine if two objects have the same structure, but not that their values match. This could be used to determine if an object being interrogated conforms to some reference structure that might indicate the type of data it contains, but where the specific values are not important.

									- ='loose'= - When the value ='loose'= is specified, then the values of all properties must be equal only according to a loose equality comparison, where strict type matching is not performed. According to this setting, the number value =1= would equal the string value ='1'=, or the number value =0= would equal the string value =''= (empty string) and the boolean value =false=.

									- ='strict'= - When the value ='strict'= is specified (or when no value is specified for the =equality= property, or when no =optionsOBJ= parameter is specified), then the values of all properties must be equal according to a strict equality comparison, where strict type matching is performed. According to this setting, the number value =1= would *NOT* equal the string value ='1'=, the number value =0= would *NOT* equal the string value =''= (empty string), and so on.

								allowConjoined
									A boolean, specifying whether or not the two objects being compared may reference the same shared sub-object at any level of their structure.

									By default (when no value is specified for the =allowConjoined= property, or when no =optionsOBJ= parameter is specified), two objects being compared will be considered identical even if they are conjoined and reference the same shared sub-object at some level of their structure. Therefore, the statement =Uize.Data.identical (myObjectOBJ,myObjectOBJ)= will return the value =true=.

									Specifying the value =false= for this property will require that object references at any level of the structure of the two objects being compared are unique to each object. So, the statement =Uize.Data.identical (myObjectOBJ,myObjectOBJ,{allowConjoined:false})= would produce the result =false=.

									IMPORTANT
									It should be noted that the two objects being compared could still have references to shared objects at different levels in their structure. To reliably test that two objects are identical and yet completely discrete, one can use the =Uize.Data.clones= static method.

							NOTES
							- see also the =Uize.Data.clones= and =Uize.Data.conjoined= static methods
				*/
			};

			_package.conjoined = function (_object1,_object2) {
				function _getObjectReferences (_object) {
					var _objRefs = [];
					function _accumulateObjRefs (_object) {
						if (typeof _object == 'object') {
							if (!Uize.isIn (_objRefs,_object)) {
								_objRefs.push (_object);
								for (var _propertyName in _object)
									_accumulateObjRefs (_object [_propertyName])
								;
							}
						}
					}
					_accumulateObjRefs (_object);
					return _objRefs;
				}
				var
					_conjoined = _false,
					_object1ObjRefs = _getObjectReferences (_object1),
					_object1ObjRefsLength = _object1ObjRefs.length,
					_object2ObjRefs = _getObjectReferences (_object2)
				;
				for (var _object1ObjRefNo = -1; ++_object1ObjRefNo < _object1ObjRefsLength && !_conjoined;)
					_conjoined = Uize.isIn (_object2ObjRefs,_object1ObjRefs [_object1ObjRefNo])
				;
				return _conjoined;
				/*?
					Static Methods
						Uize.Data.conjoined
							Returns a boolean, indicating whether or not the two specified objects share any object references.

							SYNTAX
							...............................................................
							areConjoinedBOOL = Uize.Data.conjoined (object1OBJ,object2OBJ);
							...............................................................

							NOTES
							- =Uize.Data.conjoined (myObjectOBJ,myObjectOBJ)= will return =true=, since they are one and the same (ie. conjoined at the root).
				*/
			};

			_package.clones = function (_object1,_object2) {
				return (
					_package.identical (_object1,_object2,{allowConjoined:_false}) &&
					!_package.conjoined (_object1,_object2)
				);
				/*?
					Static Methods
						Uize.Data.clones
							Returns a boolean, indicating whether or not the two specified objects are identical clones of one another.

							SYNTAX
							.........................................................
							areClonesBOOL = Uize.Data.clones (object1OBJ,object2OBJ);
							.........................................................

							Identical clones have identical structure, possess all the same values for corresponding simple valued properties, but may not share objects (so, object type properties' values may not be shared, either at a corresponding place in their structure, or at different places in their structure).

							NOTES
							- =Uize.Data.clones (myObjectOBJ,myObjectOBJ)= will return =false=, since they are one and the same and not clones.
				*/
			};

			_package.intersection = function (_object1,_object2) {
				var _result = {};
				if (_object1 && _object2) {
					for (var _propertyName in _object1) {
						var _propertyValue = _object1 [_propertyName];
						if (_object2 [_propertyName] === _propertyValue)
							_result [_propertyName] = _propertyValue
						;
					}
				}
				return _result;
				/*?
					Static Methods
						Uize.Data.intersection
							Returns an object that represents the key-value intersection / commonality between the two specified objects.

							SYNTAX
							.................................................................
							intersectionOBJ = Uize.Data.intersection (object1OBJ,object2OBJ);
							.................................................................

							EXAMPLE
							..................................................................
							var
								employee1 = {
									firstName:'John',
									lastName:'Wilkey',
									startYear:'2008',
									department:'engineering'
								},
								employee2 = {
									firstName:'John',
									lastName:'Henderson',
									startYear:'2008',
									department:'finance'
								},
								employeeInCommon = Uize.Data.intersection (employee1,employee2)
							;
							..................................................................

							In the above example, the variable =employeeInCommon= would have the value ={firstName:'John',startYear:'2008'}=.
				*/
			};

			_package.map = function (_mapper,_source,_target) {
				if (typeof _source == 'number') {
					_source = new Array (_source);
					if (typeof _target != 'object') _target = _source;
				}
				var _sourceIsArray = Uize.isArray (_source);
				if (typeof _target != 'object')
					_target = _target === _false ? _source : _sourceIsArray ? [] : {}
				;
				if (typeof _mapper == _string)
					_mapper = new Function ('value','key','return ' + _mapper)
				;
				function _callMapper (_key) {
					var _mappedValue = _mapper.call (_source,_source [_key],_key);
					if (_target) _target [_key] = _mappedValue;
				}
				if (_sourceIsArray) {
					for (var _elementNo = -1, _sourceLength = _source.length; ++_elementNo < _sourceLength;)
						_callMapper (_elementNo)
					;
				} else {
					for (var _key in _source) _callMapper (_key);
				}
				return _target;
				/*?
					Static Methods
						Uize.Data.map
							Iterates through the specified array (or object), executing the specified mapper expression or function for each element (or object property), and packages the results into an array (or object).

							SYNTAX
							.........................................................................
							mappedARRAYorOBJ = Uize.Data.map (mapperSTRorFUNC,sourceARRAYorOBJorINT);
							.........................................................................

							The =Uize.Data.map= method is very vertatile and can be used to accomplish a wide array of different tasks. Sure, you could do all the things you could do with =Uize.Data.map= by writing your own loops. This method serves as a convenience, making certain operations more concise in application code.

							The example below - which takes a source array of strings and produces a new array of those strings uppercased - illustrates the difference between writing your own iterator and using the =Uize.Data.map= method.

							INSTEAD OF...
							.............................................................
							var newArray = [];
							for (var elementNo = -1; ++elementNo < sourceArray.length;) {
								newArray.push (sourceArray [elementNo].toUpperCase ());
							}
							.............................................................

							USE...
							..................................................................
							var newArray = Uize.Data.map ('value.toUpperCase ()',sourceArray);
							..................................................................

							OR USING A FUNCTION...
							.............................................................
							var newArray = Uize.Data.map (
								function (value) {return value.toUpperCase ()},sourceArray
							);
							.............................................................

							Another example below - which generates an array seeded with the values 0 to 99 - further illustrates the convenience of the =Uize.Data.map= method...

							INSTEAD OF...
							..............................................
							var newArray = [];
							for (var elementNo = -1; ++elementNo < 100;) {
								newArray.push (elementNo);
							}
							..............................................

							USE...
							.........................................
							var newArray = Uize.Data.map ('key',100);
							.........................................

							OR USING A FUNCTION...
							.....................................................................
							var newArray = Uize.Data.map (function (value,key) {return key},100);
							.....................................................................

							Key Benefits
								The =Uize.Data.map= static method provides some key improvements over the =Array= object's map method in JavaScript 1.6 (which is not supported in all browsers)...

								- can operate on objects as well as arrays
								- supports a more concise mapper expression string, as well as supporting a function
								- can optionally modify the source array or object
								- allows easy creation of a fresh source array for mapping, by specifying an array length
								- lets you specify an explicit target, where mapped values should be written

							VARIATION
							..................................
							mappedARRAYorOBJ = Uize.Data.map (
								mapperSTRorFUNC,
								sourceARRAYorOBJorINT,
								targetARRAYorOBJorBOOL
							);
							..................................

							By default, the =Uize.Data.map= method maps values of the source array or object and packages the result into a new array or object. Specifying the optional =targetARRAYorOBJorBOOL= parameter allows you to explicitly specify a target for the operation, into which the mapped values will be packaged.

							Parameters
								mapperSTRorFUNC
									Lets you specify a mapper expression or function, for mapping the value of the current element of the source array or the current property of the source object to a new value.

									VALUES

									- When a *string* value is specified, then the JavaScript expression specified in the string will be compiled to a mapper function that will then be used for each iteration. An expression specified for this parameter must be a complete JavaScript expression (it may not be arbitrary, multi-statement chunks of code) following the same requirements of any expression that you might place on the right-hand side of an assignment statement. Within the context of your expression, the identifiers =this=, =key=, and =value= are defined, where =this= is a reference to the source array or object, =key= is the index of the current element of the source array or the name of the current property of the source object, and where =value= is the value of the current element of the source array or the current property of the source object.

									- When a *function* reference is specified, then the specified function will be called during each iteration. The function you specify should expect to receive two parameters: =value= and =key=. If you don't care about the key, then you can omit the second parameter and only have one parameter declared in your function's argument list. The mapper function is called as an instance method on the source array or object, so the =this= keyword can be used to access the source array or object for querying the values of other elements or properties.

								sourceARRAYorOBJorINT
									Lets you specify the source array or object, or the length of a fresh array, with which the =Uize.Data.map= method should map new values.

									VALUES

									- When an *array* is specified, then the =Uize.Data.map= method will iterate through the elements of the array.

									- When an *object* is specified, then the =Uize.Data.map= method will iterate through the properties of the object.

									- When a *positive integer* is specified, then the =Uize.Data.map= method will create a fresh array of the length specified by this parameter and then iterate through that array. This is a convenient facility for seeding arrays of some desired length with automatically generated values.

								targetARRAYorOBJorBOOL
									Lets you specify where the result of the mapper should be packaged.

									You can provide your own target array or object, you can specify to use the source array or object, or you can specify that the result should not be packaged (ie. discarded).

									VALUES

									- =true= - When the *boolean* value =true= is specified (the default value for the =targetARRAYorOBJorBOOL= parameter if it is omitted), then the =Uize.Data.map= method will package the result from the mapper into a new array or object.

									- =false= - When the *boolean* value =false= is specified (not the same as not specifying a value), then the =Uize.Data.map= method will package the result from the mapper into the source array or object specified by the =sourceARRAYorOBJorINT= parameter (ie. won't use a different target).

									- =null= - When the special value =null= is specified (not the same as not specifying a value), then the =Uize.Data.map= method will not package the result from the mapper into an array or object. This is useful if you just want to use this method as an iterator, without the memory expense of building an array or object.

									- *object or array* - When an *object* or *array* is explicitly specified, then the =Uize.Data.map= method will package the result from the mapper into that array or object. This is convenient if you already have an array or object into which you wish to package the mapped values, or if you want to repeatedly map multiple source arrays or objects into a common array or object so that the mapped values are merged together. Incidentally, specifying the array or object value of the =sourceARRAYorOBJorINT= parameter as the value for the =targetARRAYorOBJorBOOL= parameter has the same effect as specifying the value =false= for this parameter (ie. use the source as the target, don't use a different target).

							More Examples
								Following are a bunch of examples, demonstrating just a sampling of what's possible using the =Uize.Data.map= method...

								Coerce all elements of an array to being numbers, modifying the source array...
									.....................................
									Uize.Data.map ('+value',array,false);
									.....................................

								Coerce all elements of an array to being strings, modifying the source array...
									.........................................
									Uize.Data.map ('value + ""',array,false);
									.........................................

								Default all empty string properties of an object to some value, modifying the source object...
									..............................................................................
									Uize.Data.map ('value || "--- no answer provided ---"',surveyQuestions,false);
									..............................................................................

								Return an array of all the elements in the source array uppercased...
									..............................................................
									var uppercased = Uize.Data.map ('value.toUpperCase ()',array);
									..............................................................

								Add a prefix to all the string elements of an array, modifying the source array...
									................................................
									Uize.Data.map ('"prefix_" + value',array,false);
									................................................

								Create a cheap (ie. not deep) copy of an object...
									............................................
									var copyOfFoo = Uize.Data.map ('value',foo);
									............................................

								Seed an array of 100 elements with the value range 0 to 99...
									...........................................
									var range0to99 = Uize.Data.map ('key',100);
									...........................................

								Seed an array of 100 elements with the value range 1 to 100...
									................................................
									var range1to100 = Uize.Data.map ('key + 1',100);
									................................................

								Create an array of the square roots of 0 to 99...
									...........................................................
									var squaresOf0to99 = Uize.Data.map ('Math.sqrt (key)',100);
									...........................................................

								Create an array of the square roots of the values in the source array...
									.....................................................
									var squaresOfArray = Uize.Data.map (Math.sqrt,array);
									.....................................................

								Create an array of all the capital letters of the alphabet...
									.....................................................................
									var capLetters = Uize.Data.map ('String.fromCharCode (65 + key)',26);
									.....................................................................

								Create a fresh array of 10 elements that are the first ten powers of 2...
									......................................................
									var powersOf2 = Uize.Data.map ('Math.pow (2,key)',10);
									......................................................

								Creates an array of the first 30 numbers in the Fibonacci series...
									.....................................................................................
									var fibonacci = Uize.Data.map ('key > 1 ? this [key - 2] + this [key - 1] : key',30);
									.....................................................................................

								Smooth an array of values by averaging against adjacent neighbors...
									......................................................................................
									var smoothed = Uize.Data.map (
										'key && key < this.length - 1 ? (this [key-1] + value + this [key+1]) / 3 : value',
										array
									);
									......................................................................................

								Output elements of a log array to the `Firebug` console on separate lines...
									...............................................
									Uize.Data.map ('console.log (value)',logArray);
									...............................................

								Output elements of a log array to the `Firebug` console on separate lines, with line numbers...
									............................................................
									Uize.Data.map ('console.log (key + ": " + value)',logArray);
									............................................................

								Gets a style properties object from a pure number coords object...
									........................................................................
									var coordsStyleProperties = Uize.Data.map ('value + "px"',coords);

									// EXAMPLE
									// this... {left:0,top:50,width:100,height:175}
									// produces this... {left:'0px',top:'50px',width:'100px',height:'175px'}
									........................................................................

								Gets the length of the longest string in an array of strings....
									.............................................................................
									var maxStringLength = Uize.max (Uize.Data.map ('value.length',stringsArray));
									.............................................................................
				*/
			};

			/*** Deprecated Static Methods ***/
				_package.emptyOut = Uize.emptyOut;
				_package.getKeys = Uize.keys;
				_package.getLookup = Uize.lookup;
				_package.getReverseLookup = Uize.reverseLookup;
				_package.getTotalKeys = Uize.totalKeys;
				_package.getValues = Uize.values;
				_package.isEmpty = Uize.isEmpty;
				_package.min = Uize.min;
				_package.max = Uize.max;

		return _package;
	}
});

