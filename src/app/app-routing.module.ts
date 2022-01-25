import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
  { path: "files", component: FilesComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: AuthComponent },
  { path: "**", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
