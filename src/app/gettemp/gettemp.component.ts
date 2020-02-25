import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { CitywiseService } from '../citywise.service';
@Component({
  selector: 'app-gettemp',
  templateUrl: './gettemp.component.html',
  styleUrls: ['./gettemp.component.css']
})
export class GettempComponent implements OnInit {

  constructor(private route:ActivatedRoute,private src:CitywiseService,private router:Router) { }

  data:any;
  data1:any;
  weather:object;
  coord:object;
  main:object;
  city:string="";
  sysobj:object;
  temp:number;
  description:string="";
  country:string="";
  lon:number;
  lat:number;
  ngOnInit() {
     this.data1=this.route.snapshot.paramMap.get('city');
    console.log(this.data1);
    this.src.getWeatherByCity(this.data1).subscribe(
      prd=>{
        this.data=prd;
        this.weather=this.data['weather'][0];
        this.city=this.data.name;
        this.sysobj=this.data['sys'];
        this.coord=this.data['coord']
        this.main=this.data['main'];
        this.temp=this.main['temp'];
        this.temp=Math.round((this.temp-32)*(5/9));
        this.description=this.weather['description'];
        this.country=this.sysobj['country'];
        this.lon=this.coord['lon'];
        this.lat=this.coord['lat'];
        console.log("response",this.data);
        console.log("array",this.weather);
        console.log("TIme",this.temp);

        
        
      }

      )
  }

}
