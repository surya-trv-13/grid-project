import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AlphabetSelectionComponent } from './alphabet-selection/alphabet-selection.component';
import { AddFormBoxComponent } from './add-form-box/add-form-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,
    GridComponent,
    SearchBoxComponent,
    AlphabetSelectionComponent,
    AddFormBoxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'grid-project';


}
