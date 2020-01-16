import Filter from "../components/Filter";
import { connect } from 'react-redux';
import * as filterActions from '../actions/filter';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    filteredBy: state.filter.filteredBy,
    searchQuery: state.filter.searchQuery
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterActions, dispatch),         //передает диспатчи всех экшенов из filter  actions

})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);