import React from "react";
import { withRouter } from "react-router";
import NavigationPanel from "../components/NavigationPanel";
import Footer from "../components/Footer";
import { CheckoutIndex } from "../components/Checkout";

class Checkout extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
        <div className="page-wrapper">
          <NavigationPanel></NavigationPanel>
          <div className="page-container">
              <CheckoutIndex locationParams={this.props.location}/>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Checkout);
