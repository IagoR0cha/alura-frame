class NegociacaoService{

    constructor(){
        this._http = new HttpService();
    }



    obterNegociacoesSemana(){

        return this._http.get('negociacoes/semana').then(negociacoes => {
            console.log(negociacoes);
            return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
        })
        .catch(erro =>{
            console.log(erro);
            throw new Error ('Não foi possível obter as negociações da semana!');
        });
    }

    bterNegociacoesAnterior(){

        return this._http.get('negociacoes/anterior').then(negociacoes => {
            console.log(negociacoes);
            return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
        })
        .catch(erro => {
            console.log(erro);
            throw new Error ('Não foi possível obter as negociações da semana anterior!');
        });
    }

    bterNegociacoesRetrasada(){

        return this._http.get('negociacoes/retrasada').then(negociacoes => {
            console.log(negociacoes);
            return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
        })
        .catch(erro => {
            console.log(erro);
            throw new Error ('Não foi possível obter as negociações da semana retrasada!');
        });
    }
}