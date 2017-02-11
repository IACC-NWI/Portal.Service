﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Castle.Windsor;
using Castle.Windsor.Installer;
using Microsoft.Owin.Hosting;

namespace Portal.Service
{
    public class PortalServiceRunnable
    {
        public static IWindsorContainer Container = new WindsorContainer();

        private IDisposable httpServer;

        public PortalServiceRunnable()
        {
            Container.Install(FromAssembly.This());
        }
        public void Start()
        {
            httpServer = WebApp.Start<OwinStartup>(url: ConfigurationManager.AppSettings["Url"]);

        }

        public void Stop()
        {
            httpServer?.Dispose();
            Container.Dispose();
        }
    }
    
}
