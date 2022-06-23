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
  clue: Array<Clue> = [];

  constructor(private Http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories(); 
  }

  getCategories(){
    return this.Http.get<any>(this.jeopardyURL+"jeopardy/CategoryList")
    .subscribe({
      next: (res: Array<Clue>) => {
        res.forEach(element => {
          this.clue.push(element); 
        })
         
      }
    }); 
  }

}
