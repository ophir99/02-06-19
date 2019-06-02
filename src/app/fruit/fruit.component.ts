import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  @Input()fruit = "Orange";

  @Output()
  selectFruit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  chooseFruit(){
    this.selectFruit.emit(this.fruit);
  }
}
