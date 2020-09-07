import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalksOverviewContainer } from './containers/talks-overview/talks-overview.container';

const routes: Routes = [
  {
    path: 'overview',
    component: TalksOverviewContainer,
  },
  {
    path: '**',
    redirectTo: '/overview',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
