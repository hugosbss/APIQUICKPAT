import { CriaFuncionarioDTO } from "./dto/funcionario";
import { FuncionarioEntity } from "./funcionario.entity";
import { FuncionariosArmazenados } from "./funcionario.dm";
import { ListaFuncionarioDTO } from "./dto/listaFuncionario.dto";
import { AlteraFuncionarioDTO } from "./dto/atualizaFuncionario.dto";
export declare class FuncionarioController {
    private clsFuncionariosArmazenados;
    constructor(clsFuncionariosArmazenados: FuncionariosArmazenados);
    RetornoFuncionarios(): Promise<ListaFuncionarioDTO[]>;
    retornoFuncionarioId(id: string): Promise<{
        funcionario: FuncionarioEntity;
        message: string;
    }>;
    criaFuncionario(dadosFuncionario: CriaFuncionarioDTO): Promise<any>;
    atualizaFuncionario(id: string, novosDados: AlteraFuncionarioDTO): Promise<{
        Funcionario: FuncionarioEntity;
        message: string;
    }>;
    removeFuncionario(id: string): Promise<{
        Funcionario: FuncionarioEntity;
        message: string;
    }>;
}
