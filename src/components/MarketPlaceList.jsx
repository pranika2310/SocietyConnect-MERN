import MarketplaceCard from "./MarketplaceCard";

function MarketplaceList() {

    const products = [

        {
            id:1,
            title:"Study Table",
            price:"₹3500",
            seller:"Rahul",
        },

        {
            id:2,
            title:"Office Chair",
            price:"₹1800",
            seller:"Ananya",
        },

        {
            id:3,
            title:"Microwave Oven",
            price:"₹4500",
            seller:"Amit",
        },

        {
            id:4,
            title:"Bicycle",
            price:"₹6000",
            seller:"Neha",
        }

    ];

    return(

        <div className="market-grid">

            {products.map(product=>(

                <MarketplaceCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    seller={product.seller}
                />

            ))}

        </div>

    );

}

export default MarketplaceList;