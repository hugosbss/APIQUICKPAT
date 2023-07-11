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
exports.CriaFuncionarioDTO = void 0;
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class CriaFuncionarioDTO {
}
exports.CriaFuncionarioDTO = CriaFuncionarioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nome não pode ser vazio" }),
    __metadata("design:type", String)
], CriaFuncionarioDTO.prototype, "nomecompleto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Cargo não pode ser vazio" }),
    __metadata("design:type", String)
], CriaFuncionarioDTO.prototype, "cargo", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: "Email invalido" }),
    (0, email_unico_validator_1.EmailUnico)({ message: "Já existe funcionário com este email cadastrado" }),
    __metadata("design:type", String)
], CriaFuncionarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: "Email invalido" }),
    (0, email_unico_validator_1.EmailUnico)({ message: "Já existe funcionário com este email cadastrado" }),
    __metadata("design:type", String)
], CriaFuncionarioDTO.prototype, "confirmaemail", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Telefone inválido" }),
    __metadata("design:type", String)
], CriaFuncionarioDTO.prototype, "telefoneum", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Departamento não pode estar vazio" }),
    __metadata("design:type", String)
], CriaFuncionarioDTO.prototype, "departamento", void 0);
//# sourceMappingURL=funcionario.js.map