import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  gridData =  [{col1: "Test", col2: "Test 2", col3: "Test 3", col4: "Test 4", col5: "Test5"},
    {col1: "Test", col2: "Test 2", col3: "Test 3", col4: "Test 4", col5: "Test5"},
    {col1: "Test", col2: "Test 2", col3: "Test 3", col4: "Test 4", col5: "Test5"},
    {col1: "Test", col2: "Test 2", col3: "Test 3", col4: "Test 4", col5: "Test5"},
    {col1: "Test", col2: "Test 2", col3: "Test 3", col4: "Test 4", col5: "Test5"},
    {col1: "Test", col2: "Test 2", col3: "Test 3", col4: "Test 4", col5: "Test5"},
    {col1: "Test", col2: "Test 2", col3: "Test 3", col4: "Test 4", col5: "Test5"}];
}
