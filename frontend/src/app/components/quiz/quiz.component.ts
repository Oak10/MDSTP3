import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Quiz } from 'src/app/common/quiz';
import { QuizService } from 'src/app/services/quiz.service';

import { Router } from "@angular/router"


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
  spiner!: boolean;
  answersToShow: String[] = [];
  wrongAnswers: String[] = [];
  selectedAnswer: String = "";
  // DIALOG:
  displayModal!: boolean;
  wrongAnswerMessage!: string;


  constructor(
    private quizService: QuizService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz() {
    this.quizService.getQuizList().subscribe(
      data => {
        this.quiz = data;
        this.currentAnswerNumber = 0
        this.answer = data[this.currentAnswerNumber];
        this.quizSize = this.quiz.length
        this.spiner = false;

        this.updateQuestionsForm()

      });
  }

  updateQuestionsForm() {
    var answersToShowAux = [];
    if (this.answer.answerU != null) {
      answersToShowAux.push(this.answer.answerU)
    }
    if (this.answer.answerD != null) {
      answersToShowAux.push(this.answer.answerD)
    }
    if (this.answer.answerT != null) {
      answersToShowAux.push(this.answer.answerT)
    }
    if (this.answer.answerQ != null) {
      answersToShowAux.push(this.answer.answerQ)
    }
    if (this.answer.answerC != null) {
      answersToShowAux.push(this.answer.answerC)
    }
    if (this.answer.answerS != null) {
      answersToShowAux.push(this.answer.answerS)
    }
    this.answersToShow = answersToShowAux;
  }


  nextAnswer() {
    if (this.selectedAnswer === "") {
      this.messageService.add({ severity: 'custom', summary: 'Select Answer', detail: 'Select an answer to proceed' });
      return;
    }
    if (this.currentAnswerNumber < this.quizSize - 1) {
      this.validateAnswer();
    }
  }


  validateAnswer() {
    if (this.selectedAnswer !== this.answer.correctAnswer) {
      this.wrongAnswers.push(this.answer.question);
      this.wrongAnswerMessage = `Right answer:\n - ` + this.answer.correctAnswer  + `\n\n\nBetter Luck next time!`;
      this.showModalDialog();
      return;
    }
    
    this.setNextAnswer();
  }

  async setNextAnswer(){
    this.spiner = true;
    await this.sleep(500);
    this.displayModal=false
    this.currentAnswerNumber++;
      this.answer = this.quiz[this.currentAnswerNumber]
      this.selectedAnswer = "";
      this.updateQuestionsForm()
      this.spiner = false;
  }


  validateAnswerAndNextQuestion() {
    if (this.selectedAnswer !== this.answer.correctAnswer) {
      this.wrongAnswers.push(this.answer.question);
      this.showModalDialog();
    };
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  confirm() {
    if (this.selectedAnswer === "") {
      this.messageService.add({ severity: 'custom', summary: 'Select Answer', detail: 'Select an answer to proceed' });
      return;
    }

    this.validateAnswer();
    var finalMessage = ""
    var numberRightA = this.quizSize - this.wrongAnswers.length;
    var wrongMessage = `<h4>Right answers:</h4><li>` + numberRightA + ` of ` + this.quizSize + `<br><br><h4>Wrong answer: </h4>`

    if(this.wrongAnswers.length > 0){
      for (let i = 0; i < this.wrongAnswers.length; i++){
        wrongMessage = wrongMessage + `<li>` + this.wrongAnswers[i];
      }
      finalMessage = wrongMessage;
    }else{
      finalMessage = "<h4>Congratulations</h4><br> All answers are correct."
    }

    //https://www.primefaces.org/primeng/dialog
    
    this.confirmationService.confirm({
      message: finalMessage,
      accept: () => {
        this.sleep(500);
        this.spiner = true;
        this.selectedAnswer === "";
        this.currentAnswerNumber = 0;
        this.answer = this.quiz[this.currentAnswerNumber]
        this.selectedAnswer = "";
        this.wrongAnswers = [];
        this.updateQuestionsForm();
        this.spiner = false;
      },
      reject: () => {
        this.router.navigate(['/lesson'])
      }
    });
  }


  showModalDialog() {
    this.displayModal = true;
}


}