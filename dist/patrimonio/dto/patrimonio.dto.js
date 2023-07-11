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
exports.CriaPatrimonioDTO = void 0;
const class_validator_1 = require("class-validator");
class CriaPatrimonioDTO {
}
exports.CriaPatrimonioDTO = CriaPatrimonioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nome não pode ser vazio" }),
    __metadata("design:type", String)
], CriaPatrimonioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Status inválido" }),
    __metadata("design:type", String)
], CriaPatrimonioDTO.prototype, "modelo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriaPatrimonioDTO.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriaPatrimonioDTO.prototype, "grupo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Medida Inválida" }),
    __metadata("design:type", String)
], CriaPatrimonioDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Cor inválida" }),
    __metadata("design:type", String)
], CriaPatrimonioDTO.prototype, "descricao", void 0);
//# sourceMappingURL=patrimonio.dto.js.map