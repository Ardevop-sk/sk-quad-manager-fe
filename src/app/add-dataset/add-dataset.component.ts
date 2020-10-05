import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatasetBase} from '../api/models/dataset-base';
import {DatasetService} from '../api/services/dataset.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.css']
})
export class AddDatasetComponent implements OnInit {

  dataset: DatasetBase;
  corpusId: string;
  @Output()
  created = new EventEmitter<string>();

  constructor(private activatedRoute: ActivatedRoute, private datasetService: DatasetService) {
  }

  ngOnInit(): void {
    this.dataset = {source: '', title: ''};
    this.corpusId = this.activatedRoute.snapshot.paramMap.get('id');
  }


  saveDataset() {
    this.datasetService.createCorpusDataset({corpusId: this.corpusId, body: this.dataset}).subscribe(() => this.created.emit('complete'));
  }

}
