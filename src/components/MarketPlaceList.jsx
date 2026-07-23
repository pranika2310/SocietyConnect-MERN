import MarketplaceCard from "./MarketplaceCard";
import marketplace from "../data/marketplace";

function MarketplaceList() {

    return (

        <div className="marketplace-list">

            {marketplace.map((item) => (

                <MarketplaceCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    seller={item.seller}
                />

            ))}

        </div>

    );

}

export default MarketplaceList;