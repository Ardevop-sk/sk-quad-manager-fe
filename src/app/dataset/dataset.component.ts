import {Component, OnInit} from '@angular/core';
import {Dataset} from '../api/models/dataset';
import {DatasetService} from '../api/services/dataset.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {

  datasets: Dataset[];
  corpusId: string;

  constructor(private activatedRoute: ActivatedRoute, private datasetService: DatasetService) {
  }

  ngOnInit(): void {
    this.corpusId = this.activatedRoute.snapshot.paramMap.get('id');
    this.datasetService.listDatasets({corpusId: this.corpusId}).toPromise().then(datasets => this.datasets = datasets);
  }

  deleteDataset($event: MouseEvent, dataset) {

  }
}
