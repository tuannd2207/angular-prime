import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './main/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppLayoutComponent,
        children: [
          { path: '', loadChildren: () => import('./main/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
          { path: 'uikit', loadChildren: () => import('./main/components/uikit/uikit.module').then(m => m.UIkitModule) },
          { path: 'utilities', loadChildren: () => import('./main/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
          { path: 'documentation', loadChildren: () => import('./main/components/documentation/documentation.module').then(m => m.DocumentationModule) },
          { path: 'blocks', loadChildren: () => import('./main/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
          { path: 'pages', loadChildren: () => import('./main/components/pages/pages.module').then(m => m.PagesModule) }
        ]
      },
      { path: 'auth', loadChildren: () => import('./main/components/auth/auth.module').then(m => m.AuthModule) },
      { path: 'landing', loadChildren: () => import('./main/components/landing/landing.module').then(m => m.LandingModule) },
      { path: 'notfound', component: NotfoundComponent },
      { path: '**', redirectTo: '/notfound' },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
