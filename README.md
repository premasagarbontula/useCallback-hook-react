# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


![image](https://github.com/user-attachments/assets/1153558d-c2ae-48de-bf7f-42c71c146942)

The React useCallback Hook returns a memoized callback function.
One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

React useCallback Hook Syntax:
const memoizedCallback = useCallback(
    () => {
        doSomething(a, b);
    },    [a, b],
);

searchFilter function is identical across all renders as we enclosed it with useCallback hook.
Though we shuffle users, searchFilter function will not be changed and Search component will not be rendered

