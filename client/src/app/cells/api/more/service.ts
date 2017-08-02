import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { CellType, ICell, fromServer } from '../../model';

const GetNewCell = gql`
        subscription GetNewCell($type:CellType!) {
            newCell (type:$type) {
              id
              name
              type
              color
              size
            }
        }`;

@Injectable()
export class SubscribeMoreCellsAPIService {
  constructor(private apollo: Apollo) {
  }

  getNewCell(type: CellType): Observable<ICell> {
    return this.apollo.subscribe({
      query: GetNewCell,
      variables: {
        type: type
      }
    });
  }
}