import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-form-box',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-form-box.component.html',
  styleUrl: './add-form-box.component.css'
})
export class AddFormBoxComponent {
  showPopup: boolean = true;
  formData: any = {
    name: '',
    email: ''
  };

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    this.closePopup(); // Close the popup after form submission
  }
}
