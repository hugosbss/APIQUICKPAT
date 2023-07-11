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
exports.EmailUnico = exports.EmailUnicoValidator = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const class_validator_1 = require("class-validator");
const usuario_dm_1 = require("../usuario.dm");
let EmailUnicoValidator = exports.EmailUnicoValidator = class EmailUnicoValidator {
    constructor(clsUsuariosArmazenados) {
        this.clsUsuariosArmazenados = clsUsuariosArmazenados;
    }
    async validate(value, validationArguments) {
        const validarEmail = await this.clsUsuariosArmazenados.validaEmail(value);
        return !validarEmail;
    }
};
exports.EmailUnicoValidator = EmailUnicoValidator = __decorate([
    (0, decorators_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [usuario_dm_1.UsuariosArmazenados])
], EmailUnicoValidator);
const EmailUnico = (opcaoValidacao) => {
    return (objeto, propriedade) => {
        (0, class_validator_1.registerDecorator)({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        });
    };
};
exports.EmailUnico = EmailUnico;
//# sourceMappingURL=email-unico.validator.js.map