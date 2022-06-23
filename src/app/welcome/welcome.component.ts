import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Clue } from '../models/clue';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  jeopardyURL = 'http://localhost:5018/'; 
  public clue = new Clue(); 
  public dropDownSelection = ''; 
  
  constructor(private Http: HttpClient,private service: ApiService, private router: Router) { }

  ngOnInit(): void {
   
  }

  newGame(){
   return this.router.navigate(['/game']); 
  }

  //saves number of players selected 
  saveSelected(event: any){
    console.log("EVENT:",event.value); 
    this.dropDownSelection = event.value; 

  }

  //using OData
  enterGame(){
    this.service.updateClue(this.clue.id!, this.clue).subscribe();

  }

  //using OData
  newClue(){
    this.service.postClue(this.clue).subscribe(); 
  }



}
