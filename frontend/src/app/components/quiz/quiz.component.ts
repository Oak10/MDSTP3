import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Quiz } from 'src/app/common/quiz';
import { QuizService } from 'src/app/services/quiz.service';

import { Router } from "@angular/router"
import { ScoreService } from 'src/app/services/score.service';
import { Score } from 'src/app/common/score';


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
  showSpiner!: boolean;
  showResults = false;
  answersToShow: String[] = [];
  wrongAnswers: String[] = [];
  selectedAnswer: String = "";
  // DIALOG:
  displayModal!: boolean;
  wrongAnswerMessage!: string;
  //DIALOGRSULT
  displayModalScore!: boolean;
  scores: Score[] = [];
  currentScore = 0;
  userName!: string;



  constructor(
    private quizService: QuizService,
    private router: Router,
    private messageService: MessageService,
    private scoreService: ScoreService) { }


  ngOnInit(): void {
    this.getQuiz();
    this.userName = "default01";
  }


  getQuiz() {
    this.quizService.getQuizList().subscribe(
      data => {
        this.quiz = data;
        this.setToFirstAnswer();
        this.updateQuestionsForm()
      });
  }


  setToFirstAnswer() {
    this.currentAnswerNumber = 0
    this.answer = this.quiz[this.currentAnswerNumber];
    this.quizSize = this.quiz.length
    this.showSpiner = false;
    this.showResults = false
    this.selectedAnswer = "";
    this.wrongAnswers = [];
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

    this.selectedAnswer = "";
  }


  nextAnswer() {
    if (this.selectedAnswer === "") {
      this.messageService.add({ severity: 'custom', summary: 'Select Answer', detail: 'Select an answer to proceed' });
      return;
    }

    this.validateAnswer();
  }


  async validateAnswer() {
    if (this.selectedAnswer !== this.answer.correctAnswer) {
      this.wrongAnswers.push(this.answer.question);
      this.wrongAnswerMessage = `Right answer:\n    ` + this.answer.correctAnswer + `\n\n\nBetter Luck next time!`;
      this.showModalDialog();
      return;
    }

    if (this.quizSize - 1 != this.currentAnswerNumber) {
      this.setNextAnswer();
      return
    }

    this.showSpiner = true;
    await this.sleep(500);
    this.setToShowResults();
    this.showSpiner = false;
  }


  async setNextAnswer() {
    this.showSpiner = true;
    await this.sleep(500);
    this.displayModal = false
    this.displayModalScore = false;
    this.currentAnswerNumber++;
    this.answer = this.quiz[this.currentAnswerNumber]
    this.updateQuestionsForm()
    this.showSpiner = false;
  }


  async setToShowResults() {
    this.showSpiner = true;
    this.showResults = true;
    this.displayModal = false;
    await this.sleep(500);
    this.showSpiner = false;

  }


  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  showModalDialog() {
    this.displayModal = true;
  }

  showModalDialogScore() {
    if (this.wrongAnswers.length == 0 || this.quizSize == 0) {
      this.currentScore = 100;
    } else if (this.wrongAnswers.length == this.quizSize) {
      this.currentScore = 0;
    } else {
      this.currentScore = 100 - (Math.floor((this.wrongAnswers.length / this.quizSize) * 100));
    }
    this.updateScoreList();

  }

  navigateToLesson() {
    this.router.navigate(['/lesson']);
  }

  updateScoreList() {
    this.scoreService.getTopScoresList().subscribe(
      data => {
        this.scores = data;
        this.displayModalScore = true;
      });
  }

  async registerNewScore() {
    this.scoreService.registerNew(this.userName, this.currentScore);
    this.displayModalScore = false;
    this.showSpiner = true;
    await this.sleep(500);
    this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'The score list has been updated' });
    this.showSpiner = false;
  
  }


}