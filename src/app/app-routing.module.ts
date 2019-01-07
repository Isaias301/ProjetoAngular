import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { FrequenciaComponent } from './frequencia/frequencia.component';
import { ForumComponent } from './forum/forum.component';
import { CompartilharArquivoComponent } from './compartilhar-arquivo/compartilhar-arquivo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'matriz-treinamento', component: MatrixComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'frequencia', component: FrequenciaComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'compartilhar-arquivo', component: CompartilharArquivoComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule {}