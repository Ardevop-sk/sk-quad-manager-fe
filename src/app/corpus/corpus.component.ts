import {Component, OnInit} from '@angular/core';
import {CorpusService} from '../api/services/corpus.service';
import {Corpus} from '../api/models/corpus';

@Component({
  selector: 'app-corpus',
  templateUrl: './corpus.component.html',
  styleUrls: ['./corpus.component.css']
})
export class CorpusComponent implements OnInit {

  corpus: Corpus[];

  constructor(private corpusService: CorpusService) {
  }

  ngOnInit(): void {
    this.corpusService.listCorpus().toPromise().then(corpus => this.corpus = corpus);
  }

  deleteCorpus($event: MouseEvent, oneCorpus) {

  }
}
