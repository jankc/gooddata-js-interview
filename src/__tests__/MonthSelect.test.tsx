import React from 'react';
import { shallow } from 'enzyme';
import MonthSelect from '../components/MonthSelect';

it('renders a month selector', () => {
    const wrapped = shallow(<MonthSelect />);
    expect(wrapped.find('select')).toHaveLength(1);
    expect(wrapped.find('select').children()).toHaveLength(12);
});
