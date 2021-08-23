import { AsociarProfesorComponent } from './components/private/asociar/asociar-profesor/asociar-profesor.component';
import { UniversidadAdminComponent } from './components/public/universidades/universidad-admin/universidad-admin.component';
import { UniversidadListarComponent } from './components/public/universidades/universidad-listar/universidad-listar.component';
import { UniversidadEditComponent } from './components/public/universidades/universidad-edit/universidad-edit.component';
import { UniversidadCreateComponent } from './components/public/universidades/universidad-create/universidad-create.component';
import { ValidarComponent } from './components/login/validar/validar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/login/access/access.component';
import { HomeComponent } from './components/home/home.component';
import { NoEncontradoComponent } from './components/no-encontrado/not-found.component';
import { PrincipalComponent } from './components/private/principal/principal.component';
import { ProfesoresDetalleComponent } from './components/private/profesores/profesores-detail/profesores-detail.component';
import { ProfesoresPrincipalComponent } from './components/private/profesores/profesores-principal/profesores-principal.component';
import { ProfesoresAdminComponent } from './components/public/profesores/profesor-admin/professor-admin.component';
import { ProfesoresCrearComponent } from './components/public/profesores/profesor-create/professor-create.component';
import { ProfesoresEditComponent } from './components/public/profesores/profesor-edit/professor-edit.component';
import { ProfesorPrincipalComponent } from './components/public/profesores/profesor-principal/professor-principal.component';
import { ProfesoresListComponent } from './components/public/profesores/profesor-listar/professor-view.component';
import { UniversidadesDetalleComponent } from './components/private/universidades/universidades-detail/universidades-detail.component';
import { UniversidadesPrincipalComponent } from './components/private/universidades/universidades-principal/universidades-principal.component';
import { UniversidadPrincipalComponent } from './components/public/universidades/universidad-principal/universidad-principal.component';
import { MzComponent } from './components/mz/mz.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
//Guardia
import {VigilanteGuard} from './vigilante.guard'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AccessComponent },
  { path : 'militar', component: MzComponent, canActivate : [VigilanteGuard]},
  { path: 'crearcuenta',component: CrearUsuarioComponent},
  { path : 'validar' , component :  ValidarComponent},
  {
    path: 'profesor',
    component: ProfesorPrincipalComponent,
    children: [
      { path: 'crear', component: ProfesoresCrearComponent },
      { path: 'editar/:codProfessor', component: ProfesoresEditComponent },
      { path: 'listar', component: ProfesoresListComponent },
      { path: 'admin', component: ProfesoresAdminComponent },
      { path: 'asociar-profesor', component: AsociarProfesorComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },
  {
    path: 'universidad',
    component: UniversidadPrincipalComponent,
    children: [
      { path: 'crear', component: UniversidadCreateComponent },
      { path: 'editar/:codUniversidad', component: UniversidadEditComponent },
      { path: 'listar', component: UniversidadListarComponent },
      { path: 'admin', component: UniversidadAdminComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },


  {
    path: 'externa',
    component: PrincipalComponent,
    children: [
      {
        path: 'profesores',
        component: ProfesoresPrincipalComponent,
        children: [
          { path: 'profesores-detail', component: ProfesoresDetalleComponent },
          {
            path: 'profesores-detail/:codProfessor',
            component: ProfesoresDetalleComponent,
          },
          { path: '', redirectTo: 'profesores-detail', pathMatch: 'full' },
          { path: '**', component: NoEncontradoComponent },
        ],
      },
      {
        path: 'universidad',
        component: UniversidadesPrincipalComponent,
        children: [
          {
            path: 'universidad-detail',
            component: UniversidadesDetalleComponent,
          },
          {
            path: 'universidad-detail/:codUniversity',
            component: UniversidadesDetalleComponent,
          },
          { path: '', redirectTo: 'universidad-detail', pathMatch: 'full' },
          { path: '**', component: NoEncontradoComponent },
        ],
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
