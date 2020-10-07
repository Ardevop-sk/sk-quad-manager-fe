import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnswerBase} from '../api/models';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../api/services/question.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  @Input()
  text: string;
  @Input()
  answerStart: number;
  @Output()
  created = new EventEmitter<string>();
  author = '';
  questionId: string;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  saveAnswer() {
    this.questionService.createAnswer({
      questionId: this.questionId,
      body: {answer_start: this.answerStart, author: this.author, text: this.text}
    }).subscribe(() => this.created.emit('complete'));
  }
}
