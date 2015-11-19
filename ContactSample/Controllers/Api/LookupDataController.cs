using ContactSample.Models;
using System;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ContactSample.Controllers.Api
{
    [EnableCors(origins: "http://localhost:24218/", headers: "*", methods: "*")]
    public class LookupDataController : ApiController
    {
        #region Public Methods

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var messageTypes = Enum.GetNames(typeof(MessageTypeEnum));

            var businessAreas = Enum.GetNames(typeof(BusinessAreaEnum));

            return Ok(new { messageTypes, businessAreas });
        }

        #endregion Public Methods
    }
}