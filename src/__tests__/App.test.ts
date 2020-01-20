// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import GrossProfit from '../components/GrossProfit';

it('renders App with a Gross Profit Component', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(GrossProfit)).toHaveLength(1);
});
