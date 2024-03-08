import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormBoxComponent } from './add-form-box.component';

describe('AddFormBoxComponent', () => {
  let component: AddFormBoxComponent;
  let fixture: ComponentFixture<AddFormBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFormBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFormBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
