import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from'./ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className="list-header">
            <div className='show-for-mobile'>Expenses</div>
            <div className='show-for-desktop'>Expense</div>
            <div className='show-for-desktop'>Amount</div>
        </div>
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
