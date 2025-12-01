import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counterbutton } from "./component/counterbutton/counterbutton";
import { Counterdisplay } from "./component/counterdisplay/counterdisplay";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counterbutton, Counterdisplay],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learn-ngrx');
}
