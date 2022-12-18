import ReactDOM from 'react-dom/client';
/*
We import provider component, but it is actually a component.
And now we wrap all our root component with provider.
*/
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
/* 
We only have one store, but that's stored in this index JS file,
react Redux of course doesn't know that data file holds our store.
Instead we have to import our store from, store index in this case.
*/
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    /*
    You could also wrap nested components with provider, 
    but only wrapped components, their child components,
    and the child components of the child components,
    only those components will have access to Redux thereafter.
    And if the vast majority of your components need access to the store,
    if maybe your entire app needs access to the store,
    you should typically provide on this highest level.
    
    We have a store prop, which we have to set a value which is our Redux store.
    We are setting this as a value, for the store prop on this provider component.
    And now provides our Redux store in this react app.
    The App component and any other child components can listen from the central data store or state.
    They can get data out of the central data store or state.
    They can set up a subscription to that data to be precise, and they also can dispatch actions.
    */
    <Provider store={store}>
        <App />
    </Provider>
);

