export class CreateEmployeeDto {
    name: string;
    position: string;
    salary: number;
  }
  
  export class UpdateEmployeeDto {
    name?: string;
    position?: string;
    salary?: number;
  }