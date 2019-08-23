using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RevisaoWebApi.Models
{
    public class Usuario : UserControls
    {
        [Key]
        public int Id { get; set; }

        [CustomValidFields(Enums.ValidFields.ValidaNome)]
        public string Nome { get; set; }

        
        [CustomValidFields(Enums.ValidFields.ValidaEmail)]
        public string Email { get; set; }

        [CustomValidFields(Enums.ValidFields.ValidaLogin)]
        public string Login { get; set; }

        [CustomValidFields(Enums.ValidFields.ValidaSenha)]
        [MaxLength(16,ErrorMessage ="Campo excedeu o limite de caracteres\"16\"")]
        [MinLength(8,ErrorMessage ="Minimo com 8 caracateres \"8\"")]
        public string Senha { get; set; }
                     
    }
}