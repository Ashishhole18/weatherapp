import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CitywiseService {

  constructor(private http:HttpClient) { }


  public getWeatherByCity(city):Observable<any>
  {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=7d91b1e949454d4995d0dbf7c9a7702c&units=Imperial").pipe(
      tap(data=>{
        console.log(data)
      }
      )
    );
  }
}
