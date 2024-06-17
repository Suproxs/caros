import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: String = 'https://freeapi.gerasim.in/api/CarRentalApp/GetCars';
  constructor(private htpp: HttpClient) { }


  getAllCars(){
    debugger;
    return this.htpp.get(`${this.apiUrl}GetCars`)
  }
  createCar(obj: any){
    return this.htpp.post(`${this.apiUrl}CreateNewCar`,obj)
  }
  updateCar(obj: any){
    return this.htpp.put(`${this.apiUrl}UpdateCar`,obj)
  }
  deleteCar(carId: any){
    return this.htpp.delete(`${this.apiUrl}DeleteCarbyCarId?carid=${carId}`)
  }



}
