class CaixaDaLanchonete {
    constructor() {
        this.cardapio = [
            { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
            { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        ]
        this.formasPagamento = ['dinheiro', 'debito', 'credito']
    }
    calcularValorDaCompra(metodoDePagamento, itens) {
        const carrinhoVazio = itens.length === 0

        if (carrinhoVazio) {
            return 'Não há itens no carrinho de compra!';
        }

        const pagamentoInvalido = !this.formasPagamento.includes(metodoDePagamento)
        if (pagamentoInvalido) {
            return 'Forma de pagamento inválida!';
        }
        const sanduiche = itens.find(item => {
            const [codigo] = item.split(',');
            return codigo === 'sanduiche';
        });
        const cafe = itens.find(item => {
            const [codigo] = item.split(',');
            return codigo === 'cafe';
        });
        for (let i = 0; i < itens.length; i++) {
            const itensSeparados = itens[i].split(',')
            const codigo = itensSeparados[0]
            const quantidade = parseInt(itensSeparados[1])

            if (quantidade === 0) {
                return 'Quantidade inválida!'
            }
            const itemCardapio = this.cardapio.find(item => item.codigo === codigo)
            if (!itemCardapio) {
                return 'Item inválido!'
            }
            if (codigo === 'queijo' && !sanduiche) {
                return 'Item extra não pode ser pedido sem o principal'
            }
            if (codigo === 'chantily' && !cafe) {
                return 'Item extra não pode ser pedido sem o principal'
            }
            valorTotal += itemCardapio.valor * quantidade;
        }
    }
}


export { CaixaDaLanchonete };