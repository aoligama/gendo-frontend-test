import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { ListUsersComponent } from './pages/list-users/list-users.component'
import { UserProfileComponent } from './pages/user-profile/user-profile.component'

const routes: Routes = [
  {
    path: '', redirectTo: '/profiles', pathMatch: 'full'
  },
  {
    path: 'profiles', component: ListUsersComponent
  },
  {
    path: 'profiles/user/:login',
    component: UserProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
