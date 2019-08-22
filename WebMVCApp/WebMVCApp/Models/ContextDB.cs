using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebMVCApp.Models
{
    public class ContextDB : DbContext
    {
        public DbSet<Pessoa> pessoas { get; set; }
    

        public System.Data.Entity.DbSet<WebMVCApp.Models.Carro> Carroes { get; set; }
    }
}