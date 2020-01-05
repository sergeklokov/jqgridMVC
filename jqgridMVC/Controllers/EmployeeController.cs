using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using jqgridMVC.Models;


namespace jqgridMVC.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetData() {
            using (var db = new AdventureWorks2016CTP3Entities())
            {
                var employeeList = db.EmployeeTests.ToList<EmployeeTest>();
                return Json(new { rows = employeeList }, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetDataXML()
        {
            using (var db = new AdventureWorks2016CTP3Entities())
            {
                var employeeList = db.EmployeeTests.ToList<EmployeeTest>();
                return Json(new { rows = employeeList }, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult SecondPage() {
            return View();
        }
    }
}