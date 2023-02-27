import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignProjectComponent } from './components/dashboard/assign-project/assign-project.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeboardingTransitionComponent } from './components/dashboard/deboarding-transition/deboarding-transition.component';
import { ProvideAccessComponent } from './components/dashboard/provide-access/provide-access.component';
import { ReturnAssetsComponent } from './components/dashboard/return-assets/return-assets.component';
import { ReverseKtComponent } from './components/dashboard/reverse-kt/reverse-kt.component';
import { RevokeAccessComponent } from './components/dashboard/revoke-access/revoke-access.component';
import { ScheduleKtComponent } from './components/dashboard/schedule-kt/schedule-kt.component';
import { TeamIntroductionComponent } from './components/dashboard/team-introduction/team-introduction.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'verify', component: EmailVerificationComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'assignproject', component: AssignProjectComponent },
      { path: 'schedulekt', component: ScheduleKtComponent },
      { path: 'dashboard-home', component: DashboardHomeComponent },
      { path: 'reversekt', component: ReverseKtComponent },
      { path: 'provideaccess', component: ProvideAccessComponent },
      { path: 'teamintroduction', component: TeamIntroductionComponent },
      { path: 'deboarding', component: DeboardingTransitionComponent },
      { path: 'revokeaccess', component: RevokeAccessComponent },
      { path: 'returnasset', component: ReturnAssetsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  EmailVerificationComponent,
  DashboardComponent,
  AssignProjectComponent,
  ScheduleKtComponent,
  ReverseKtComponent,
  ProvideAccessComponent,
  TeamIntroductionComponent,
  DeboardingTransitionComponent,
  RevokeAccessComponent,
  ReturnAssetsComponent,
  DashboardHomeComponent,
];
