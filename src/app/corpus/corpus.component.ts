import {Component, OnInit} from '@angular/core';
import {CorpusService} from '../api/services/corpus.service';
import {Corpus} from '../api/models/corpus';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-corpus',
  templateUrl: './corpus.component.html',
  styleUrls: ['./corpus.component.css']
})
export class CorpusComponent implements OnInit {

  corpuses: Corpus[];
  displayedColumns: string[] = ['id', 'version', 'language', 'actions'];

  constructor(private corpusService: CorpusService) {
  }

  ngOnInit(): void {
    this.corpusService.listCorpus().subscribe(corpuses => this.corpuses = corpuses);
  }

  deleteCorpus($event: MouseEvent, oneCorpus): void {
    this.corpusService.deleteCorpus({corpusId: oneCorpus.id}).subscribe(
      () => this.refreshData($event)
    );
  }

  refreshData($event): void {
    this.corpusService.listCorpus().subscribe(corpuses => this.corpuses = corpuses);
  }
}
