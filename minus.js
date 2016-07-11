import React, {Component, PropTypes} from 'React'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

//React component
class Minus extends Component {
  render() {
    const {value, onminus} = this.props;
    return (
      <div>
        <div>{value}</div>
        <button onClick={onminus} value="minus">Minus</button>
      </div>
    );
  }
}

Minus.propTypes = {
  value: PropTypes.number.isRequired,
  onminus: PropTypes.func.isRequired
}

//Action
function minusAction() {
  return {type: 'MINUS' }
}

//Reducer
function minus (state = {value: 100}, action){
  switch (action.type) {
    case 'MINUS':
      return { value: state.value - 1 }
    default:
      return state
  }
}

//Store
const store = createStore(minus);

// Map Redux state to component props
function mapStateToProps (state){
  return { value: state.value }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return { onminus: ()=> dispatch(minusAction())};
}

// Connected Component
const App = connect (mapStateToProps, mapDispatchToProps)( Minus )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('myroot')
)
