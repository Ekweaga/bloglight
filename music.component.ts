import { Component, OnInit } from '@angular/core';
import { BloglightService } from '../bloglight.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
musics:any;
  constructor(private bloglight:BloglightService ) { }

  ngOnInit(): void {
    this.bloglight.getmusic().subscribe(
      (data)=>{
        this.musics = data.articles
      }
    )
  }

}
