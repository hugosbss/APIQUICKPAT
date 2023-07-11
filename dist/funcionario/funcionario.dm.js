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
var _FuncionariosArmazenados_Funcionarios;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionariosArmazenados = void 0;
const decorators_1 = require("@nestjs/common/decorators");
let FuncionariosArmazenados = exports.FuncionariosArmazenados = class FuncionariosArmazenados {
    constructor() {
        _FuncionariosArmazenados_Funcionarios.set(this, []);
    }
    AdicionarFuncionario(funcionario) {
        __classPrivateFieldGet(this, _FuncionariosArmazenados_Funcionarios, "f").push(funcionario);
    }
    get Funcionarios() {
        return __classPrivateFieldGet(this, _FuncionariosArmazenados_Funcionarios, "f");
    }
    async validaEmail(email) {
        const possivelfuncionario = __classPrivateFieldGet(this, _FuncionariosArmazenados_Funcionarios, "f").find(funcionario => funcionario.email === email);
        return (possivelfuncionario !== undefined);
    }
    buscaPorID(id) {
        const possivelfuncionario = __classPrivateFieldGet(this, _FuncionariosArmazenados_Funcionarios, "f").find(Funcionariosalvo => Funcionariosalvo.id === id);
        if (!possivelfuncionario) {
            throw new Error('funcionario não encontrado');
        }
        return possivelfuncionario;
    }
    async retornoFuncionarioId(id) {
        const possivelfuncionario = __classPrivateFieldGet(this, _FuncionariosArmazenados_Funcionarios, "f").find(Funcionariosalvo => Funcionariosalvo.id === id);
        if (!possivelfuncionario) {
            throw new Error('funcionario não encontrado');
        }
        return possivelfuncionario;
    }
    async atualizaFuncionario(id, dadosAtualizacao) {
        const funcionario = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            funcionario[chave] = valor;
        });
        return funcionario;
    }
    async removeFuncionario(id) {
        const funcionario = this.buscaPorID(id);
        __classPrivateFieldSet(this, _FuncionariosArmazenados_Funcionarios, __classPrivateFieldGet(this, _FuncionariosArmazenados_Funcionarios, "f").filter(Funcionariosalvo => Funcionariosalvo.id !== id), "f");
        return funcionario;
    }
};
_FuncionariosArmazenados_Funcionarios = new WeakMap();
exports.FuncionariosArmazenados = FuncionariosArmazenados = __decorate([
    (0, decorators_1.Injectable)()
], FuncionariosArmazenados);
//# sourceMappingURL=funcionario.dm.js.map