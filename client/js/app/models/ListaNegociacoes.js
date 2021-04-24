class ListaNegocoacoes{
    
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        
        
    }

    get negociacoes(){
        // return this._negociacoes;
        return [].concat(this._negociacoes); //cria uma copia da lista original, assim se alguem querer mudar a lista, a alteração será feita, somente, na lista cópia
    }

    esvazia(){
        this._negociacoes = [];
        
    }

    get volumeTotal(){
        return this._negociacoes.reduce((total, n) => total + n.volume, 0);
        }

    ordena(criterio){
        this._negociacoes.sort(criterio);
    }

    inverteOrdem(){
        this._negociacoes.reverse();
    }


}