namespace Terrasoft.Configuration
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using System.Web.SessionState;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class ConcertService : BaseService, IReadOnlySessionState
    {
        #region Methods: Public

        /// <summary>
        /// Gets the total duration of performances for a concert.
        /// </summary>
        /// <param name="concertCode">The code of the concert.</param>
        /// <returns>
        /// -1 if the concert is not found; otherwise, the total duration of performances in minutes.
        /// </returns>
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public int GetConcertDuration(string concertCode)
        {
            if (string.IsNullOrEmpty(concertCode))
            {
                return -1;
            }

            Guid concertId = Guid.Empty;
            var selectConcert = new Select(UserConnection)
                .Column("Id")
                .From("UsrConcerts")
                .Where("UsrConcertCode").IsEqual(Column.Parameter(concertCode))
                as Select;

            using (var dbExecutor = UserConnection.EnsureDBConnection())
            using (var reader = selectConcert.ExecuteReader(dbExecutor))
            {
                if (reader.Read())
                {
                    concertId = reader.GetGuid(0);
                }
                else
                {
                    return -1;
                }
            }

            var selectSum = new Select(UserConnection)
                .Column(Func.Sum("UsrConcertDurationMinutes"))
                .From("UsrConcertPerformance")
                .Where("UsrParentConcertId").IsEqual(Column.Parameter(concertId))
                as Select;

            var totalDuration = selectSum.ExecuteScalar<int>();
            return totalDuration;
        }

        /// <summary>
        /// Example GET method.
        /// </summary>
        /// <returns>Example message.</returns>
        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "Hello from ConcertService!";
        }

        #endregion
    }
}
