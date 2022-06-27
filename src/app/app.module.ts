import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SocialBarComponent } from './componentes/social-bar/social-bar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaItemComponent } from './componentes/experiencia/experiencia-item/experiencia-item.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadItemComponent } from './componentes/habilidad/habilidad-item/habilidad-item.component';
import { ExperienciaListComponent } from './componentes/experiencia/experiencia-list/experiencia-list.component';
import { HabilidadListComponent } from './componentes/habilidad/habilidad-list/habilidad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SocialBarComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaItemComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadItemComponent,
    ExperienciaListComponent,
    HabilidadListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
