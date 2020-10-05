import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ParagraphBase} from '../api/models/paragraph-base';
import {DatasetService} from '../api/services/dataset.service';
import {ActivatedRoute} from '@angular/router';
import {ParagraphService} from '../api/services/paragraph.service';

@Component({
  selector: 'app-add-paragraph',
  templateUrl: './add-paragraph.component.html',
  styleUrls: ['./add-paragraph.component.css']
})
export class AddParagraphComponent implements OnInit {
  @Output()
  created = new EventEmitter<string>();
  paragraph: ParagraphBase;
  datasetId: string;

  constructor(private activatedRoute: ActivatedRoute, private paragraphService: ParagraphService) {
  }

  ngOnInit(): void {
    this.paragraph = {context: ''};
    this.datasetId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  saveParagraph() {
    this.paragraphService.createParagraph({datasetId: this.datasetId, body: this.paragraph}).subscribe(() => this.created.emit('complete'));

  }


}
