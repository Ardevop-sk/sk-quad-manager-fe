/* tslint:disable */
import { CorpusBase } from './corpus-base';
import { Dataset } from './dataset';
export interface Corpus extends CorpusBase {
  data: Array<Dataset>;
  id?: string;
}
