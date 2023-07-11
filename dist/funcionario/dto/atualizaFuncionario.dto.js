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
exports.AlteraFuncionarioDTO = void 0;
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class AlteraFuncionarioDTO {
}
exports.AlteraFuncionarioDTO = AlteraFuncionarioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nome não pode ser vazio" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlteraFuncionarioDTO.prototype, "nomecompleto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Cargo não pode ser vazio" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlteraFuncionarioDTO.prototype, "cargo", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: "Email invalido" }),
    (0, email_unico_validator_1.EmailUnico)({ message: "Já existe funcionário com este email cadastrado" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlteraFuncionarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Telefone inválido" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlteraFuncionarioDTO.prototype, "telefoneum", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Departamento não pode ser vazio" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlteraFuncionarioDTO.prototype, "departamento", void 0);
//# sourceMappingURL=atualizaFuncionario.dto.js.map