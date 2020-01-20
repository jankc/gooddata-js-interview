// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import GrossProfit from '../GrossProfit';
import '@gooddata/react-components/styles/css/main.css';

export default function() {
    const grossProfitOptions = {
        projectId: 'xms7ga4tf3g3nzucd8380o2bev8oeknp',
        grossProfitMeasure: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877',
        dateAttributeInMonths:
            '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142',
        dateAttribute: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180',
    };
    return (
        <div className="App">
            <GrossProfit options={grossProfitOptions} year={2017} />
        </div>
    );
}
