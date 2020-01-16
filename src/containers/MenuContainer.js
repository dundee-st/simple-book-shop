import Menu from "../components/Menu";
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    totalPrice: state.cart.items.reduce((total, book) => total + book.price, 0),
    count: state.cart.items.length,
    books: state.cart.items
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch),         //передает диспатчи всех экшенов из filter  actions

})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);