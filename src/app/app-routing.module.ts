import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CorpusComponent} from './corpus/corpus.component';
import {DatasetComponent} from './dataset/dataset.component';
import {ParagraphComponent} from './paragraph/paragraph.component';


const routes: Routes = [
  {path: 'corpus', component: CorpusComponent},
  {path: 'corpus/:id', component: DatasetComponent},
  {path: 'dataset/:id/paragraph', component: ParagraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
