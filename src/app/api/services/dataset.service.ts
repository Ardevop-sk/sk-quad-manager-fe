/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Answer } from '../models/answer';
import { Dataset } from '../models/dataset';
import { DatasetBase } from '../models/dataset-base';
import { Paragraph } from '../models/paragraph';
import { ParagraphBase } from '../models/paragraph-base';
import { Question } from '../models/question';
import { QuestionBase } from '../models/question-base';

@Injectable({
  providedIn: 'root',
})
export class DatasetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listDatasets
   */
  static readonly ListDatasetsPath = '/corpus/{corpusId}/dataset';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listDatasets()` instead.
   *
   * This method doesn't expect any request body.
   */
  listDatasets$Response(params: {

    /**
     * The id of the corpus
     */
    corpusId: string;

  }): Observable<StrictHttpResponse<Dataset>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.ListDatasetsPath, 'get');
    if (params) {

      rb.path('corpusId', params.corpusId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Dataset>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listDatasets$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listDatasets(params: {

    /**
     * The id of the corpus
     */
    corpusId: string;

  }): Observable<Dataset> {

    return this.listDatasets$Response(params).pipe(
      map((r: StrictHttpResponse<Dataset>) => r.body as Dataset)
    );
  }

  /**
   * Path part for operation createCorpusDataset
   */
  static readonly CreateCorpusDatasetPath = '/corpus/{corpusId}/dataset';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCorpusDataset()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCorpusDataset$Response(params: {

    /**
     * The id of the corpus
     */
    corpusId: string;

  
  /**
   * Desc
   */
  body: DatasetBase
  }): Observable<StrictHttpResponse<Dataset>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.CreateCorpusDatasetPath, 'post');
    if (params) {

      rb.path('corpusId', params.corpusId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Dataset>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCorpusDataset$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCorpusDataset(params: {

    /**
     * The id of the corpus
     */
    corpusId: string;

  
  /**
   * Desc
   */
  body: DatasetBase
  }): Observable<Dataset> {

    return this.createCorpusDataset$Response(params).pipe(
      map((r: StrictHttpResponse<Dataset>) => r.body as Dataset)
    );
  }

  /**
   * Path part for operation getDataset
   */
  static readonly GetDatasetPath = '/dataset/{datasetId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDataset()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataset$Response(params: {

    /**
     * The id of the corpus dataset to retrieve
     */
    datasetId: string;

  }): Observable<StrictHttpResponse<Dataset>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.GetDatasetPath, 'get');
    if (params) {

      rb.path('datasetId', params.datasetId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Dataset>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDataset$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDataset(params: {

    /**
     * The id of the corpus dataset to retrieve
     */
    datasetId: string;

  }): Observable<Dataset> {

    return this.getDataset$Response(params).pipe(
      map((r: StrictHttpResponse<Dataset>) => r.body as Dataset)
    );
  }

  /**
   * Path part for operation createParagraph
   */
  static readonly CreateParagraphPath = '/dataset/{datasetId}/paragraph';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createParagraph()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createParagraph$Response(params: {

    /**
     * The id of the dataset
     */
    datasetId: string;

  
  /**
   * Desc
   */
  body: ParagraphBase
  }): Observable<StrictHttpResponse<Paragraph>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.CreateParagraphPath, 'post');
    if (params) {

      rb.path('datasetId', params.datasetId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Paragraph>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createParagraph$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createParagraph(params: {

    /**
     * The id of the dataset
     */
    datasetId: string;

  
  /**
   * Desc
   */
  body: ParagraphBase
  }): Observable<Paragraph> {

    return this.createParagraph$Response(params).pipe(
      map((r: StrictHttpResponse<Paragraph>) => r.body as Paragraph)
    );
  }

  /**
   * Path part for operation createQuestion
   */
  static readonly CreateQuestionPath = '/paragraph/{paragraphId}/question';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuestion$Response(params: {

    /**
     * The id of the paragraph
     */
    paragraphId: string;

  
  /**
   * Desc
   */
  body: QuestionBase
  }): Observable<StrictHttpResponse<Question>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.CreateQuestionPath, 'post');
    if (params) {

      rb.path('paragraphId', params.paragraphId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Question>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createQuestion(params: {

    /**
     * The id of the paragraph
     */
    paragraphId: string;

  
  /**
   * Desc
   */
  body: QuestionBase
  }): Observable<Question> {

    return this.createQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<Question>) => r.body as Question)
    );
  }

  /**
   * Path part for operation createAnswer
   */
  static readonly CreateAnswerPath = '/question/{questionId}/answer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAnswer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAnswer$Response(params: {

    /**
     * The id of the question
     */
    questionId: string;

  
  /**
   * Desc
   */
  body: Answer
  }): Observable<StrictHttpResponse<Answer>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.CreateAnswerPath, 'post');
    if (params) {

      rb.path('questionId', params.questionId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Answer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAnswer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAnswer(params: {

    /**
     * The id of the question
     */
    questionId: string;

  
  /**
   * Desc
   */
  body: Answer
  }): Observable<Answer> {

    return this.createAnswer$Response(params).pipe(
      map((r: StrictHttpResponse<Answer>) => r.body as Answer)
    );
  }

  /**
   * Path part for operation createPlausibleAnswer
   */
  static readonly CreatePlausibleAnswerPath = '/question/{questionId}/plausibleAnswer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPlausibleAnswer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPlausibleAnswer$Response(params: {

    /**
     * The id of the question
     */
    questionId: string;

  
  /**
   * Desc
   */
  body: Answer
  }): Observable<StrictHttpResponse<Answer>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.CreatePlausibleAnswerPath, 'post');
    if (params) {

      rb.path('questionId', params.questionId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Answer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPlausibleAnswer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPlausibleAnswer(params: {

    /**
     * The id of the question
     */
    questionId: string;

  
  /**
   * Desc
   */
  body: Answer
  }): Observable<Answer> {

    return this.createPlausibleAnswer$Response(params).pipe(
      map((r: StrictHttpResponse<Answer>) => r.body as Answer)
    );
  }

}
