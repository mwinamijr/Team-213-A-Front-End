import React from 'react';
import {Route} from 'react-router-dom';

import History from './containers/History';
import HistoryDetail from './containers/Historydetail';
const BaseRouter = () => {
    return(
        <div>
            <Route exact path='/history' component={History} />
            <Route exact path='/history/:historyID' component={HistoryDetail} />
        </div>
    )
}

export default BaseRouter;