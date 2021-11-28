import { Component, OnInit } from '@angular/core';
import { BloglightService } from '../bloglight.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
entertains:any;
  constructor(private bloglight:BloglightService ) { }

  ngOnInit(): void {
    this.bloglight.getentertainment().subscribe(
      (data)=>{
        this.entertains = data.articles
      }
    )
  }

}
