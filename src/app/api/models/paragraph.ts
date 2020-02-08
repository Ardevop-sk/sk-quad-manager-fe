/* tslint:disable */
import { ParagraphBase } from './paragraph-base';
import { Question } from './question';
export interface Paragraph extends ParagraphBase {
  id?: string;
  qas: Array<Question>;
}
