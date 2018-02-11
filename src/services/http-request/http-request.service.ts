import {
  injectable,
} from 'inversify';
import 'reflect-metadata';

import {
  HttpRequestServiceInterface,
} from './';

@injectable()
export class HttpRequestService implements HttpRequestServiceInterface {
  public get<T>(url: string): Promise<T> {
    return fetch(url).then((resp) => resp.json());
  }

  public post<T>(url: string, data: any): Promise<T> {
    return fetch(
      url,
      {
        body: data ? JSON.stringify(data) : undefined,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    ).then((resp) => resp.json());
  }
}
