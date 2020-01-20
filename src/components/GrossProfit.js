// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState } from 'react';
import { ColumnChart, Model } from '@gooddata/react-components';
import MonthSelect from './MonthSelect';
import '@gooddata/react-components/styles/css/main.css';

const getMonthFilter = (dateAttribute, month, year) => {
    // moment.js could be used here
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const fromDay = `${firstDay.getFullYear()}-${firstDay.getMonth() +
        1}-${firstDay.getDate()}`;
    const toDay = `${lastDay.getFullYear()}-${lastDay.getMonth() +
        1}-${lastDay.getDate()}`;
    return Model.absoluteDateFilter(dateAttribute, fromDay, toDay);
};

const getMeasures = grossProfitMeasure => {
    return [
        Model.measure(grossProfitMeasure)
            .localIdentifier('m1')
            .alias('$ Gross Profit'),
    ];
};

const getViewBy = dateAttributeInMonths => {
    return Model.attribute(dateAttributeInMonths).localIdentifier('m1');
};

const GrossProfit = ({ options, year }) => {
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
                    onChange={month => setMonth(month)}
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

// class GrossProfit extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { month: 1 };
//     }

//     render() {
//         const filters = [
//             getMonthFilter(
//                 this.props.options.dateAttribute,
//                 this.state.month,
//                 this.props.year
//             ),
//         ];
//         const measures = getMeasures(this.props.options.grossProfitMeasure);
//         const viewBy = getViewBy(this.props.options.dateAttributeInMonths);
//         return (
//             <div className="gross-profit">
//                 <h1>
//                     $ Gross Profit in month{' '}
//                     <MonthSelect
//                         month={this.state.month}
//                         onChange={month => this.setState({ month })}
//                     />
//                     {' ' + this.props.year}
//                 </h1>
//                 <div>
//                     <ColumnChart
//                         measures={measures}
//                         filters={filters}
//                         projectId={this.props.options.projectId}
//                     />
//                 </div>
//                 <h1>$ Gross Profit - All months</h1>
//                 <div>
//                     <ColumnChart
//                         measures={measures}
//                         viewBy={viewBy}
//                         projectId={this.props.options.projectId}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default GrossProfit;
