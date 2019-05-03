import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonAbmModule } from './main/person-abm/person-abm.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MyDIrectiveDirective } from './main/shared/components/directives/my-directive.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyDIrectiveDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PersonAbmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
