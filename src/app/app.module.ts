import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ruta
import { AppRoutingModule } from './app-routing.module';
// Modulos
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

// Componentes
import { AppComponent } from './app.component';

// Temporales
import { FormsModule } from '@angular/forms';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
