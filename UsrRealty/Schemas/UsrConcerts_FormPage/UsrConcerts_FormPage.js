define("UsrConcerts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrConcerts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "dc48c8b6-3d6b-4922-b97a-3a10a88f7095",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "concertes_title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "concerts_active",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrActive_jzvjhfe",
					"labelPosition": "auto",
					"control": "$PDS_UsrActive_jzvjhfe"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "concerts_concerttype",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrConcertType_u0ek50g",
					"labelPosition": "auto",
					"control": "$PDS_UsrConcertType_u0ek50g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_rwgr7vm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rwgr7vm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "concerts_concerttype",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "concerts_notes",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNotes_sy8nydg",
					"labelPosition": "auto",
					"control": "$PDS_UsrNotes_sy8nydg",
					"multiline": false
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "concerts_owner",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOwner_gniaqdy",
					"labelPosition": "auto",
					"control": "$PDS_UsrOwner_gniaqdy",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_ivkuopc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ivkuopc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "concerts_owner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_29bucda",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPerDuration_rhmoxav",
					"labelPosition": "auto",
					"control": "$PDS_UsrPerDuration_rhmoxav",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Button_v8693uk",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_v8693uk_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddPerformancesUsrRealty1",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "ConcertId"
						}
					},
					"clickMode": "default",
					"icon": "add-button-icon"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_2u5i8o7",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_2u5i8o7_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_bf1a81l",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_2u5i8o7",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_02n4kjp",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_bf1a81l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_492ti8o",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_492ti8o_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrConcertPerformance",
							"defaultValues": [
								{
									"attributeName": "UsrParentConcert",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_02n4kjp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_r8324ux",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_r8324ux_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_3067jy8DS"
						}
					}
				},
				"parentName": "FlexContainer_02n4kjp",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_gfahxlu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_gfahxlu_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_02n4kjp",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_2hg38di",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_2hg38di_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ConcertPerformanceGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_gfahxlu",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_df9qp7r",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_df9qp7r_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrConcertPerformance"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_gfahxlu",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_gudern8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_gudern8_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_gudern8_GridDetail_3067jy8",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_3067jy8"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_gudern8_SearchValue",
							"GridDetailSearchFilter_gudern8_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_02n4kjp",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ub32j5j",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_2u5i8o7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ConcertPerformanceGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_3067jy8",
					"activeRow": "$GridDetail_3067jy8_ActiveRow",
					"selectionState": "$GridDetail_3067jy8_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_3067jy8_SelectionState"
					},
					"primaryColumnName": "GridDetail_3067jy8DS_Id",
					"columns": [
						{
							"id": "8fed0005-0639-d78e-f758-70985fd40a2a",
							"code": "GridDetail_3067jy8DS_UsrPerformanceNumber",
							"caption": "#ResourceString(GridDetail_3067jy8DS_UsrPerformanceNumber)#",
							"dataValueType": 4
						},
						{
							"id": "22c5545a-5878-f7e9-d306-278474035359",
							"code": "GridDetail_3067jy8DS_UsrPerformanceName",
							"caption": "#ResourceString(GridDetail_3067jy8DS_UsrPerformanceName)#",
							"dataValueType": 28
						},
						{
							"id": "7ded9751-4746-5366-e1b8-9b3326732ed0",
							"code": "GridDetail_3067jy8DS_UsrConcertDurationMinutes",
							"caption": "#ResourceString(GridDetail_3067jy8DS_UsrConcertDurationMinutes)#",
							"dataValueType": 4
						},
						{
							"id": "47247db8-8bfc-3f4e-39c7-8d9145babcde",
							"code": "GridDetail_3067jy8DS_UsrConcertPerformanceType",
							"caption": "#ResourceString(GridDetail_3067jy8DS_UsrConcertPerformanceType)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_ub32j5j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3067jy8_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3067jy8DS",
							"filters": "$GridDetail_3067jy8 | crt.ToCollectionFilters : 'GridDetail_3067jy8' : $GridDetail_3067jy8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3067jy8_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "ConcertPerformanceGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3067jy8_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3067jy8DS",
							"filters": "$GridDetail_3067jy8 | crt.ToCollectionFilters : 'GridDetail_3067jy8' : $GridDetail_3067jy8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3067jy8_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_3067jy8_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3067jy8_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ConcertPerformanceGridDetail",
							"filters": "$GridDetail_3067jy8 | crt.ToCollectionFilters : 'GridDetail_3067jy8' : $GridDetail_3067jy8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3067jy8_SelectionState"
						}
					}
				},
				"parentName": "ConcertPerformanceGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_3067jy8_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_3067jy8DS",
							"filters": "$GridDetail_3067jy8 | crt.ToCollectionFilters : 'GridDetail_3067jy8' : $GridDetail_3067jy8_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_3067jy8_SelectionState"
						}
					}
				},
				"parentName": "ConcertPerformanceGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrActive_jzvjhfe": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"PDS_UsrConcertType_u0ek50g": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"PDS_UsrNotes_sy8nydg": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrOwner_gniaqdy": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"GridDetail_3067jy8": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3067jy8DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_gudern8_GridDetail_3067jy8",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrPerformanceNumber"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3067jy8DS_UsrPerformanceNumber": {
									"modelConfig": {
										"path": "GridDetail_3067jy8DS.UsrPerformanceNumber"
									}
								},
								"GridDetail_3067jy8DS_UsrPerformanceName": {
									"modelConfig": {
										"path": "GridDetail_3067jy8DS.UsrPerformanceName"
									}
								},
								"GridDetail_3067jy8DS_UsrConcertDurationMinutes": {
									"modelConfig": {
										"path": "GridDetail_3067jy8DS.UsrConcertDurationMinutes"
									}
								},
								"GridDetail_3067jy8DS_UsrConcertPerformanceType": {
									"modelConfig": {
										"path": "GridDetail_3067jy8DS.UsrConcertPerformanceType"
									}
								},
								"GridDetail_3067jy8DS_Id": {
									"modelConfig": {
										"path": "GridDetail_3067jy8DS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrPerDuration_rhmoxav": {
						"modelConfig": {
							"path": "PDS.UsrPerDuration"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_3067jy8DS": [
							{
								"attributePath": "UsrParentConcert",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrConcerts"
						},
						"scope": "page"
					},
					"GridDetail_3067jy8DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrConcertPerformance",
							"attributes": {
								"UsrPerformanceNumber": {
									"path": "UsrPerformanceNumber"
								},
								"UsrPerformanceName": {
									"path": "UsrPerformanceName"
								},
								"UsrConcertDurationMinutes": {
									"path": "UsrConcertDurationMinutes"
								},
								"UsrConcertPerformanceType": {
									"path": "UsrConcertPerformanceType"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});