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
exports.AlteraProdutoDTO = void 0;
const class_validator_1 = require("class-validator");
class AlteraProdutoDTO {
}
exports.AlteraProdutoDTO = AlteraProdutoDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nome não pode ser vazio" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlteraProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "Status inválido" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AlteraProdutoDTO.prototype, "ativo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AlteraProdutoDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AlteraProdutoDTO.prototype, "estoque", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "Medida inválida" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], AlteraProdutoDTO.prototype, "medidas", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "Cor inválida" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], AlteraProdutoDTO.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Marca inválida" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlteraProdutoDTO.prototype, "marca", void 0);
//# sourceMappingURL=atualizaProduto.dto.js.map