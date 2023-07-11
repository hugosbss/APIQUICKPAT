import { IsNotEmpty, IsString, IsOptional } from "class-validator";



export class AlteraPatrimonioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nome: string;

    @IsString({message: "Modelo inválido"})
    @IsOptional()
    modelo: string;

    @IsString()
    @IsOptional()
    tipo: string;

    @IsString()
    @IsOptional()
    grupo: string;

    @IsString()
    @IsOptional()
    valor: string;

    @IsString()
    @IsOptional()
    descricao: string;

}