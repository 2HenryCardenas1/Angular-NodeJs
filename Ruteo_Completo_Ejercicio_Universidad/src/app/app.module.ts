import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NoEncontradoComponent } from './components/no-encontrado/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ProfesoresCrearComponent } from './components/public/profesores/profesor-create/professor-create.component';
import { ProfesoresEditComponent } from './components/public/profesores/profesor-edit/professor-edit.component';
import { ProfesoresListComponent } from './components/public/profesores/profesor-listar/professor-view.component';

import { PrincipalComponent } from './components/private/principal/principal.component';
import { ArrayPipe } from './pipes/array.pipe';
import { ProfesoresAdminComponent } from './components/public/profesores/profesor-admin/professor-admin.component';
import { ProfesorPrincipalComponent } from './components/public/profesores/profesor-principal/professor-principal.component'
import { ProfesoresPrincipalComponent } from './components/private/profesores/profesores-principal/profesores-principal.component';
import { ProfesoresDetalleComponent } from './components/private/profesores/profesores-detail/profesores-detail.component';
import { ProfesoresSideMenuComponent } from './components/private/profesores/profesores-side-menu/profesores-side-menu.component';
import { UniversidadesSideMenuComponent } from './components/private/universidades/universidades-side-menu/universidades-side-menu.component';
import { UniversidadesDetalleComponent } from './components/private/universidades/universidades-detail/universidades-detail.component';
import { UniversidadesPrincipalComponent } from './components/private/universidades/universidades-principal/universidades-principal.component';

import {AccessComponent} from './components/login/access/access.component';
import { ValidarComponent } from './components/login/validar/validar.component';
import { HttpClientModule } from '@angular/common/http';
import { UniversidadAdminComponent } from './components/public/universidades/universidad-admin/universidad-admin.component';
import { UniversidadCreateComponent } from './components/public/universidades/universidad-create/universidad-create.component';
import { UniversidadEditComponent } from './components/public/universidades/universidad-edit/universidad-edit.component';
import { UniversidadListarComponent } from './components/public/universidades/universidad-listar/universidad-listar.component';
import { UniversidadPrincipalComponent } from './components/public/universidades/universidad-principal/universidad-principal.component';
import { AsociarProfesorComponent } from './components/private/asociar/asociar-profesor/asociar-profesor.component';
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component'
import { MzComponent } from './components/mz/mz.component';



@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NoEncontradoComponent,
    HomeComponent,
    ProfesoresCrearComponent,
    ProfesoresEditComponent,
    ProfesoresListComponent,
    ProfesoresPrincipalComponent,
    ProfesoresAdminComponent,
    PrincipalComponent,
    ProfesorPrincipalComponent,
    ArrayPipe,
    ProfesoresPrincipalComponent,
    ProfesoresDetalleComponent,
    ProfesoresSideMenuComponent,
    UniversidadesSideMenuComponent,
    UniversidadesDetalleComponent,
    UniversidadesPrincipalComponent,
    AccessComponent,
    ValidarComponent,
    UniversidadAdminComponent,
    UniversidadCreateComponent,
    UniversidadEditComponent,
    UniversidadListarComponent,
    UniversidadPrincipalComponent,
    AsociarProfesorComponent,
    CrearUsuarioComponent,
    MzComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
