import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([TranslateService],
      (translate: TranslateService) => {
    expect(component).toBeTruthy();
  }));
});
