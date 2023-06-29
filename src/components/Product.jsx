import "./Product.css"

export default function Product({id,name,gambar,harga,setEditedShoe,shoes,setShoes}){
    return(
        <>
        <div className="product-wrapper card">
            <div className="image-wrapper">
                <img src={gambar} alt={name} />
            </div>
            <div className="detail-wrapper">
                <h4>{name}</h4>
                <p>{harga}</p>
                <button onClick={() => setEditedShoe ({id,name,gambar,harga})}>Edit</button>
                <button onClick={() => setShoes (shoes.filter((shoe) => shoe.id !== id))}>Delete</button>
            </div>
        </div>
        </>
    )
}