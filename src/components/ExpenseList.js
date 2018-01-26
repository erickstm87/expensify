import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from'./ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }
    </div>
);

const mapStateToVariable = (state) => {
    return {
        expenses: selectExpenses(state.expense, state.filters)
    };
};


export default connect(mapStateToVariable)(ExpenseList);
