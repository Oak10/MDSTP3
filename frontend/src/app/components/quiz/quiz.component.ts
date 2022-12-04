import { Component } from '@angular/core';
import { Quiz } from 'src/app/common/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
    quiz: Quiz[] = [];
    answer!: Quiz;
    currentAnswerNumber!: number;
    quizSize!: number;



  constructor (private quizService: QuizService){}

  ngOnInit(): void {
    this.getQuiz();
  }


  getQuiz(){
    this.quizService.getQuizList().subscribe(
      data => {
        this.quiz = data;
        this.currentAnswerNumber = 0
        this.answer = data[this.currentAnswerNumber];
        this.quizSize = this.quiz.length
        
      });
  }


    public async nextAnswer() {
    //this.spiner = true;

    if (this.currentAnswerNumber < this.quizSize - 1){
      await this.sleep(200);
      this.currentAnswerNumber ++;
      this.answer = this.quiz[this.currentAnswerNumber]
    }

    //this.spiner = false;
  }


    public async lastAnswer() {
    if(this.currentAnswerNumber > 0){
      await this.sleep(500);
      this.currentAnswerNumber --;
      this.answer = this.quiz[this.currentAnswerNumber]
    }
  }



    private sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

}






 





  

