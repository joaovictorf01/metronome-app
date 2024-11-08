import { Component } from '@angular/core';
import { MetronomeComponent } from './metronome/metronome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MetronomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Lógica do componente principal
}
