import { connect } from 'react-redux'
import Counter from './Counter'
import { bindActionCreators } from 'redux'
import { incrementAction, decrementAction, clearAction } from './actions'
import { getCount, shouldShowToast } from './selector'
function mapStateToProps(state) {
    return {
        count: getCount(state),
        showError: shouldShowToast(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            incrementAction,
            decrementAction,
            clearAction
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
