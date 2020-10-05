import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Paragraph} from '../api/models/paragraph';
import {ParagraphService} from '../api/services/paragraph.service';
import {QuestionService} from '../api/services/question.service';
import {Question} from '../api/models/question';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  question: Question;
  displayedColumns: string[] = ['id', 'answer_start', 'author', 'text', 'actions'];

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService.getQuestion({questionId: this.activatedRoute.snapshot.paramMap.get('id')})
    .subscribe(question => this.question = question);
  }

  refreshData($event): void {
    this.questionService.getQuestion({questionId: this.activatedRoute.snapshot.paramMap.get('id')})
    .subscribe(question => this.question = question);
  }

  deleteAnswer($event: MouseEvent, question) {
    this.questionService.deleteAnswer({answerId: question.id}).subscribe(() => this.refreshData($event));
  }

}
