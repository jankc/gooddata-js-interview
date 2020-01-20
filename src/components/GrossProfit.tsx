// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState, FunctionComponent } from 'react';
import { ColumnChart, Model } from '@gooddata/react-components';
import moment from 'moment';
import MonthSelect from './MonthSelect';
import '@gooddata/react-components/styles/css/main.css';

const getMonthFilter = (dateAttribute: string, month: number, year: number) => {
    const fromDay = moment([year, month - 1])
        .startOf('month')
        .format('YYYY-MM-DD');
    const toDay = moment([year, month - 1])
        .endOf('month')
        .format('YYYY-MM-DD');

    return Model.absoluteDateFilter(dateAttribute, fromDay, toDay);
};

const getMeasures = (grossProfitMeasure: string) => {
    return [
        Model.measure(grossProfitMeasure)
            .localIdentifier('m1')
            .alias('$ Gross Profit'),
    ];
};

const getViewBy = (dateAttributeInMonths: string) => {
    return Model.attribute(dateAttributeInMonths).localIdentifier('m1');
};

export type GrossProfitOptions = {
    projectId: string;
    grossProfitMeasure: string;
    dateAttributeInMonths: string;
    dateAttribute: string;
};

export type GrossProfitProps = {
    options: GrossProfitOptions;
    year: number;
};

const GrossProfit: FunctionComponent<GrossProfitProps> = ({
    options,
    year,
}) => {
    const [month, setMonth] = useState(1);
    const {
        projectId,
        grossProfitMeasure,
        dateAttributeInMonths,
        dateAttribute,
    } = options;
    const filters = [getMonthFilter(dateAttribute, month, year)];
    const measures = getMeasures(grossProfitMeasure);
    const viewBy = getViewBy(dateAttributeInMonths);

    return (
        <div className="gross-profit">
            <h1>
                $ Gross Profit in month{' '}
                <MonthSelect
                    month={month}
                    onMonthChange={month => setMonth(month)}
                />
                {' ' + year}
            </h1>
            <div>
                <ColumnChart
                    measures={measures}
                    filters={filters}
                    projectId={projectId}
                />
            </div>
            <h1>$ Gross Profit - All months</h1>
            <div>
                <ColumnChart
                    measures={measures}
                    viewBy={viewBy}
                    projectId={projectId}
                />
            </div>
        </div>
    );
};

export default GrossProfit;
