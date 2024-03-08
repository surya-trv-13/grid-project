import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alphabet-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alphabet-selection.component.html',
  styleUrl: './alphabet-selection.component.css'
})
export class AlphabetSelectionComponent {
  getAlphabetArray(): string[] {
    const alphabet = Array.from(Array(26), (e, i) => String.fromCharCode(i+65));
    console.log(alphabet)
    return alphabet
  }
}
