import Item  from "./item"

const Itemlist = ({products,titulo}) => {
    
    return(
        <>
            <h2>{titulo} </h2>

            <div className="grilla">
                {products.map((prod) =>
                < Item products={prod} key={prod.id} />
                )}
            </div>
        </>

    )
}

export default Itemlist


// key REAC siempre va a pedir ese atributo para hacer el metodo "map"