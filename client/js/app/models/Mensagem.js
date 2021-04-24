class Mensagem{
    constructor(mensagem = ""){
       this._mensagem = mensagem;
       
    }

    get texto(){
        return this._mensagem;
    }

    set texto(mensagem){
        this._mensagem = mensagem;
        
    }

}