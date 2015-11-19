using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ContactSample.FrontOffice.Startup))]
namespace ContactSample.FrontOffice
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
