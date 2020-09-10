import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{


    constructor(private slService:ShoppingListService){}

    private recipes:Recipe[] = [
        new Recipe(
           1,
            'A Test Recipe',
            'This is just a test',
            'https://tastesbetterfromscratch.com/wp-content/uploads/2010/06/Hersheys-Perfectly-Chocolate-Chocolate-Cake-13.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
            ),
        new Recipe(
          2,
            'A Test Recipe 2',
            'This is just a test 2',
            'https://www.tasteofhome.com/wp-content/uploads/2020/03/Buffalo-Bites-with-Blue-Cheese-Ranch-Dip_EXPS_FT20_238642_F_0227_1-696x696.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 3)
            ])
      ];




      getRecipeById(recipe_id:number):Recipe {
        console.log(recipe_id);
        var recipe_item = this.recipes.find(a=>
          a.id === recipe_id);

        if(recipe_item != null){
          return recipe_item;
        }
        else return null;
      }


      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}
