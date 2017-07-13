import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { NotFoundComponent } from './notFound.component';

describe('AboutComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      imports: [ TranslateModule.forRoot() ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([TranslateService],
      (translate: TranslateService) => {
    expect(component).toBeTruthy();
  }));
});
