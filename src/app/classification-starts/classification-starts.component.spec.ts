import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationStartsComponent } from './classification-starts.component';

describe('ClassificationStartsComponent', () => {
  let component: ClassificationStartsComponent;
  let fixture: ComponentFixture<ClassificationStartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationStartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationStartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
