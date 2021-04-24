class Bind{

    constructor(objeto, view, ...props){
        let proxy = ProxyFactory.create(objeto, props, (objeto) => view.update(objeto));

        view.update(objeto);

        return proxy;
    }
}