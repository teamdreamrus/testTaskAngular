import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextElipsisComponent } from './text-elipsis.component';

describe('TextElipsisComponent', () => {
  let component: TextElipsisComponent;
  let fixture: ComponentFixture<TextElipsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextElipsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextElipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
