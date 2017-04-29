import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee.model';

@Pipe({
  name: 'filterLocation'
})
export class FilterLocationPipe implements PipeTransform {

  transform(employees: Employee[], location: String): Employee[] {
    if(!employees){
      return null;
    }else if(!location){
      return employees;
    }
    return employees.filter(
      employee => employee.emplocation.id == location
    );
  }

}
