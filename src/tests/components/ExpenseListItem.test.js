import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should generate an expense list item with a link', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});