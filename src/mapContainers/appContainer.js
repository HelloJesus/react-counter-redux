import { bindActionCreators } from "redux";
import { addCounter, removeCounter, resetCounter, addCounterAsync, removeCounterAsync } from "../counterStore/counterAction"

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addCounter, removeCounter, resetCounter, addCounterAsync, removeCounterAsync}, dispatch)
}

export const mapStateToProps = (state) => ({
    counter: state.counter,
    isLoading: state.statusCounter.isLoading
})
