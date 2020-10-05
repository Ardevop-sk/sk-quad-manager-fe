import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from './api/api.module';
import {CorpusComponent} from './corpus/corpus.component';
import {DatasetComponent} from './dataset/dataset.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddCorpusComponent } from './add-corpus/add-corpus.component';
import { AddDatasetComponent } from './add-dataset/add-dataset.component';
import { QuestionComponent } from './question/question.component';
import {FormsModule} from '@angular/forms';
import { AddParagraphComponent } from './add-paragraph/add-paragraph.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AnswerComponent} from './answer/answer.component';
import {AddAnswerComponent} from './add-answer/add-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    CorpusComponent,
    DatasetComponent,
    ParagraphComponent,
    AddCorpusComponent,
    AddParagraphComponent,
    AddQuestionComponent,
    AddDatasetComponent,
    QuestionComponent,
    AnswerComponent,
    AddAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'http://localhost:8080'}),
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
