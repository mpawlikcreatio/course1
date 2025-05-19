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
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
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
				"index": 5
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
				"name": "NumberInput_c5b3lnt",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrConcertsDS_UsrPerDuration_0zb8jur",
					"labelPosition": "above",
					"control": "$UsrConcertsDS_UsrPerDuration_0zb8jur",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
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
					},
					"UsrConcertsDS_UsrPerDuration_0zb8jur": {
						"modelConfig": {
							"path": "UsrConcertsDS.UsrPerDuration"
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
		handlers: [
		  {
		    request: "crt.SaveRecordRequest",
		    handler: async (request, next) => {
		      const context = request.$context;
		      const sysSettingsService = new sdk.SysSettingsService();
		
		      // Pobierz wartość z ustawień systemowych
		      const maxDurationSetting = await sysSettingsService.getByCode("UsrConcertPerformanceDuration");
		      const maxAllowedMinutes = maxDurationSetting?.value ?? 0;
		
		      // Aktualna wartość w formularzu (czas trwania performance'u)
		      const currentDuration = context.attributes["UsrConcertPerformanceDS_UsrConcertDurationMinutes_4b2wlre"] ?? 0;
		
		      // ID koncertu nadrzędnego
		      const concertId = context.attributes["UsrConcertPerformanceDS_UsrParentConcert_vgra39f"]?.value;
		
		      if (!concertId) {
		        console.warn("⚠️ Brak ID koncertu, pomijam walidację czasu.");
		        return next?.handle(request);
		      }
		
		      // Użycie Model + agregacja SUM (bez potrzeby pobierania wszystkich rekordów)
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
		        console.warn(`⛔ Limit czasu przekroczony: ${totalAfterSave} > ${maxAllowedMinutes}`);
		        // Blokuj zapis
		        return;
		      }
		
		      // Zapisz rekord
		      return next?.handle(request);
		    }
		  }
		],
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});