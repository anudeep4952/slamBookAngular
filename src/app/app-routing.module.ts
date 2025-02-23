import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewSlamsComponent } from './components/view-slams/view-slams.component';
import { WriteSlamComponent } from './components/write-slam/write-slam.component';
import { AuthGuard } from "src/app/auth.guard";

const routes: Routes = [
  {
    path:'',component:LoginComponent,
  },
  {
    path:'view/:id',component:ViewSlamsComponent,canActivate:[AuthGuard]
  },
 {
   path:'writemyslam/:id/:friendName/:linkId',component:WriteSlamComponent
 },
 { path: '**', redirectTo:'' }
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
