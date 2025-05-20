define("UsrConcerts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrConcerts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrConcerts"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "0d42ef60-8f33-4986-310a-7a2b977a621b",
							"code": "PDS_UsrTitle",
							"caption": "#ResourceString(PDS_UsrTitle)#",
							"dataValueType": 28
						},
						{
							"id": "5161d9c2-8674-0eec-3bf4-9f4acee32385",
							"code": "PDS_UsrConcertType",
							"caption": "#ResourceString(PDS_UsrConcertType)#",
							"dataValueType": 10
						},
						{
							"id": "c0edbcf5-f29a-14f5-4d81-99711f9a89e8",
							"code": "PDS_UsrOwner",
							"caption": "#ResourceString(PDS_UsrOwner)#",
							"dataValueType": 10
						},
						{
							"id": "b924131d-9730-52bc-5611-4af63c5b3f4f",
							"code": "PDS_UsrActive",
							"caption": "#ResourceString(PDS_UsrActive)#",
							"dataValueType": 12,
							"width": 128.99431610107422
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrConcerts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrTitle": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrConcertType": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"PDS_UsrOwner": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrActive": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "UsrConcertCode"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrConcerts",
					"attributes": {
						"UsrTitle": {
							"path": "UsrTitle"
						},
						"UsrConcertType": {
							"path": "UsrConcertType"
						},
						"UsrOwner": {
							"path": "UsrOwner"
						},
						"UsrActive": {
							"path": "UsrActive"
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