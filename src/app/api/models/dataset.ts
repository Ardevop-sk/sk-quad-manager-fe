/* tslint:disable */
import { DatasetBase } from './dataset-base';
import { Paragraph } from './paragraph';
export interface Dataset extends DatasetBase {
  id?: string;
  paragraphs: Array<Paragraph>;
}
