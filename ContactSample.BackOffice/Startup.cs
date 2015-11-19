using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ContactSample.BackOffice.Startup))]
namespace ContactSample.BackOffice
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
