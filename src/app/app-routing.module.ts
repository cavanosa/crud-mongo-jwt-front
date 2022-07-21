import { LoginComponent } from './auth/login.component';
import { UpdateComponent } from './product/update.component';
import { CreateComponent } from './product/create.component';
import { DetailComponent } from './product/detail.component';
import { ListComponent } from './product/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
