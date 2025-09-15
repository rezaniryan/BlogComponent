import { Routes } from '@angular/router';
//Exemplos
import { Exmplo1 } from './exmplo1/exmplo1';
import { Exmplo2 } from './exmplo2/exmplo2';
import { Exmplo3 } from './exmplo3/exmplo3';
import { Exmplo4 } from './exmplo4/exmplo4';
import { Exmplo5 } from './exmplo5/exmplo5';
import { Exmplo6 } from './exmplo6/exmplo6';
import { Exmplo7 } from './exmplo7/exmplo7';
import { Exmplo8 } from './exmplo8/exmplo8';
import { Exmplo9 } from './exmplo9/exmplo9';
import { Exmplo10 } from './exmplo10/exmplo10';
import { Exmplo11 } from './exmplo11/exmplo11';
import { BlogComponent } from './blog-component/blog-component';
//Atividades
import { Atv1 } from './atv1/atv1';

export const routes: Routes = [
    //Exemplos

    {path: 'Exemplo1', component: Exmplo1},
    {path: 'Exemplo2', component: Exmplo2},
    {path: 'Exemplo3', component: Exmplo3},
    {path: 'Exemplo4', component: Exmplo4},
    {path: 'Exemplo5', component: Exmplo5},
    {path: 'Exemplo6', component: Exmplo6},
    {path: 'Exemplo7', component: Exmplo7},
    {path: 'Exemplo8', component: Exmplo8},
    {path: 'Exemplo9', component: Exmplo9},
    {path: 'Exemplo11', component: Exmplo11},
    {path: 'Exemplo10', component: Exmplo10},

    {path: 'BlogComponent', component: BlogComponent},
    //Atividades
    {path: 'Atv1', component: Atv1}
];