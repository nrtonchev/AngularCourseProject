import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "Some description", "https://www.foodista.com/sites/default/files/Shakshuka-Recipe-with-Red-Enchilada-Sauce-1.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
