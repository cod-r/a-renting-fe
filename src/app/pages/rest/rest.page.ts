import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

    myData: String[];

    ngOnInit() {
        this.getData().subscribe(
            (data: String[]) => {
                this.myData = data;
                console.log(data);
            }
        );
    }

    getData(): Observable<String[]> {
        return this.http.get<String[]>(this.apiUrl);
    }

    doRefresh(event) {
        this.getData().subscribe(
            (data: String[]) => {
                this.myData = data;
                console.log(data);
            }
        );
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
}
