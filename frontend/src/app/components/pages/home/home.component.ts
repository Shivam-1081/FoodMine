import { FoodService } from './../../../services/food.service';
import { Component ,OnInit} from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   foods: Food[] = [];
  constructor(private foodService: FoodService , activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      let foodsObservable: Observable<Food[]>;
      if (params.searchTerm) 
        foodsObservable= this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
      foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      else 
         foodsObservable = this.foodService.getAll();
         foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })

    })
    
   }
  ngOnInit(): void {
      
  }
}
