import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './components/person/person.component';
import { PersonAbmContComponent } from './containers/person-abm-cont/person-abm-cont.component';

@NgModule({
  declarations: [PersonComponent, PersonAbmContComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PersonAbmContComponent
  ]
})
export class PersonAbmModule { }
