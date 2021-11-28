import { Component, OnInit } from '@angular/core';
import { BloglightService } from '../bloglight.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: any;

  constructor(private bloglight:BloglightService ) { }

  ngOnInit(): void {
    this.bloglight.getbusiness().subscribe(
      (data)=>{
        this.business = data.articles
      }
    )
  }

}

