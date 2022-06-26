import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SocialBarComponent } from './componentes/social-bar/social-bar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SocialBarComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
