import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Paragraph} from '../api/models/paragraph';
import {ParagraphService} from '../api/services/paragraph.service';
import {QuestionService} from '../api/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  paragraph: Paragraph;
  displayedColumns: string[] = ['id', 'question', 'is_impossible', 'actions'];

  constructor(private activatedRoute: ActivatedRoute,
              private paragraphService: ParagraphService,
              private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.paragraphService.getParagraph({paragraphId: this.activatedRoute.snapshot.paramMap.get('id')})
    .subscribe(paragraph => this.paragraph = paragraph);
  }

  refreshData($event): void {
    this.paragraphService.getParagraph({paragraphId: this.activatedRoute.snapshot.paramMap.get('id')})
    .subscribe(paragraph => this.paragraph = paragraph);
  }

  deleteQuestion($event: MouseEvent, question) {
    this.questionService.deleteQuestion({questionId: question.id}).subscribe(() => this.refreshData($event));
  }

}
