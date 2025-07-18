import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component'; 
import { PacienteComponent } from './components/paciente/paciente.component'; 
import { PacienteDetalhesComponent } from './components/paciente-detalhes/paciente-detalhes.component'; 
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';
import { AtendenteFormComponent } from './components/atendente-form/atendente-form.component';
import { EspecialidadeFormComponent } from './components/especialidade-form/especialidade-form.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErroInterceptor } from './interceptors/erro.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    AtendimentoComponent,
    AtendimentoFormComponent,
    PacienteComponent,
    PacienteFormComponent, 
    PacienteDetalhesComponent,
    AtendenteFormComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptors([ErroInterceptor]))
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
