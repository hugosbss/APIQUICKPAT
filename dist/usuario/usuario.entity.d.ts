export declare class UsuarioEntity {
    #private;
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    confirmaemail: string;
    telefoneum: string;
    telefonedois: string;
    login: string;
    constructor(id: string, nome: string, sobrenome: string, email: string, confirmaemail: string, telefoneum: string, telefonedois: string, login: string, senha: string);
    get senha(): string;
    set senha(senhanova: string);
}
