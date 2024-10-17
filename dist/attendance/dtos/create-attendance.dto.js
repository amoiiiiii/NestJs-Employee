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
exports.CreateAttendanceDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAttendanceDto {
}
exports.CreateAttendanceDto = CreateAttendanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date of attendance (YYYY-MM-DD)',
        example: '2024-10-17',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The time when the employee checked in (HH:MM:SS)',
        example: '08:30:00',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "timeIn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The time when the employee checked out (HH:MM:SS)',
        example: '17:00:00',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "timeOut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the employee attending',
        example: '12345',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAttendanceDto.prototype, "employeeId", void 0);
//# sourceMappingURL=create-attendance.dto.js.map