import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clue } from '../models/clue';
import { map } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  jeopardyURL = 'http://localhost:5018/'; //running API
  clues: Array<Array<Clue>> = [];
  categories: Array<string> = [];

  constructor(private Http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories();  
  }

  getCategories(){
    return this.Http.get<any>(this.jeopardyURL+"jeopardy/CategoryList")
    .subscribe({
      next: (res: Array<Clue>) => {
        res.forEach(element => {
          this.categories.push(element.category?.title!); 
          this.getClueByCategory(element.category?.title!).subscribe(clues => {
            this.clues.push(clues); 
            console.log("clues array",this.clues); 
          });
           
        })
         
      }
    }); 
  }

  getClueByCategory(category?: string){
    return this.Http.get<any>(this.jeopardyURL+"jeopardy/Category?request="+category);
     
    
  }

}
