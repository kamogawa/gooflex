import { connect } from 'react-redux'
import Header from '../Components/Header'

const mapStateToProps = (state) => {
  return { todos: state.todos };
}

const VisibleTodoList = connect(
  mapStateToProps
)(Header);
export default VisibleTodoList;