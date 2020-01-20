// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import GrossProfit, { GrossProfitOptions } from './GrossProfit';
import '@gooddata/react-components/styles/css/main.css';

export default function() {
    const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
    const grossProfitOptions: GrossProfitOptions = {
        projectId,
        grossProfitMeasure: `/gdc/md/${projectId}/obj/6877`,
        dateAttributeInMonths: `/gdc/md/${projectId}/obj/2142`,
        dateAttribute: `/gdc/md/${projectId}/obj/2180`,
    };
    return (
        <div className="App">
            <GrossProfit options={grossProfitOptions} year={2016} />
        </div>
    );
}
