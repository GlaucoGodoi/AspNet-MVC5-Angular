using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ContactSample.Models;
using ContactSample.Models.viewModel;

namespace ContactSample.Controllers.Api
{
    [EnableCors(origins: "http://localhost:24318", methods: "*", headers: "*")]
    public class ContactMessagesController : ApiController
    {
        private ContactSampleContext db = new ContactSampleContext();

        // GET: api/ContactMessages
        public IQueryable<ContactMessage> GetContactMessages()
        {
            return db.ContactMessages;
        }

        [Authorize()]
        [HttpGet]
        [Route("api/contactmessages/{page}/{pageSize}")]
        public async Task<IHttpActionResult> GetContactMessagesToGrid(int page = 1, int pageSize = 10)
        {
            var data =
                await db.Set<ContactMessage>()
                    .OrderByDescending(p => p.Id)
                    .Where(p => p.Answer == null || p.Answer == "")
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .Select(p => new ContactMessageToGrid()
                    {
                        Id = p.Id,
                        CreationDate = p.CreationDate,
                        BusinessArea = p.BusinessArea,
                        MessageType = p.MessageType,
                        Username = p.Username
                    }).ToListAsync();

            var totalRecords = await db.ContactMessages.CountAsync(p => p.Answer == null || p.Answer == "");
            int tempRem;
            var totalPages = Math.DivRem(totalRecords,pageSize, out tempRem);
            totalPages = tempRem > 0 ? totalPages + 1 : totalPages;

            var nextPage = "";
            var previousPage = "";

            if ((page + 1) <= totalPages)
            {
                nextPage = $"#messageList/{page+1}"; //$"{Request.Headers.Referrer.OriginalString}/{page + 1}/{pageSize}";
            }
            if (page > 1 )
            {
                previousPage = $"#messageList/{page-1}"; //$"{Request.Headers.Referrer.OriginalString}/{page - 1}/{pageSize}";
            }

            return Ok(new {data,nextPage, previousPage});

        }

        // GET: api/ContactMessages/5
        [ResponseType(typeof(ContactMessage))]
        public async Task<IHttpActionResult> GetContactMessage(int id)
        {
            ContactMessage contactMessage = await db.ContactMessages.FindAsync(id);
            if (contactMessage == null)
            {
                return NotFound();
            }

            return Ok(contactMessage);
        }

        // PUT: api/ContactMessages/5
        [Authorize]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutContactMessage(int id, ContactMessage contactMessage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contactMessage.Id)
            {
                return BadRequest();
            }

            db.Entry(contactMessage).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactMessageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ContactMessages
        [ResponseType(typeof(ContactMessage))]
        public async Task<IHttpActionResult> PostContactMessage(NewContactMessage contactMessage)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var messageToAdd = (ContactMessage)contactMessage;
            db.ContactMessages.Add(messageToAdd);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = messageToAdd.Id }, messageToAdd);
        }

        // DELETE: api/ContactMessages/5
        [ResponseType(typeof(ContactMessage))]
        public async Task<IHttpActionResult> DeleteContactMessage(int id)
        {
            ContactMessage contactMessage = await db.ContactMessages.FindAsync(id);
            if (contactMessage == null)
            {
                return NotFound();
            }

            db.ContactMessages.Remove(contactMessage);
            await db.SaveChangesAsync();

            return Ok(contactMessage);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactMessageExists(int id)
        {
            return db.ContactMessages.Count(e => e.Id == id) > 0;
        }
    }
}