import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  
  scores: any = [];
  userScore: number;
  
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.userScore = this.quizService.score;
  }

}
