import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FollowersComponent } from './followers/followers.component';

const routes: Routes = [
  { path: '', redirectTo:'/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'followers', component: FollowersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
