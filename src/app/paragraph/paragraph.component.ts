import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatasetService} from '../api/services/dataset.service';
import {Paragraph} from '../api/models/paragraph';
import {ParagraphService} from '../api/services/paragraph.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  paragraphs: Paragraph[];
  datasetId: string;
  displayedColumns: string[] = ['id', 'context', 'actions'];

  constructor(private activatedRoute: ActivatedRoute, private paragraphService: ParagraphService) {
  }

  ngOnInit(): void {
    this.datasetId = this.activatedRoute.snapshot.paramMap.get('id');
    this.paragraphService.listParagraphs({datasetId: this.datasetId}).subscribe(paragraphs => this.paragraphs = paragraphs);
  }

  refreshData($event): void {
    this.paragraphService.listParagraphs({datasetId: this.datasetId}).subscribe(paragraphs => this.paragraphs = paragraphs);
  }

  deleteParagraph($event: MouseEvent, paragraph) {
    this.paragraphService.deleteParagraph({paragraphId: paragraph.id}).subscribe(()=>this.refreshData($event));
  }
}
