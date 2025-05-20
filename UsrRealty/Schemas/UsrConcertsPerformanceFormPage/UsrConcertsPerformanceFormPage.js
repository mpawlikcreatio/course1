define("UsrConcertsPerformanceFormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
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
				"parentName": "FlexContainer_lzexpo1",
				"propertyName": "items",
				"index": 1
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
				"parentName": "FlexContainer_lzexpo1",
				"propertyName": "items",
				"index": 0
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
			},
			{
				"operation": "insert",
				"name": "ComboBox_4p4qm54",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrConcertPerformanceDS_UsrParentConcert_vgra39f",
					"labelPosition": "above",
					"control": "$UsrConcertPerformanceDS_UsrParentConcert_vgra39f",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_qej1jlq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_qej1jlq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4p4qm54",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lzexpo1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "Main",
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
					},
					"UsrConcertPerformanceDS_UsrParentConcert_vgra39f": {
						"modelConfig": {
							"path": "UsrConcertPerformanceDS.UsrParentConcert"
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
						},
						"UsrConcertsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrConcerts",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									},
									"parameters": [
										{
											"type": "filter",
											"value": null
										}
									]
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrConcertPerformanceDS",
					"loadingConfig": {},
					"dependencies": {
						"UsrConcertsDS": [
							{
								"attributePath": "Id",
								"relationPath": "UsrConcertPerformanceDS.UsrParentConcert"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[ {
  request: "crt.SaveRecordRequest",
  handler: async (request, next) => {
    const context = request.$context;
    const sysSettingsService = new sdk.SysSettingsService();

    const maxDurationSetting = await sysSettingsService.getByCode("UsrConcertPerformanceDuration");
    const maxAllowedMinutes = maxDurationSetting?.value ?? 0;

    const currentDuration = context.attributes["UsrConcertPerformanceDS_UsrConcertDurationMinutes_4b2wlre"] ?? 0;
    const concertId = context.attributes["UsrConcertPerformanceDS_UsrParentConcert_vgra39f"]?.value;

    if (!concertId) {
      const handlerChain = sdk.HandlerChainService.instance;
      await handlerChain.process({
        type: "crt.ShowDialogRequest",
        $context: context,
        dialogConfig: {
          data: {
            title: "Validation error",
            message: "Concert ID is not set.",
            actions: [{
              key: "OK",
              config: {
                caption: "OK",
                color: "primary"
              }
            }]
          }
        }
      });
      return;
    }

    const performanceModel = await sdk.Model.create("UsrConcertPerformance");

    const filters = new sdk.FilterGroup();
    await filters.addSchemaColumnFilterWithParameter(
      sdk.ComparisonType.Equal,
      "UsrParentConcert",
      concertId
    );

    const result = await performanceModel.load({
      attributes: [{
        type: "function",
        path: "UsrConcertDurationMinutes",
        name: "Duration",
        dataValueType: sdk.DataValueType.Integer,
        functionConfig: {
          aggregation: sdk.AggregationFunction.Sum,
          type: "aggregation",
          aggregationEval: sdk.AggregationEvalType.All
        }
      }],
      parameters: [{
        type: sdk.ModelParameterType.Filter,
        value: filters
      }]
    });

    const totalExistingDuration = result[0]?.Duration ?? 0;
    const totalAfterSave = totalExistingDuration + currentDuration;

    if (totalAfterSave > maxAllowedMinutes) {
      const handlerChain = sdk.HandlerChainService.instance;
      await handlerChain.process({
        type: "crt.ShowDialogRequest",
        $context: context,
        dialogConfig: {
          data: {
            title: "Duration limit exceeded",
            message: `Total duration ${totalAfterSave} exceeds allowed limit ${maxAllowedMinutes}.`,
            actions: [{
              key: "OK",
              config: {
                caption: "OK",
                color: "primary"
              }
            }]
          }
        }
      });
      return;
    }

    return next?.handle(request);
  }
}
]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});