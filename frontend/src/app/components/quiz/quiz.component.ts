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







  // https://www.primefaces.org/primeng/listbox
  answersToShow: String[] = [];
  wrongAnswers: String[] = [];

  selectedAnswer: String = "";

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



  public async nextAnswer() {

    if (this.selectedAnswer === "") {
      this.messageService.add({ severity: 'custom', summary: 'Select Answer', detail: 'Select an answer to proceed' });
      return;
    }

    this.spiner = true;

    if (this.currentAnswerNumber < this.quizSize - 1) {
      await this.sleep(500);
      this.validateAnswer();
      this.currentAnswerNumber++;
      this.answer = this.quiz[this.currentAnswerNumber]
      this.selectedAnswer = "";
      this.updateQuestionsForm()
    }

    this.spiner = false;
  }


  validateAnswer() {
    if (this.selectedAnswer !== this.answer.correctAnswer) {
      this.wrongAnswers.push(this.answer.question);
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

    // TODO: construct final message && deal wit X button !!
    this.validateAnswer();

    // var finalMessage = `Wrong answer <br> <li> cood be worst!!! `

    var finalMessage = `Wrong answer number: ` + this.wrongAnswers.length;

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



}











