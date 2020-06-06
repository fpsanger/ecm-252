import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCadastradosComponent } from './cursos-cadastrados.component';

describe('CursosCadastradosComponent', () => {
  let component: CursosCadastradosComponent;
  let fixture: ComponentFixture<CursosCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
