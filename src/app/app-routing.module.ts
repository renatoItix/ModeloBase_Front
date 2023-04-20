import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './views/cliente/cliente-form/cliente-form.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { FornecedorFormComponent } from './views/fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorComponent } from './views/fornecedor/fornecedor.component';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './views/layout/layout.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full',
            },
            {
                path: 'home', component: HomeComponent
            },
            {
                path: 'cliente',
                children: [
                    { path: '', component: ClienteComponent },
                    { path: 'novo', component: ClienteFormComponent },
                    { path: ':id', redirectTo: ':id/editar' },
                    { path: ':id/editar', component: ClienteFormComponent }
                ]
            },
            {
                path: 'fornecedor',
                children: [
                    { path: '', component: FornecedorComponent },
                    { path: 'novo', component: FornecedorFormComponent },
                    { path: ':id', redirectTo: ':id/editar' },
                    { path: ':id/editar', component: FornecedorFormComponent }
                ]
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
