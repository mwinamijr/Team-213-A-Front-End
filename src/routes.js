import React from 'react';
import {Route} from 'react-router-dom';

import History from './containers/History';
import HomePage from './containers/HomePage';
import HistoryDetail from './containers/Historydetail';
import HistoryForm from './components/HistoryForm';

const BaseRouter = () => {
    return(
        <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/history' component={History} />
            <Route exact path='/history/:historyID' component={HistoryDetail} />
            <Route exact path='/addHistory' component={HistoryForm} />

        </div>
    )
}

export default BaseRouter;