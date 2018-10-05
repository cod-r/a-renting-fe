import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CarModel} from './car-model/car.model';
import {Observable} from 'rxjs/internal/Observable';

const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({ providedIn: 'root' })
export class CarListService {

    // private apiUrl = 'http://192.168.100.6:8083/api/cars';
    private apiUrl = 'http://localhost:8083/api/cars';

    constructor(private http: HttpClient) {
    }

    getCars(): Observable<CarModel[]> {
        return this.http.get<CarModel[]>(this.apiUrl);
    }
}
