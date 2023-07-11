import { IsEmail, IsNotEmpty, IsString} from "class-validator";


export class CriaPatrimonioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;

    @IsString({message: "Status inválido"})
    modelo: string;

    @IsString()
    tipo: string;

    @IsString()
    grupo: string;
    
    @IsString({message: "Medida Inválida"})
    valor: string;

    @IsString({message: "Cor inválida"})
    descricao: string;

}