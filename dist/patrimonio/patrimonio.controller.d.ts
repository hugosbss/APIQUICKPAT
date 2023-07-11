import { CriaPatrimonioDTO } from "./dto/patrimonio.dto";
import { PatrimonioEntity } from "./patrimonio.entity";
import { PatrimoniosArmazenados } from "./patrimonio.dm";
import { AlteraPatrimonioDTO } from "./dto/atualizaPatrimonio.dto";
import { ListaPatrimonioDTO } from "./dto/listaPatrimonio.dto";
export declare class PatrimonioController {
    private clsPatrimoniosArmazenados;
    constructor(clsPatrimoniosArmazenados: PatrimoniosArmazenados);
    RetornoPatrimonios(): Promise<ListaPatrimonioDTO[]>;
    buscaPatrimonioPorID(id: string): Promise<{
        patrimonio: PatrimonioEntity;
        message: string;
    }>;
    criaPatrimonio(dadosPatrimonio: CriaPatrimonioDTO): Promise<any>;
    atualizaPatrimonio(id: string, novosDados: AlteraPatrimonioDTO): Promise<{
        patrimonio: PatrimonioEntity;
        message: string;
    }>;
    removePatrimonio(id: string): Promise<{
        patrimonio: PatrimonioEntity;
        message: string;
    }>;
}
