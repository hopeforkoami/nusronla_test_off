import React from 'react';

const FourZeroFour = () => {

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h1>404 ERROR</h1>
                    <p>Page non trouvé</p>
                </div>
            </div>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(FourZeroFour, comparisonFn);
