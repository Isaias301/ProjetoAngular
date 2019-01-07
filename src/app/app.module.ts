import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { FrequenciaComponent } from './frequencia/frequencia.component';
import { ForumComponent } from './forum/forum.component';
import { CompartilharArquivoComponent } from './compartilhar-arquivo/compartilhar-arquivo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MatrixComponent,
    CalendarioComponent,
    BibliotecaComponent,
    FrequenciaComponent,
    ForumComponent,
    CompartilharArquivoComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
