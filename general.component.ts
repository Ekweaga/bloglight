import { Component, OnInit } from '@angular/core';
import { BloglightService } from '../bloglight.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  general:any
  constructor(private bloglight:BloglightService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    this.bloglight.getgeneral().subscribe(
      (data)=>{
        console.log(data.articles);
        this.general = data.articles
        this.spinner.hide();

      }
    )
  }

}
