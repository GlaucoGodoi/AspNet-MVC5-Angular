using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace ContactSample.Models.viewModel
{
    public class ContactMessageToGrid 
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public BusinessAreaEnum BusinessArea { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public MessageTypeEnum MessageType { get; set; }

        public string Username { get; set; }

    }
}