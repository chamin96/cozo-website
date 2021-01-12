import React, { Component } from 'react';
import NavigationPanel from '../components/NavigationPanel';
import Footer from '../components/Footer';
import { Professional } from '../components/JoinAsProfessional';

class JoinAsProfessional extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
             <div className="page-wrapper">
             <NavigationPanel></NavigationPanel>
             <div className="page-container">
                 <Professional />
             </div>
             <Footer></Footer>
             </div>
         </div>
         );
    }
}
 
export default JoinAsProfessional;