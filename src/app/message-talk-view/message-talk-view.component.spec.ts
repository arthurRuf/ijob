import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTalkViewComponent } from './message-talk-view.component';

describe('MessageTalkViewComponent', () => {
  let component: MessageTalkViewComponent;
  let fixture: ComponentFixture<MessageTalkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTalkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTalkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
