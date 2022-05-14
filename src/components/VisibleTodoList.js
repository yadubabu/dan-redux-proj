import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoList from './TodoList';
import {resolvePath} from 'react-router';
import todos, { getVisibleTodos,getIsFetching,getErrorMessage } from '../reducers';
import FetchError from './FetchError';

class VisibleTodoList extends Component{
  componentDidMount(){
    this.fecthData();    
  }

  componentDidUpdate(prevProps){
    if(this.props.filter !== prevProps.filter){
      this.fecthData();
    }
  }

  fecthData(){
    const {filter,fetchTodos}=this.props;
    fetchTodos(filter).then(()=>console.log('done'));
  }

    render(){
      const {isFetching,errorMessage,toggleTodo,todos}=this.props;
      if(isFetching && !todos.length){
        return <p>Loading...</p>
      }
      if(errorMessage && !todos.length){
        return (
          <FetchError
            message={errorMessage}
            onRetry={()=>this.fecthData()}/>
          );
      }
     return ( <TodoList 
              todos={todos}
              onTodoClick={toggleTodo}
              />
              );
    }}

const mapStateToProps = (state,{params}) => {
  const filter =params.filter || 'all';
  return {
    todos: getVisibleTodos(state,filter),
    errorMessage:getErrorMessage(state,filter),
    isFetching:getIsFetching(state,filter),
    filter,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   },
// });

 VisibleTodoList =resolvePath(connect(
  mapStateToProps,
  actions
  )(VisibleTodoList));

export default VisibleTodoList;