import { FuncionarioEntity } from "./funcionario.entity";
export declare class FuncionariosArmazenados {
    #private;
    AdicionarFuncionario(funcionario: FuncionarioEntity): void;
    get Funcionarios(): FuncionarioEntity[];
    validaEmail(email: string): Promise<boolean>;
    private buscaPorID;
    retornoFuncionarioId(id: string): Promise<FuncionarioEntity>;
    atualizaFuncionario(id: string, dadosAtualizacao: Partial<FuncionarioEntity>): Promise<FuncionarioEntity>;
    removeFuncionario(id: string): Promise<FuncionarioEntity>;
}
