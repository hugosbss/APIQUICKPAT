

export class PatrimonioEntity{
    id: string;
    nome: string;
    modelo: string;
    tipo: string;
    grupo: string;
    valor: string;
    descricao: string;


    constructor(id:string, nome: string, modelo: string, tipo: string, grupo: string, valor: string, descricao: string){
        this.id = id;
        this.nome = nome;
        this.modelo = modelo;
        this.tipo = tipo;
        this.grupo = grupo;
        this.valor = valor;
        this.descricao = descricao;  
    }   

    
}