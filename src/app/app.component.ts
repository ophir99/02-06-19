import { Component } from '@angular/core';
import { FruitService} from "./fruits.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-one';
  fruits: string[];
  selectedFruits: string[];
  constructor(
    private fruitService: FruitService
  ){
    // const fruitS = new FruitService();
    this.fruits = this.fruitService.fruits;
    this.selectedFruits = [];
  }

  addFruit(event){
      console.log(event);
      this.selectedFruits.push(event);
  }
}
