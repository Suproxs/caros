import { Component,OnInit, inject } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {


  carList: any[]=[];
  
  carService = inject(CarService);

  ngOnInit(): void {
    debugger;
    this.getCars();
  }

  getCars(){
    debugger;
    this.carService.getAllCars().subscribe((res:any)=>{
      this.carList = res.data;
    },error=>{

    })
  }
}
