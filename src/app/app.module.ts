import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './components/template.module';
import { ViewsModuleModule } from './views/views-module.module';
import { ClienteService } from './services/cliente.service';
import { FormsModule} from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        TemplateModule,
        ViewsModuleModule
    ],
    providers: [
        ClienteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
