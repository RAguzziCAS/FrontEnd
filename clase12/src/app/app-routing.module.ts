import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path:'biblioteca', component:BibliotecaComponent},
  {path:'documentos', component:DocumentosComponent},
  {path:'personal', component:PersonalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
