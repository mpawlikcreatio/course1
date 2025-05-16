define("UsrConcertsPerformanceFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "move",
				"name": "FooterContainer",
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "FooterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "CancelButton",
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "move",
				"name": "SaveButton",
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_4mqnud9",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrConcertPerformanceDS_UsrPerformanceName_rkaywgl",
					"labelPosition": "above",
					"control": "$UsrConcertPerformanceDS_UsrPerformanceName_rkaywgl"
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_vqwjafw",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrConcertPerformanceDS_UsrConcertPerformanceType_d4b066o",
					"labelPosition": "above",
					"control": "$UsrConcertPerformanceDS_UsrConcertPerformanceType_d4b066o",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_lat1q08",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lat1q08_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_vqwjafw",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_u2bl22k",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrConcertPerformanceDS_UsrPerformanceNumber_fb1czvc",
					"labelPosition": "above",
					"control": "$UsrConcertPerformanceDS_UsrPerformanceNumber_fb1czvc"
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_pjbhmyw",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrConcertPerformanceDS_UsrConcertDurationMinutes_4b2wlre",
					"labelPosition": "above",
					"control": "$UsrConcertPerformanceDS_UsrConcertDurationMinutes_4b2wlre"
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrConcertPerformanceDS_UsrPerformanceName_rkaywgl": {
						"modelConfig": {
							"path": "UsrConcertPerformanceDS.UsrPerformanceName"
						}
					},
					"UsrConcertPerformanceDS_UsrPerformanceNumber_fb1czvc": {
						"modelConfig": {
							"path": "UsrConcertPerformanceDS.UsrPerformanceNumber"
						}
					},
					"UsrConcertPerformanceDS_UsrConcertDurationMinutes_4b2wlre": {
						"modelConfig": {
							"path": "UsrConcertPerformanceDS.UsrConcertDurationMinutes"
						}
					},
					"UsrConcertPerformanceDS_UsrConcertPerformanceType_d4b066o": {
						"modelConfig": {
							"path": "UsrConcertPerformanceDS.UsrConcertPerformanceType"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrConcertPerformanceDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrConcertPerformance",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrConcertPerformanceDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});