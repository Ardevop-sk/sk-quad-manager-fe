/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Paragraph } from '../models/paragraph';
import { ParagraphBase } from '../models/paragraph-base';

@Injectable({
  providedIn: 'root',
})
export class ParagraphService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listParagraphs
   */
  static readonly ListParagraphsPath = '/dataset/{datasetId}/paragraph';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listParagraphs()` instead.
   *
   * This method doesn't expect any request body.
   */
  listParagraphs$Response(params: {

    /**
     * The id of the dataset
     */
    datasetId: string;

  }): Observable<StrictHttpResponse<Array<Paragraph>>> {

    const rb = new RequestBuilder(this.rootUrl, ParagraphService.ListParagraphsPath, 'get');
    if (params) {

      rb.path('datasetId', params.datasetId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Paragraph>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listParagraphs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listParagraphs(params: {

    /**
     * The id of the dataset
     */
    datasetId: string;

  }): Observable<Array<Paragraph>> {

    return this.listParagraphs$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Paragraph>>) => r.body as Array<Paragraph>)
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

    const rb = new RequestBuilder(this.rootUrl, ParagraphService.CreateParagraphPath, 'post');
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
   * Path part for operation getParagraph
   */
  static readonly GetParagraphPath = '/paragraph/{paragraphId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getParagraph()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParagraph$Response(params: {

    /**
     * The id of the paragraph to retrieve
     */
    paragraphId: string;

  }): Observable<StrictHttpResponse<Paragraph>> {

    const rb = new RequestBuilder(this.rootUrl, ParagraphService.GetParagraphPath, 'get');
    if (params) {

      rb.path('paragraphId', params.paragraphId);

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
   * To access the full response (for headers, for example), `getParagraph$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParagraph(params: {

    /**
     * The id of the paragraph to retrieve
     */
    paragraphId: string;

  }): Observable<Paragraph> {

    return this.getParagraph$Response(params).pipe(
      map((r: StrictHttpResponse<Paragraph>) => r.body as Paragraph)
    );
  }

  /**
   * Path part for operation deleteParagraph
   */
  static readonly DeleteParagraphPath = '/paragraph/{paragraphId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteParagraph()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteParagraph$Response(params: {

    /**
     * The id of the paragraph to delete
     */
    paragraphId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ParagraphService.DeleteParagraphPath, 'delete');
    if (params) {

      rb.path('paragraphId', params.paragraphId);

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
   * To access the full response (for headers, for example), `deleteParagraph$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteParagraph(params: {

    /**
     * The id of the paragraph to delete
     */
    paragraphId: string;

  }): Observable<void> {

    return this.deleteParagraph$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
