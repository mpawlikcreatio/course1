namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrAddPerformancesUsrRealty2MethodsWrapper

	/// <exclude/>
	public class UsrAddPerformancesUsrRealty2MethodsWrapper : ProcessModel
	{

		public UsrAddPerformancesUsrRealty2MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var userConnection = UserConnection;
			Guid concertId = Get<Guid>("ConcertIdParametr");
			
			
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrConcertPerformance") {
				UseAdminRights = false
			};
			
			esq.AddColumn("Id");
			var numberColumn = esq.AddColumn("UsrPerformanceNumber");
			numberColumn.OrderDirection = OrderDirection.Descending;
			esq.AddColumn("UsrParentConcert");
			
			var filter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrParentConcert", concertId);
			esq.Filters.Add(filter);
			
			esq.RowCount = 1;
			
			var performances = esq.GetEntityCollection(userConnection);
			
			int lastNumber = 0;
			
			if (performances.Count > 0) {
				var lastPerformance = performances[0];
				lastNumber = lastPerformance.GetTypedColumnValue<int>("UsrPerformanceNumber");
			}
			
			var schema = userConnection.EntitySchemaManager.GetInstanceByName("UsrConcertPerformance");
			var songLookupValueId = "F1FE4BE8-DE1A-405C-A3AE-206F25E804F8";
			
			for (int i = 1; i <= 10; i++) {
				var newPerformance = schema.CreateEntity(userConnection);
				newPerformance.SetDefColumnValues(); 
				newPerformance.SetColumnValue("UsrParentConcertId", concertId);
				newPerformance.SetColumnValue("UsrPerformanceNumber", lastNumber + i);
				newPerformance.SetColumnValue("UsrConcertDurationMinutes", 10);
				newPerformance.SetColumnValue("UsrPerformanceName", $"Performance{i}");
				newPerformance.SetColumnValue("UsrConcertPerformanceTypeId", songLookupValueId);
				newPerformance.Save();
			}
			
			return true;
		}

		#endregion

	}

	#endregion

}

