function MarketplaceCard({title,price,seller}){

    return(

        <div className="market-card">

            <div className="product-image">

                📦

            </div>

            <h3>{title}</h3>

            <h2>{price}</h2>

            <p>Seller : {seller}</p>

            <button className="primary-btn">
                Contact Seller
            </button>

        </div>

    );

}

export default MarketplaceCard;