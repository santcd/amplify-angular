import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmplifyUiLoginComponent } from './amplify-ui-login/amplify-ui-login.component';
import { HomeComponent } from './home/home.component';
import { ManuallyLoginComponent } from './manually-login/manually-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'manually-login',
    component: ManuallyLoginComponent,
  },
  {
    path: 'amplify-ui',
    component: AmplifyUiLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
