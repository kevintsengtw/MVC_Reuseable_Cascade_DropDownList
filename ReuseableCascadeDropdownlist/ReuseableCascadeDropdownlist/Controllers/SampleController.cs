using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReuseableCascadeDropdownlist.ViewModels;

namespace ReuseableCascadeDropdownlist.Controllers
{
    public class SampleController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Index2()
        {
            return View();
        }

        public ActionResult Index3()
        {
            ViewBag.SelectedCity = "台北市";
            ViewBag.SelectedCounty = "104";

            var sampleViewModel = new SampleViewModel
            {
                CityName = "桃園縣",
                CountyCode = "326"
            };

            return View(sampleViewModel);
        }
    }
}
