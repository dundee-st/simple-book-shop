import Filter from "../components/Filter";
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import { bindActionCreators } from 'redux';
import BookCard from '../components/BookCard';
import cart from "../reducers/cart";

const mapStateToProps = (state, props) => ({
    addedCount: state.cart.items.reduce((count, book) => count + (book.id === props.id ? 1 : 0), 0),
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch),         //передает диспатчи всех экшенов из filter  actions

})
export default connect(mapStateToProps, mapDispatchToProps)(BookCard);