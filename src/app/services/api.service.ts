import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Clue } from "../models/clue";

@Injectable({
    providedIn: 'root'
  }) 

  export class ApiService{
    constructor(private http: HttpClient){

    }

    getClue(): Observable<any> {
        return this.http.get<any>(environment.ApiUri + '/odata/Clues(5)' 
        //+ nominationId
        )
          .pipe(map(response => response));
    }

    updateClue(id: number, update: Clue): Observable<any> {
        return this.http.patch(environment.ApiUri + '/odata/Clues('+id+')', update
        )
        .pipe(map(response => response));
    }

    postClue(newClue: Clue): Observable<any>{
        return this.http.post(environment.ApiUri + '/odata/Clues', newClue)
        .pipe(map(response => response)); 
    }


  }