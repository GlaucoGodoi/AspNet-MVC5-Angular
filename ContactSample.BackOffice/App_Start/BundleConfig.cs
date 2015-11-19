using System.Web;
using System.Web.Optimization;

namespace ContactSample.BackOffice
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/scripts/angular.js",
                "~/scripts/angular-resource.js",
                "~/scripts/angular-route.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/scripts/toastr.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/app/main.js",
                "~/app/services/httpInterceptorService.js",
                "~/app/services/localStorageservice.js",
                "~/app/messageEdit/messageEditController.js",
                "~/app/messageEdit/messageEditDataService.js",
                "~/app/messageList/messageListController.js",
                "~/app/messageList/messageListDataService.js",
                "~/app/login/logincontroller.js",
                "~/app/login/registerController.js",
                "~/app/login/logindataservice.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                   "~/content/toastr.css",
                     "~/Content/bootstrap.css",
                     "~/Content/site.css"));


            
        }
    }
}
