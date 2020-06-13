import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePipesComponent } from './teste-pipes.component';

describe('TestePipesComponent', () => {
  let component: TestePipesComponent;
  let fixture: ComponentFixture<TestePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
