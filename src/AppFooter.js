import React from 'react';

export const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <img src={'assets/layout/images/logo.png'} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">Nog Dev House</span>
        </div>
    );
}
