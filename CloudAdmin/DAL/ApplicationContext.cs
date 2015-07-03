using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using CloudAdmin.Models;

namespace CloudAdmin.DAL
{
    public class ApplicationContext :DbContext
    {
        public ApplicationContext()
            : base("ApplicationContext")
        {

        }

        public DbSet<Company> Companies { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}