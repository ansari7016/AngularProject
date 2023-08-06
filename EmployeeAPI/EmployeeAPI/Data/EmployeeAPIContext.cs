using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EmployeeAPI.Model;

namespace EmployeeAPI.Data
{
    public class EmployeeAPIContext : DbContext
    {
        public EmployeeAPIContext (DbContextOptions<EmployeeAPIContext> options)
            : base(options)
        {
        }

        public DbSet<EmployeeAPI.Model.Employee> Employee { get; set; } = default!;
    }
}
