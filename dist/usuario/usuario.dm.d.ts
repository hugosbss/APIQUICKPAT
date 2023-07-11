import { UsuarioEntity } from "./usuario.entity";
export declare class UsuariosArmazenados {
    #private;
    AdicionarUsuario(usuario: UsuarioEntity): void;
    get Usuarios(): UsuarioEntity[];
    validaEmail(email: string): Promise<boolean>;
    private buscaPorID;
    retornoUsuarioId(id: string): Promise<UsuarioEntity>;
    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    removeUsuario(id: string): Promise<UsuarioEntity>;
}
