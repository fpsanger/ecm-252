import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfessoresComponent } from './info-professores.component';

describe('InfoProfessoresComponent', () => {
  let component: InfoProfessoresComponent;
  let fixture: ComponentFixture<InfoProfessoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProfessoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
