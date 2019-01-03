import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { metaRoutes } from './meta-routes';

const routes: Routes = metaRoutes.map(({path, redirectTo, pathMatch, component}) => ({path, redirectTo, pathMatch, component}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
