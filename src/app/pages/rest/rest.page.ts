import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomData} from './CustomData';

@Component({
    selector: 'app-rest',
    templateUrl: './rest.page.html',
    styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {
    constructor(private http: HttpClient) {
    }

    private apiUrl = 'http://10.6.1.47:8084/rest-demo';
    // private apiUrl = 'http://localhost:8084/rest-demo';

    myData: CustomData[];

    ngOnInit() {
        this.getData().subscribe(
            (data: CustomData[]) => {
                this.myData = [];
                this.myData = data;
            }
        );
    }

    getData(): Observable<CustomData[]> {
        return this.http.get<CustomData[]>(this.apiUrl);
    }

    doRefresh(event) {
        this.getData().subscribe(
            (data: CustomData[]) => {
                this.myData = [];
                this.myData = data;
            }
        );
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
}
