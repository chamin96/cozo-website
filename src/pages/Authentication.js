import React from 'react';
import { SignIn } from '../components/Authentication/SignIn';
import NavigationPanel from '../components/NavigationPanel';

class Authentication extends React.Component {

    render() {
        return (
            <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
                <div className="page-wrapper">
                    <NavigationPanel></NavigationPanel>
                    <div className="page-container">
                        <SignIn />
                    </div>
                </div>
            </div>
        )
    }
}

export default Authentication;