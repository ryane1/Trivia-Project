import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  score: number = 0;
  username: string;

  constructor(private http: HttpClient, private router: Router) { }
  getQuestions() {
    return this.http.get("/api/questions", { responseType: "json" });
  }

  getScores() {
    return this.http.get("/api/scores", { responseType: "json" });
  }

  postScores(newScore) {
    return this.http.post("/api/scores", newScore, { responseType: "json" });
  }

  quizScore(form, questions) {
    let responses = Object.values(form.value);
    for (let i=1; i < responses.length; i++) {
      if (responses[i] == questions[i-1].answer) {
        this.score++;
      }
    }
  
    this.router.navigate(['/results']);
    this.postScores({ username: form.value.username, score: this.score }).subscribe(response => {
      questions = response;
    });
  }

}
