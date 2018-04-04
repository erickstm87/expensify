import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    console.log('i am being read');
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0.0.00')
    return (
        // <div className="page-header">
        //     <div className="content-container">
        <div>
                <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
            </div>
        // </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        statement: () => {
            console.log('being read');
        }
    };
};

export default connect(mapStateToProps)(ExpensesSummary);