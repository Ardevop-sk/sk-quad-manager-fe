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
  selection: Selection;
  answerText: string;
  answerStart: number;
  displayedColumns: string[] = ['id', 'answer_start', 'author', 'text', 'actions'];

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.answerText = '';
    this.answerStart = 0;
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

  showSelectedText($event) {
    if ($event.view.getSelection().toString().length > 0) {
      this.answerText = $event.view.getSelection().toString();
      this.answerStart = Math.min($event.view.getSelection().baseOffset, $event.view.getSelection().extentOffset);
    }
  }

}
