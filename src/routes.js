import React from 'react';
import {Route} from 'react-router-dom';

import History from './containers/History';

const BaseRouter = () => {
    return(
        <div>
            <Route exact path='/history' component={History} />
        </div>
    )
}

export default BaseRouter;