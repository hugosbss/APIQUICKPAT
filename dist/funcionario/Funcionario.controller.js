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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioController = void 0;
const common_1 = require("@nestjs/common");
const funcionario_1 = require("./dto/funcionario");
const funcionario_entity_1 = require("./funcionario.entity");
const funcionario_dm_1 = require("./funcionario.dm");
const uuid_1 = require("uuid");
const listaFuncionario_dto_1 = require("./dto/listaFuncionario.dto");
const atualizaFuncionario_dto_1 = require("./dto/atualizaFuncionario.dto");
const decorators_1 = require("@nestjs/common/decorators");
let FuncionarioController = exports.FuncionarioController = class FuncionarioController {
    constructor(clsFuncionariosArmazenados) {
        this.clsFuncionariosArmazenados = clsFuncionariosArmazenados;
    }
    async RetornoFuncionarios() {
        const funcionariosListados = await this.clsFuncionariosArmazenados.Funcionarios;
        const listaRetorno = funcionariosListados.map(funcionario => new listaFuncionario_dto_1.ListaFuncionarioDTO(funcionario.id, funcionario.nomecompleto, funcionario.cargo, funcionario.email, funcionario.confirmaemail, funcionario.telefoneum, funcionario.departamento));
        return listaRetorno;
    }
    async retornoFuncionarioId(id) {
        const funcionarioporid = await this.clsFuncionariosArmazenados.retornoFuncionarioId(id);
        return ({
            funcionario: funcionarioporid,
            message: 'Funcionário solicitado'
        });
    }
    async criaFuncionario(dadosFuncionario) {
        var funcionario = new funcionario_entity_1.FuncionarioEntity((0, uuid_1.v4)(), dadosFuncionario.nomecompleto, dadosFuncionario.cargo, dadosFuncionario.email, dadosFuncionario.confirmaemail, dadosFuncionario.telefoneum, dadosFuncionario.departamento);
        var retornoFuncionario;
        this.clsFuncionariosArmazenados.AdicionarFuncionario(funcionario);
        retornoFuncionario = {
            id: funcionario.id,
            message: "Funcionário Criado"
        };
        return retornoFuncionario;
    }
    async atualizaFuncionario(id, novosDados) {
        const FuncionarioAtualizado = await this.clsFuncionariosArmazenados.atualizaFuncionario(id, novosDados);
        return ({
            Funcionario: FuncionarioAtualizado,
            message: 'Funcionário atualizado'
        });
    }
    async removeFuncionario(id) {
        const FuncionarioRemovido = await this.clsFuncionariosArmazenados.removeFuncionario(id);
        return ({
            Funcionario: FuncionarioRemovido,
            message: 'Funcionário removido'
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "RetornoFuncionarios", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "retornoFuncionarioId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [funcionario_1.CriaFuncionarioDTO]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "criaFuncionario", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizaFuncionario_dto_1.AlteraFuncionarioDTO]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "atualizaFuncionario", null);
__decorate([
    (0, decorators_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "removeFuncionario", null);
exports.FuncionarioController = FuncionarioController = __decorate([
    (0, common_1.Controller)('/funcionarios'),
    __metadata("design:paramtypes", [funcionario_dm_1.FuncionariosArmazenados])
], FuncionarioController);
//# sourceMappingURL=Funcionario.controller.js.map