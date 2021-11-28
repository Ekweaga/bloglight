import { Component, OnInit } from '@angular/core';
import { BloglightService } from '../bloglight.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
techs:any;
  constructor(private bloglight:BloglightService ) { }

  ngOnInit(): void {
    this.bloglight.gettechnology().subscribe(
      (data)=>{
        this.techs = data.articles
      }
    )
  }

}
