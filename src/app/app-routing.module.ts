import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CorpusComponent} from './corpus/corpus.component';
import {DatasetComponent} from './dataset/dataset.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {QuestionComponent} from './question/question.component';
import {AnswerComponent} from './answer/answer.component';


const routes: Routes = [
  {path: 'corpus', component: CorpusComponent},
  {path: 'corpus/:id', component: DatasetComponent},
  {path: 'dataset/:id/paragraph', component: ParagraphComponent},
  {path: 'paragraph/:id/question', component: QuestionComponent},
  {path: 'question/:id/answer', component: AnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
