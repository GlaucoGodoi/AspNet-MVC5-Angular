using System.Web;
using System.Web.Optimization;

namespace ContactSample.FrontOffice
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

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/app/contactMessage/contactMessageModule.js",
                "~/app/contactMessage/contactMessageUIService.js",
                "~/app/contactMessage/contactMessageDataService.js",
                "~/app/contactMessage/formController.js",
                "~/app/contactMessage/DescriptionController.js",
                "~/app/home/homeModule.js",
                "~/app/home/homeController.js",
                "~/app/main.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/scripts/toastr.js"));

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
