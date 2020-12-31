import React from 'react';
import NavigationPanel from "../components/NavigationPanel";
import Footer from "../components/Footer";
import { WishListIndex } from '../components/Cart/WishListIndex';

class WishList extends React.Component {

    render() {
        return (
            <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
            <div className="page-wrapper">
                <NavigationPanel></NavigationPanel>
                <div className="page-container">
                    <WishListIndex />
                </div>
                <Footer></Footer>
            </div>
        </div>
        )
    }
}

export default WishList;