using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ContactSample.Models.viewModel
{
    public class NewContactMessage 
    {
        #region Public Properties

        [Required]
        [DataType(DataType.EmailAddress)]
        [DisplayName("e-mail")]
        public string EMail { get; set; }

        [Required]
        [MaxLength(20)]
        [MinLength(4)]
        [DisplayName("Username")]
        public string UserName { get; set; }

        [Required]
        [MaxLength(500)]
        [DataType(DataType.MultilineText)]
        public string Text { get; set; }

        [Required]
        [DisplayName("Message type")]
        public MessageTypeEnum MessageType { get; set; }

        [Required]
        [DisplayName("Business area")]
        public BusinessAreaEnum BusinessArea { get; set; }

        #endregion Public Properties
    }
}