import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { AutoResizeDirective } from './auto-resize.directive';

@Component({
  template: `
  <textarea rows="1" racAutoResize></textarea>
  `
})
class TestComponent { }


describe('AutoResizeDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement;

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [ AutoResizeDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();

    des = fixture.debugElement.query(By.directive(AutoResizeDirective));
  });

  it('should create an instance', () => {
    expect(des).toBeTruthy();
  });
});
