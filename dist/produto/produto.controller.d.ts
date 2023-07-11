import { CriaProdutoDTO } from "./dto/produto.dto";
import { ProdutoEntity } from "./produto.entity";
import { ProdutosArmazenados } from "./produto.dm";
import { ListaProdutoDTO } from "./dto/listaProduto.dto";
import { AlteraProdutoDTO } from "./dto/atualizaProduto.dto";
import { EstoqueProdutoDTO } from "./dto/estoqueProduto.dto copy";
export declare class ProdutoController {
    private clsProdutosArmazenados;
    constructor(clsProdutosArmazenados: ProdutosArmazenados);
    buscaPorNome(nome: string): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
    buscaMarca(marca: string): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
    buscaCor(cor: string): Promise<ListaProdutoDTO[]>;
    buscaMedida(medida: string): Promise<ListaProdutoDTO[]>;
    RetornoProduto(): Promise<ListaProdutoDTO[]>;
    criaProduto(dadosProduto: CriaProdutoDTO): Promise<any>;
    removerEstoque(id: string, quantidade: EstoqueProdutoDTO): Promise<{
        produto: void;
        message: string;
    }>;
    addEstoque(id: string, quantidade: EstoqueProdutoDTO): Promise<{
        produto: void;
        message: string;
    }>;
    atualizaProduto(id: string, novosDados: AlteraProdutoDTO): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
    removeProduto(id: string): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
}
