import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAbmContComponent } from './person-abm-cont.component';

describe('PersonAbmContComponent', () => {
  let component: PersonAbmContComponent;
  let fixture: ComponentFixture<PersonAbmContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonAbmContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAbmContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
