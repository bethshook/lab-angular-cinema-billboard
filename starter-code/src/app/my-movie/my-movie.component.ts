import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieListService} from '../movie-list.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private service:MovieListService) { }

  movie: any

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.movie = this.service.getMovie(params.id)
    })
  }

}


