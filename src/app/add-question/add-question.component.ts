import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionBase} from '../api/models';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../api/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output()
  created = new EventEmitter<string>();
  question: QuestionBase;
  paragraphId: string;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.question = {question: '', is_impossible: false};
    this.paragraphId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  saveQuestion() {
    this.questionService.createQuestion({
      paragraphId: this.paragraphId,
      body: this.question
    }).subscribe(() => this.created.emit('complete'));
  }
}
