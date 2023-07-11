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
exports.CriaProdutoDTO = void 0;
const class_validator_1 = require("class-validator");
class CriaProdutoDTO {
}
exports.CriaProdutoDTO = CriaProdutoDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nome não pode ser vazio" }),
    __metadata("design:type", String)
], CriaProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "Status inválido" }),
    __metadata("design:type", Boolean)
], CriaProdutoDTO.prototype, "ativo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CriaProdutoDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CriaProdutoDTO.prototype, "estoque", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "Medida Inválida" }),
    __metadata("design:type", Array)
], CriaProdutoDTO.prototype, "medidas", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "Cor inválida" }),
    __metadata("design:type", Array)
], CriaProdutoDTO.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Marca Inválida" }),
    __metadata("design:type", String)
], CriaProdutoDTO.prototype, "marca", void 0);
//# sourceMappingURL=produto.dto.js.map