import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('A test recipe', 'Testing', 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg'), 
		new Recipe('A test recipe', 'Testing', 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg'),
		new Recipe('A test recipe', 'Testing', 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg') 
        
	];

	constructor() { }

	ngOnInit() {
	}

}
