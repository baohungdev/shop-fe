import React from 'react';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
import ConumerElectronics from '../components/partials/homepage/home-default/ConumerElectronics';
import Clothings from '../components/partials/homepage/home-default/Clothings';
import GardenAndKitchen from '../components/partials/homepage/home-default/GardenAndKitchen';
import NewArrivals from '../components/partials/homepage/home-default/NewArrivals';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import '../scss/home-default.scss';
import HeaderTechnology from '../components/shared/headers/HeaderTechnology';
const Index = () => {
    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <main id="homepage-1">
                <HomeBanner />
                <SiteFeatures />
                <HomeAdsColumns />
                <HomeDefaultTopCategories />
                <ConumerElectronics />
                <Clothings />
                <GardenAndKitchen />
                <NewArrivals />
            </main>
            <FooterFullwidth />
        </div>
    );
};
export default Index;
