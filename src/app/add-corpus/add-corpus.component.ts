import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CorpusService} from '../api/services/corpus.service';
import {CorpusBase} from '../api/models/corpus-base';

@Component({
  selector: 'app-add-corpus',
  templateUrl: './add-corpus.component.html',
  styleUrls: ['./add-corpus.component.css']
})
export class AddCorpusComponent implements OnInit {

  corpus: CorpusBase;
  @Output()
  created = new EventEmitter<string>();

  constructor(private corpusService: CorpusService) {
  }

  ngOnInit(): void {
    this.corpus = {version: '', language: ''};
  }


  saveCorpus() {
    this.corpusService.createCorpus({body: this.corpus}).subscribe(() => this.created.emit('complete'));
  }

}
