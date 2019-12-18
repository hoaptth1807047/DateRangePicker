using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DaterangePicker.Controllers
{
    public class DaterangePickerController : Controller
    {
        // GET: DaterangePicker
        public ActionResult Index(DateTime? start, DateTime? end)
        {
            ViewBag.start = start;
            ViewBag.end = end;
            return View();
        }
    }
}