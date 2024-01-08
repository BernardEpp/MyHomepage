import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageProgressComponent } from './language-progress.component';

describe('LanguageProgressComponent', () => {
  let component: LanguageProgressComponent;
  let fixture: ComponentFixture<LanguageProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
