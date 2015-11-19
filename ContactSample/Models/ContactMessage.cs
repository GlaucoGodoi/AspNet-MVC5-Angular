using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ContactSample.Models.viewModel;

namespace ContactSample.Models
{
    public class ContactMessage
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [DisplayName("e-mail")]
        public string EMail { get; set; }

        [Required]
        [MaxLength(20)]
        [MinLength(4)]
        [DisplayName("Username")]
        public string Username { get; set; }

        [DataType(DataType.DateTime)]
        [DisplayName("Creation date")]
        public DateTime CreationDate { get; set; }

        [Required]
        [MaxLength(500)]
        [DataType(DataType.MultilineText)]
        public string Text { get; set; }

        [MaxLength(1000)]
        [DataType(DataType.MultilineText)]
        public string Answer { get; set; }

        [Required]
        [DisplayName("Message type")]
        public MessageTypeEnum MessageType { get; set; }

        [Required]
        [DisplayName("Business area")]
        public BusinessAreaEnum BusinessArea { get; set; }

        [DataType(DataType.DateTime)]
        [DisplayName("Answer date")]
        public string AnswerDate { get; set; }

        public static explicit operator ContactMessage(NewContactMessage item)
        {
            var ret = new ContactMessage();
            ret.Username = item.UserName;
            ret.BusinessArea = item.BusinessArea;
            ret.EMail = item.EMail;
            ret.MessageType = item.MessageType;
            ret.CreationDate = DateTime.UtcNow;
            ret.Text = item.Text;
            return ret;
        }
    }
}