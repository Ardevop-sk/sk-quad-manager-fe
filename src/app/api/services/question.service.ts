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
import { AnswerBase } from '../models/answer-base';
import { Question } from '../models/question';
import { QuestionBase } from '../models/question-base';

@Injectable({
  providedIn: 'root',
})
export class QuestionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
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

    const rb = new RequestBuilder(this.rootUrl, QuestionService.CreateQuestionPath, 'post');
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
   * Path part for operation getQuestion
   */
  static readonly GetQuestionPath = '/question/{questionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestion$Response(params: {

    /**
     * The id of the question to retrieve
     */
    questionId: string;

  }): Observable<StrictHttpResponse<Question>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.GetQuestionPath, 'get');
    if (params) {

      rb.path('questionId', params.questionId);

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
   * To access the full response (for headers, for example), `getQuestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestion(params: {

    /**
     * The id of the question to retrieve
     */
    questionId: string;

  }): Observable<Question> {

    return this.getQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<Question>) => r.body as Question)
    );
  }

  /**
   * Path part for operation deleteQuestion
   */
  static readonly DeleteQuestionPath = '/question/{questionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteQuestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuestion$Response(params: {

    /**
     * The id of the question to delete
     */
    questionId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.DeleteQuestionPath, 'delete');
    if (params) {

      rb.path('questionId', params.questionId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteQuestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuestion(params: {

    /**
     * The id of the question to delete
     */
    questionId: string;

  }): Observable<void> {

    return this.deleteQuestion$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
  body: AnswerBase
  }): Observable<StrictHttpResponse<Answer>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.CreateAnswerPath, 'post');
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
  body: AnswerBase
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

    const rb = new RequestBuilder(this.rootUrl, QuestionService.CreatePlausibleAnswerPath, 'post');
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

  /**
   * Path part for operation deleteAnswer
   */
  static readonly DeleteAnswerPath = '/answer/{answerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAnswer()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAnswer$Response(params: {

    /**
     * The id of the answer to delete
     */
    answerId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionService.DeleteAnswerPath, 'delete');
    if (params) {

      rb.path('answerId', params.answerId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAnswer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAnswer(params: {

    /**
     * The id of the answer to delete
     */
    answerId: string;

  }): Observable<void> {

    return this.deleteAnswer$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
