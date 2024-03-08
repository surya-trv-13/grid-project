import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetSelectionComponent } from './alphabet-selection.component';

describe('AlphabetSelectionComponent', () => {
  let component: AlphabetSelectionComponent;
  let fixture: ComponentFixture<AlphabetSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabetSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphabetSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
