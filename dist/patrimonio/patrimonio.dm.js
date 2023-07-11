"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _PatrimoniosArmazenados_patrimonios;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatrimoniosArmazenados = void 0;
const decorators_1 = require("@nestjs/common/decorators");
let PatrimoniosArmazenados = exports.PatrimoniosArmazenados = class PatrimoniosArmazenados {
    constructor() {
        _PatrimoniosArmazenados_patrimonios.set(this, []);
    }
    AdicionarPatrimonio(patrimonio) {
        __classPrivateFieldGet(this, _PatrimoniosArmazenados_patrimonios, "f").push(patrimonio);
    }
    get Patrimonios() {
        return __classPrivateFieldGet(this, _PatrimoniosArmazenados_patrimonios, "f");
    }
    buscaPorID(id) {
        const possivelpatrimonio = __classPrivateFieldGet(this, _PatrimoniosArmazenados_patrimonios, "f").find(Patrimoniosalvo => Patrimoniosalvo.id === id);
        if (!possivelpatrimonio) {
            throw new Error('Patrimonio não encontrado');
        }
        return possivelpatrimonio;
    }
    async buscaPatrimonioPorID(id) {
        const possivelPatrimonio = __classPrivateFieldGet(this, _PatrimoniosArmazenados_patrimonios, "f").find(patrimoniosSalvo => patrimoniosSalvo.id === id);
        if (!possivelPatrimonio) {
            throw new Error('Patrimonio não encontrado');
        }
        return possivelPatrimonio;
    }
    async atualizaPatrimonio(id, dadosAtualizacao) {
        const patrimonio = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            patrimonio[chave] = valor;
        });
        return patrimonio;
    }
    async removePatrimonio(id) {
        const patrimonio = this.buscaPorID(id);
        __classPrivateFieldSet(this, _PatrimoniosArmazenados_patrimonios, __classPrivateFieldGet(this, _PatrimoniosArmazenados_patrimonios, "f").filter(patrimonioSalvo => patrimonioSalvo.id !== id), "f");
        return patrimonio;
    }
};
_PatrimoniosArmazenados_patrimonios = new WeakMap();
exports.PatrimoniosArmazenados = PatrimoniosArmazenados = __decorate([
    (0, decorators_1.Injectable)()
], PatrimoniosArmazenados);
//# sourceMappingURL=patrimonio.dm.js.map