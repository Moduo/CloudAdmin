using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CloudAdmin.Startup))]
namespace CloudAdmin
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
