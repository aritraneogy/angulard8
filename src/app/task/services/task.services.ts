import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import { environment } from '../../../environments/environment';
import {ITasks} from "../tasks";


@Injectable()
export class TaskService {

    private actionUrl: string;

    constructor(private http: Http) {
        this.actionUrl = environment.apiurl;
    }

    getTasks(): Observable<ITasks[]> {
         return this.http
             .get(this.actionUrl)
             .map((response: Response) => {
                 return <ITasks[]>response.json();
             })
             .catch(this.handleError);
    }
	
	private handleError(error: Response) {
         return Observable.throw(error.statusText);
    }
}
