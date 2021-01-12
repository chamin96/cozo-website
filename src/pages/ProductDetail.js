import React from 'react';
import { withRouter } from "react-router";
import NavigationPanel from '../components/NavigationPanel';
import Footer from '../components/Footer';
import { ProductDetails } from '../components/ProductDetail/ProductDetails';
import { getProductById } from '../api/action/ProductAction';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: {}
        }
    }

    componentDidMount() {
        const { location } = this.props;
        getProductById(location.state).then(res => {
            this.setState({ productDetails: res.data})
        })
    }

    render() {
        return (
            <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
            <div className="page-wrapper">
            <NavigationPanel></NavigationPanel>
            <div className="page-container">
                <ProductDetails productDetails={this.state.productDetails}/>
            </div>
            <Footer></Footer>
            </div>
        </div>
        )
    }
}

export default withRouter(ProductDetail);