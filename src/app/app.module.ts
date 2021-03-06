import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SocialBarComponent } from './componentes/social-bar/social-bar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaItemComponent } from './componentes/experiencia/experiencia-item/experiencia-item.component';
import { ExperienciaListComponent } from './componentes/experiencia/experiencia-list/experiencia-list.component';
import { EducacionListComponent } from './componentes/educacion/educacion-list/educacion-list.component';
import { EducacionItemComponent } from './componentes/educacion/educacion-item/educacion-item.component';
import { ProyectoListComponent } from './componentes/proyecto/proyecto-list/proyecto-list.component';
import { ProyectoItemComponent } from './componentes/proyecto/proyecto-item/proyecto-item.component';
import { HabilidadItemComponent } from './componentes/habilidad/habilidad-item/habilidad-item.component';
import { HabilidadListComponent } from './componentes/habilidad/habilidad-list/habilidad-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SocialBarComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaItemComponent,
    EducacionListComponent,
    ProyectoListComponent,
    HabilidadItemComponent,
    ExperienciaListComponent,
    HabilidadListComponent,
    EducacionItemComponent,
    ProyectoItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
