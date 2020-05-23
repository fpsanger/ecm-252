import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDiretivasComponent } from './angular-diretivas.component';

describe('AngularDiretivasComponent', () => {
  let component: AngularDiretivasComponent;
  let fixture: ComponentFixture<AngularDiretivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDiretivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
