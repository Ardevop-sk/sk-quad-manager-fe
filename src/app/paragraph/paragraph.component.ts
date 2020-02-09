import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatasetService} from '../api/services/dataset.service';
import {Paragraph} from '../api/models/paragraph';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  paragraphs: Paragraph[];
  datasetId: string;

  constructor(private activatedRoute: ActivatedRoute, private datasetService: DatasetService) {
  }

  ngOnInit(): void {
    this.datasetId = this.activatedRoute.snapshot.paramMap.get('id');
    this.datasetService.listParagraphs({datasetId: this.datasetId}).toPromise().then(paragraphs => this.paragraphs = paragraphs);
  }

  deleteParagraph($event: MouseEvent, paragraph) {

  }

  addQuestion($event: MouseEvent, paragraph) {

  }

  listQuestions($event: MouseEvent, paragraph) {

  }
}
