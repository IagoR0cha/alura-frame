class NegociacoesView extends View{

    constructor(elemento){
        super(elemento);
    }

    _template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordena('data')">DATA</th>
                    <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n =>
                    ` 
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>  
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                ).join("")}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${model.volumeTotal //processa o arry e no final gera um único resultado. 
                                                                                         //0.0 é o valor inicial da variavel "total". A primeira variavel, no caso "total", é a variavel
                                                                                         // que será incrementada com n.obtemVolume() 
                }</td>
            </tfoot>
        </table>        
        `
    }

}