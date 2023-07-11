"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioModule = void 0;
const common_1 = require("@nestjs/common");
const Funcionario_controller_1 = require("./Funcionario.controller");
const funcionario_dm_1 = require("./funcionario.dm");
const email_unico_validator_1 = require("./validacao/email-unico.validator");
let FuncionarioModule = exports.FuncionarioModule = class FuncionarioModule {
};
exports.FuncionarioModule = FuncionarioModule = __decorate([
    (0, common_1.Module)({
        controllers: [Funcionario_controller_1.FuncionarioController],
        providers: [funcionario_dm_1.FuncionariosArmazenados, email_unico_validator_1.EmailUnicoValidator]
    })
], FuncionarioModule);
//# sourceMappingURL=funcionario.module.js.map