import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationStarsComponent } from './classification-stars.component';

describe('ClassificationStarsComponent', () => {
  let component: ClassificationStarsComponent;
  let fixture: ComponentFixture<ClassificationStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
