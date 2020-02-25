import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-showtemp',
  templateUrl: './showtemp.component.html',
  styleUrls: ['./showtemp.component.css']
})
export class ShowtempComponent implements OnInit {

  constructor(private router:Router) { }

  city:String="";
  ngOnInit() {
  }
  getCity()
  {
    
    console.log(this.city);
    this.router.navigate(['/gettemp',this.city]);
  }

 

}
