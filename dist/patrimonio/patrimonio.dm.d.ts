import { PatrimonioEntity } from "./patrimonio.entity";
export declare class PatrimoniosArmazenados {
    #private;
    AdicionarPatrimonio(patrimonio: PatrimonioEntity): void;
    get Patrimonios(): PatrimonioEntity[];
    private buscaPorID;
    buscaPatrimonioPorID(id: string): Promise<PatrimonioEntity>;
    atualizaPatrimonio(id: string, dadosAtualizacao: Partial<PatrimonioEntity>): Promise<PatrimonioEntity>;
    removePatrimonio(id: string): Promise<PatrimonioEntity>;
}
