import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AnswerBase, QuestionBase} from '../api/models';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../api/services/question.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  @Output()
  created = new EventEmitter<string>();
  answer: AnswerBase;
  questionId: string;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.answer = {answer_start: 0, author: '', text: ''};
    this.questionId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  saveAnswer() {
    this.questionService.createAnswer({
      questionId: this.questionId,
      body: this.answer
    }).subscribe(() => this.created.emit('complete'));
  }
}
