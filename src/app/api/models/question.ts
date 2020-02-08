/* tslint:disable */
import { Answer } from './answer';
import { QuestionBase } from './question-base';
export interface Question extends QuestionBase {
  answers: Array<Answer>;
  id: string;
  plaussible_answers?: Array<Answer>;
}
