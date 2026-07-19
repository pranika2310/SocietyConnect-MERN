import MainLayout from "../layouts/MainLayout";
import MarketplaceList from "../components/MarketplaceList";
import "../assets/styles/marketplace.css";

function Marketplace() {
    return (
        <MainLayout>
            <div className="marketplace-container">
                <h1>Marketplace</h1>
                <MarketplaceList />
            </div>
        </MainLayout>
    );
}

export default Marketplace;