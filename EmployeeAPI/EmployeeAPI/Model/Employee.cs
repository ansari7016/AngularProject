using System.ComponentModel.DataAnnotations;

namespace EmployeeAPI.Model
{
    public class Employee
    {
        public int id { get; set; }

        [StringLength(50)]
        public string fname { get; set; }

        [StringLength(50)]
        public string lname { get; set; }
        public int age { get; set; }

        [StringLength(200)]
        public string address { get; set; }
    }
}
