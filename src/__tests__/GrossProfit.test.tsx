import React from 'react';
import { shallow } from 'enzyme';
import GrossProfit from '../components/GrossProfit';
import MonthSelect from '../components/MonthSelect';

it('renders a Gross Profit component with a month selector', () => {
    const grossProfitOptions = {
        projectId: 'xms7ga4tf3g3nzucd8380o2bev8oeknp',
        grossProfitMeasure: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877',
        dateAttributeInMonths:
            '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142',
        dateAttribute: '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180',
    };

    const wrapped = shallow(
        <GrossProfit options={grossProfitOptions} year={2016} />
    );
    expect(wrapped.find(MonthSelect)).toHaveLength(1);
});
