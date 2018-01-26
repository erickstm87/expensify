import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy  
});

const setCount = ({ newCount } = {}) => ({
    type: 'SET',
    newCount
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = {count: 10}, action) => {
    switch(action.type)
    {
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: 0  
            };
        case 'SET':
            return{
                count: action.newCount
            }
        default:
            return state
    }
};


const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 110}))

store.dispatch(decrementCount({decrementBy: 27}));
 
// store.dispatch({
//     type: 'RESET'
// })
store.dispatch(setCount({newCount: 113}));
store.dispatch(resetCount());