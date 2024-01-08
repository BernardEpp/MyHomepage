import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEntryCardComponent } from './cv-entry-card.component';

describe('CvEntryCardComponent', () => {
  let component: CvEntryCardComponent;
  let fixture: ComponentFixture<CvEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvEntryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
