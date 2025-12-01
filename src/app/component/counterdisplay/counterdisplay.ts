import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  imports: [],
  templateUrl: './counterdisplay.html',
  styleUrl: './counterdisplay.scss',
})
export class Counterdisplay implements OnInit {
  counterDisplay!: number;

  constructor(private store: Store<{counter: number}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe( data => {
        this.counterDisplay = data;
    })  
  }
}
