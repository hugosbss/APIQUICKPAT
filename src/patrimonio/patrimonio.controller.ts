import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CriaPatrimonioDTO } from "./dto/patrimonio.dto";
import { PatrimonioEntity } from "./patrimonio.entity";
import { PatrimoniosArmazenados } from "./patrimonio.dm";
import { v4 as uuid} from "uuid";
import { AlteraPatrimonioDTO } from "./dto/atualizaPatrimonio.dto";
import { Delete } from "@nestjs/common/decorators";
import { ListaPatrimonioDTO } from "./dto/listaPatrimonio.dto";


@Controller('/patrimonios')


export class PatrimonioController{

    constructor(private clsPatrimoniosArmazenados : PatrimoniosArmazenados ){
    }   

    @Get()
    async RetornoPatrimonios(){
        const funcionariosListados = await this.clsPatrimoniosArmazenados.Patrimonios;
        const listaRetorno = funcionariosListados.map(
            funcionario => new ListaPatrimonioDTO(
                funcionario.id,
                funcionario.nome,
                funcionario.modelo,
                funcionario.tipo,
                funcionario.grupo,
                funcionario.valor,
                funcionario.descricao
            )
        );
        return listaRetorno;
    }

    @Get('/:id')
    async buscaPatrimonioPorID (@Param('id') id: string){
        const patrimonioAtualizado = await this.clsPatrimoniosArmazenados.buscaPatrimonioPorID(id)
        return({
            patrimonio: patrimonioAtualizado,
            message: 'Patrimonio pesquisado por ID'
        })
    }  


    @Post()
    async criaPatrimonio(@Body() dadosPatrimonio: CriaPatrimonioDTO){

        var patrimonio = new PatrimonioEntity (uuid(), dadosPatrimonio.nome, dadosPatrimonio.modelo, dadosPatrimonio.tipo, dadosPatrimonio.grupo, dadosPatrimonio.valor, dadosPatrimonio.descricao)

        var retornoPatrimonio;
        
        this.clsPatrimoniosArmazenados.AdicionarPatrimonio(patrimonio);
        retornoPatrimonio={
            id: patrimonio.id,
            message: "Patrimonio Criado"
        }

        return retornoPatrimonio;
    }



    @Put('/:id')
    async atualizaPatrimonio (@Param('id') id: string, @Body() novosDados: AlteraPatrimonioDTO){
        const patrimonioAtualizado = await this.clsPatrimoniosArmazenados.atualizaPatrimonio(id, novosDados)
        return({
            patrimonio: patrimonioAtualizado,
            message: 'Patrimonio atualizado'
        })

    }    
    
    @Delete('/:id')
    async removePatrimonio(@Param('id') id: string){
        const patrimonioRemovido = await this.clsPatrimoniosArmazenados.removePatrimonio(id);
        return({
            patrimonio: patrimonioRemovido,
            message: 'Patrimonio removido'
        })
    }

}



