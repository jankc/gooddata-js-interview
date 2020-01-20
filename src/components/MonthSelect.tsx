import React, { FunctionComponent } from 'react';
import moment from 'moment';

const monthOptions = moment.months().map((monthName, index) => (
    <option value={index + 1} key={index}>
        {monthName}
    </option>
));

type MonthSelectProps = {
    month?: number;
    onMonthChange?: (month: number) => void;
};

const MonthSelect: FunctionComponent<MonthSelectProps> = ({
    month = 1,
    onMonthChange = () => {},
}) => {
    // get list of months as select options

    return (
        <select
            value={month}
            onChange={event => onMonthChange(parseInt(event.target.value))}
        >
            {monthOptions}
        </select>
    );
};

export default MonthSelect;
