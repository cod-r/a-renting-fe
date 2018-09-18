import {Component, OnInit} from '@angular/core';
import {CarModel} from './car-model/car.model';
import {CarListService} from './car-list.service';

@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.page.html',
    styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit {

    cars: CarModel[];
    // carModel1: CarModel = new CarModel(1, 'Skoda Rapid', 4, 'Manual', 'B-55-CAR', true,
    //     9, 'assets/img/skoda-rapid.png', 'Benzina', 4);
    // carModel2: CarModel = new CarModel(1, 'Skoda Citigo', 4, 'Automatic', 'B-15-CAR', true,
    //     9, 'assets/img/skoda-citigo.png', 'Benzina', 4);
    // carModel3: CarModel = new CarModel(1, 'VW Transporter', 4, 'Automatic', 'B-23-CAR', true,
    //     9, 'assets/img/vw-transporter-shuttler.png', 'Benzina', 8);

    constructor(private carListService: CarListService) {
    }

    ngOnInit() {
        this.onChooseCar();
        // this.cars.push(this.carModel1, this.carModel2, this.carModel3);
    }

    onChooseCar() {
        this.carListService.getCars().subscribe(
            (cars: CarModel[]) => {
                this.cars = cars;
            }
        );

    }

}
