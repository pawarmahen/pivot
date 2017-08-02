using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PivotTable.UI.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult SimplePivot()
        {
            return View();
        }

        public ActionResult PivotWithJson()
        {
            return View();
        }

        public ActionResult PivotUIWithJson()
        {
            return View();
        }
    }
}