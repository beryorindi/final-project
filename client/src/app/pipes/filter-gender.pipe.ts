import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee.model';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {

  transform(employees: Employee[], gender: string): Employee[] {
    if (!employees) {
      return null;
    } else if (!gender) {
      return employees;
    }

    return employees.filter(employee =>
      employee.gender.toLowerCase() == gender
    );
  }

}
