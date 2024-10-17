"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("../../employees/entity/employee.entity");
const swagger_1 = require("@nestjs/swagger");
let Attendance = class Attendance {
};
exports.Attendance = Attendance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique ID of the attendance record',
        example: 1,
    }),
    __metadata("design:type", Number)
], Attendance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    (0, swagger_1.ApiProperty)({
        description: 'The date of the attendance (YYYY-MM-DD)',
        example: '2024-10-17',
    }),
    __metadata("design:type", String)
], Attendance.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    (0, swagger_1.ApiProperty)({
        description: 'The time when the employee checked in (HH:MM:SS)',
        example: '08:30:00',
    }),
    __metadata("design:type", String)
], Attendance.prototype, "timeIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true }),
    (0, swagger_1.ApiProperty)({
        description: 'The time when the employee checked out (HH:MM:SS)',
        example: '17:00:00',
    }),
    __metadata("design:type", String)
], Attendance.prototype, "timeOut", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.attendances),
    (0, swagger_1.ApiProperty)({
        description: 'The employee who attended',
        type: () => employee_entity_1.Employee,
    }),
    __metadata("design:type", employee_entity_1.Employee)
], Attendance.prototype, "employee", void 0);
exports.Attendance = Attendance = __decorate([
    (0, typeorm_1.Entity)()
], Attendance);
//# sourceMappingURL=attendance.entity.js.map