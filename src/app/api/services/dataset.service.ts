/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Dataset } from '../models/dataset';
import { DatasetBase } from '../models/dataset-base';

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

  }): Observable<StrictHttpResponse<Array<Dataset>>> {

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
        return r as StrictHttpResponse<Array<Dataset>>;
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

  }): Observable<Array<Dataset>> {

    return this.listDatasets$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Dataset>>) => r.body as Array<Dataset>)
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
   * Path part for operation deleteDataset
   */
  static readonly DeleteDatasetPath = '/dataset/{datasetId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDataset()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDataset$Response(params: {

    /**
     * The id of the dataset to delete
     */
    datasetId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetService.DeleteDatasetPath, 'delete');
    if (params) {

      rb.path('datasetId', params.datasetId);

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
   * To access the full response (for headers, for example), `deleteDataset$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDataset(params: {

    /**
     * The id of the dataset to delete
     */
    datasetId: string;

  }): Observable<void> {

    return this.deleteDataset$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
