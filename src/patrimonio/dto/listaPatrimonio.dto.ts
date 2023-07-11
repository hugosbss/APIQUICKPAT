export class ListaPatrimonioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly modelo: string,
        readonly tipo: string,
        readonly grupo: string,
        readonly valor: string,
        readonly descricao: string
    ){}
}