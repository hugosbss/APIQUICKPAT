"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _UsuarioEntity_senha;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
class UsuarioEntity {
    constructor(id, nome, sobrenome, email, confirmaemail, telefoneum, telefonedois, login, senha) {
        _UsuarioEntity_senha.set(this, void 0);
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.confirmaemail = confirmaemail;
        this.telefoneum = telefoneum;
        this.telefonedois = telefonedois;
        this.login = login;
        __classPrivateFieldSet(this, _UsuarioEntity_senha, senha, "f");
    }
    get senha() {
        return '**********';
    }
    set senha(senhanova) {
        __classPrivateFieldSet(this, _UsuarioEntity_senha, senhanova, "f");
    }
}
exports.UsuarioEntity = UsuarioEntity;
_UsuarioEntity_senha = new WeakMap();
//# sourceMappingURL=usuario.entity.js.map