import todoApp from './reducers/index';
import {createStore,applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';



const configStore=()=>{
    const middlewares=[thunk];

if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger());

}
return createStore(
    todoApp,
    
    applyMiddleware(...middlewares));
};

export default configStore;