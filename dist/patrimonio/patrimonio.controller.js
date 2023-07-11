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
exports.PatrimonioController = void 0;
const common_1 = require("@nestjs/common");
const patrimonio_dto_1 = require("./dto/patrimonio.dto");
const patrimonio_entity_1 = require("./patrimonio.entity");
const patrimonio_dm_1 = require("./patrimonio.dm");
const uuid_1 = require("uuid");
const atualizaPatrimonio_dto_1 = require("./dto/atualizaPatrimonio.dto");
const decorators_1 = require("@nestjs/common/decorators");
const listaPatrimonio_dto_1 = require("./dto/listaPatrimonio.dto");
let PatrimonioController = exports.PatrimonioController = class PatrimonioController {
    constructor(clsPatrimoniosArmazenados) {
        this.clsPatrimoniosArmazenados = clsPatrimoniosArmazenados;
    }
    async RetornoPatrimonios() {
        const funcionariosListados = await this.clsPatrimoniosArmazenados.Patrimonios;
        const listaRetorno = funcionariosListados.map(funcionario => new listaPatrimonio_dto_1.ListaPatrimonioDTO(funcionario.id, funcionario.nome, funcionario.modelo, funcionario.tipo, funcionario.grupo, funcionario.valor, funcionario.descricao));
        return listaRetorno;
    }
    async buscaPatrimonioPorID(id) {
        const patrimonioAtualizado = await this.clsPatrimoniosArmazenados.buscaPatrimonioPorID(id);
        return ({
            patrimonio: patrimonioAtualizado,
            message: 'Patrimonio pesquisado por ID'
        });
    }
    async criaPatrimonio(dadosPatrimonio) {
        var patrimonio = new patrimonio_entity_1.PatrimonioEntity((0, uuid_1.v4)(), dadosPatrimonio.nome, dadosPatrimonio.modelo, dadosPatrimonio.tipo, dadosPatrimonio.grupo, dadosPatrimonio.valor, dadosPatrimonio.descricao);
        var retornoPatrimonio;
        this.clsPatrimoniosArmazenados.AdicionarPatrimonio(patrimonio);
        retornoPatrimonio = {
            id: patrimonio.id,
            message: "Patrimonio Criado"
        };
        return retornoPatrimonio;
    }
    async atualizaPatrimonio(id, novosDados) {
        const patrimonioAtualizado = await this.clsPatrimoniosArmazenados.atualizaPatrimonio(id, novosDados);
        return ({
            patrimonio: patrimonioAtualizado,
            message: 'Patrimonio atualizado'
        });
    }
    async removePatrimonio(id) {
        const patrimonioRemovido = await this.clsPatrimoniosArmazenados.removePatrimonio(id);
        return ({
            patrimonio: patrimonioRemovido,
            message: 'Patrimonio removido'
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatrimonioController.prototype, "RetornoPatrimonios", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatrimonioController.prototype, "buscaPatrimonioPorID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patrimonio_dto_1.CriaPatrimonioDTO]),
    __metadata("design:returntype", Promise)
], PatrimonioController.prototype, "criaPatrimonio", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizaPatrimonio_dto_1.AlteraPatrimonioDTO]),
    __metadata("design:returntype", Promise)
], PatrimonioController.prototype, "atualizaPatrimonio", null);
__decorate([
    (0, decorators_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatrimonioController.prototype, "removePatrimonio", null);
exports.PatrimonioController = PatrimonioController = __decorate([
    (0, common_1.Controller)('/patrimonios'),
    __metadata("design:paramtypes", [patrimonio_dm_1.PatrimoniosArmazenados])
], PatrimonioController);
//# sourceMappingURL=patrimonio.controller.js.map