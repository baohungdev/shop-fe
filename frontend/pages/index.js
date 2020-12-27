import React from 'react';
import { connect } from 'react-redux';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import LayoutShop from '../components/partials/shop/LayoutShop';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import ShopBanner from '../components/partials/shop/ShopBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HeaderTechnology from '../components/shared/headers/HeaderTechnology';
import {
    getProducts,
    getProductsByCategory,
    getProductsByBrand,
} from '../store/product/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        if (Object.entries(ctx.query).length > 0) {
            if (ctx.query.category) {
                ctx.store.dispatch(getProductsByCategory(ctx.query.category));
            } else {
                if (ctx.query.brand !== '') {
                    ctx.store.dispatch(getProductsByBrand(ctx.query.brand));
                } else {
                    ctx.store.dispatch(getProducts());
                }
            }
        } else {
            ctx.store.dispatch(getProducts());
        }
        return { query: ctx.query };
    }

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop Default',
            },
        ];
        const { allProducts } = this.props;
        return (
            <div className="site-content">
                <HeaderTechnology />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    <div className="ps-container">
                        <ShopBanner />
                        <SiteFeatures />
                        <LayoutShop products={allProducts} />
                    </div>
                </div>
                <FooterFullwidth />
            </div>
        );
    }
}

export default connect((state) => state.product)(ShopDefaultPage);
