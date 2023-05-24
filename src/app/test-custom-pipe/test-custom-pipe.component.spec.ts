import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCustomPipeComponent } from './test-custom-pipe.component';

describe('TestCustomPipeComponent', () => {
  let component: TestCustomPipeComponent;
  let fixture: ComponentFixture<TestCustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCustomPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
