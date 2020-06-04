import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewSlamsComponent } from './view-slams/view-slams.component';
import { WriteSlamComponent } from './write-slam/write-slam.component';
const routes: Routes = [
  {
    path:'',component:LoginComponent,
  },
  {
    path:'view/:id',component:ViewSlamsComponent
  },
 {
   path:'write',component:WriteSlamComponent
 },
 { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
