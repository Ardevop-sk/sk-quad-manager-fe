/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Corpus } from '../models/corpus';
import { CorpusBase } from '../models/corpus-base';

@Injectable({
  providedIn: 'root',
})
export class CorpusService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listCorpus
   */
  static readonly ListCorpusPath = '/corpus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listCorpus()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCorpus$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Corpus>>> {

    const rb = new RequestBuilder(this.rootUrl, CorpusService.ListCorpusPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Corpus>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listCorpus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCorpus(params?: {

  }): Observable<Array<Corpus>> {

    return this.listCorpus$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Corpus>>) => r.body as Array<Corpus>)
    );
  }

  /**
   * Path part for operation createCorpus
   */
  static readonly CreateCorpusPath = '/corpus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCorpus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCorpus$Response(params: {

    body: CorpusBase
  }): Observable<StrictHttpResponse<Corpus>> {

    const rb = new RequestBuilder(this.rootUrl, CorpusService.CreateCorpusPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Corpus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCorpus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCorpus(params: {

    body: CorpusBase
  }): Observable<Corpus> {

    return this.createCorpus$Response(params).pipe(
      map((r: StrictHttpResponse<Corpus>) => r.body as Corpus)
    );
  }

  /**
   * Path part for operation importCorpus
   */
  static readonly ImportCorpusPath = '/corpus/import';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `importCorpus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  importCorpus$Response(params: {

  
  /**
   * JSON object of whole QUAD corpus
   */
  body: Corpus
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CorpusService.ImportCorpusPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `importCorpus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  importCorpus(params: {

  
  /**
   * JSON object of whole QUAD corpus
   */
  body: Corpus
  }): Observable<void> {

    return this.importCorpus$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCorpus
   */
  static readonly GetCorpusPath = '/corpus/{corpusId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCorpus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCorpus$Response(params: {

    /**
     * The id of the corpus to retrieve
     */
    corpusId: string;

  }): Observable<StrictHttpResponse<Corpus>> {

    const rb = new RequestBuilder(this.rootUrl, CorpusService.GetCorpusPath, 'get');
    if (params) {

      rb.path('corpusId', params.corpusId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Corpus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCorpus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCorpus(params: {

    /**
     * The id of the corpus to retrieve
     */
    corpusId: string;

  }): Observable<Corpus> {

    return this.getCorpus$Response(params).pipe(
      map((r: StrictHttpResponse<Corpus>) => r.body as Corpus)
    );
  }

  /**
   * Path part for operation deleteCorpus
   */
  static readonly DeleteCorpusPath = '/corpus/{corpusId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCorpus()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCorpus$Response(params: {

    /**
     * The id of the corpus to delete
     */
    corpusId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CorpusService.DeleteCorpusPath, 'delete');
    if (params) {

      rb.path('corpusId', params.corpusId);

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
   * To access the full response (for headers, for example), `deleteCorpus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCorpus(params: {

    /**
     * The id of the corpus to delete
     */
    corpusId: string;

  }): Observable<void> {

    return this.deleteCorpus$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
