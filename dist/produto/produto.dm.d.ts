import { EstoqueProdutoDTO } from "./dto/estoqueProduto.dto copy";
import { ProdutoEntity } from "./produto.entity";
export declare class ProdutosArmazenados {
    #private;
    AdicionarProduto(produto: ProdutoEntity): void;
    get Produtos(): ProdutoEntity[];
    private buscaPorID;
    buscaPorNome(nome: string): Promise<ProdutoEntity>;
    buscaMarca(marca: string): Promise<ProdutoEntity>;
    removeEstoque(id: string, quantidade: EstoqueProdutoDTO): Promise<void>;
    addEstoque(id: string, quantidade: EstoqueProdutoDTO): Promise<void>;
    atualizaProduto(id: string, dadosAtualizacao: Partial<ProdutoEntity>): Promise<ProdutoEntity>;
    removeProduto(id: string): Promise<ProdutoEntity>;
}
