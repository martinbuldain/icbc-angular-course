import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonAbmModule } from './main/person-abm/person-abm.module';
import { HeaderComponent } from './shared/components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    PersonAbmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
