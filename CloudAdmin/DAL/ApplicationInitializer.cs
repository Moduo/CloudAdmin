using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using CloudAdmin.Models;

namespace CloudAdmin.DAL
{
    public class ApplicationInitializer : DropCreateDatabaseIfModelChanges<ApplicationContext>
    {
        protected override void Seed(ApplicationContext context)
        {
            var companies = new List<Company>()
            {
                new Company{Id = 0, Name="Swift Development"},
                new Company{Id = 1, Name="Technoberg"},
                new Company{Id = 2, Name="Microsoft"}
            };

            companies.ForEach(c => context.Companies.Add(c));
            context.SaveChanges();
        }
    }
}