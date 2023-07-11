import { Injectable } from "@nestjs/common/decorators";
import { PatrimonioEntity } from "./patrimonio.entity";


@Injectable()
export class PatrimoniosArmazenados {
    #patrimonios: PatrimonioEntity[] = [];

    AdicionarPatrimonio(patrimonio: PatrimonioEntity){
        this.#patrimonios.push(patrimonio);
    }

    get Patrimonios(){
        return this.#patrimonios
    }

    private buscaPorID(id: string){
        const possivelpatrimonio = this.#patrimonios.find(
            Patrimoniosalvo => Patrimoniosalvo.id === id
        );

        if (!possivelpatrimonio){
            throw new Error('Patrimonio não encontrado')
        }
        return possivelpatrimonio
    }

    async buscaPatrimonioPorID (id: string){
        const possivelPatrimonio = this.#patrimonios.find(
            patrimoniosSalvo => patrimoniosSalvo.id === id
        );

        if (!possivelPatrimonio){
            throw new Error('Patrimonio não encontrado')
        }
        return possivelPatrimonio
    }

    async atualizaPatrimonio(id: string, dadosAtualizacao: Partial<PatrimonioEntity>){
        const patrimonio = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (chave === 'id'){
                    return;
                }

                patrimonio[chave] = valor;
            }
            )

        return patrimonio;
    }
    
    async removePatrimonio(id: string){
        const patrimonio = this.buscaPorID(id);

        this.#patrimonios = this.#patrimonios.filter(
            patrimonioSalvo => patrimonioSalvo.id !== id
        )

        return patrimonio;
    }

}