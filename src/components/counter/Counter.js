import React from 'react'
import { Link } from 'react-router-dom'
import counterCss from './Counter.module.scss'

class Counter extends React.Component {
    componentWillUnmount() {
        this.props.clearAction()
    }

    render() {
        const {
            showError,
            decrementAction,
            incrementAction,
            count
        } = this.props
        return (
            <div className={counterCss.counter}>
                <h2>Simple Counter</h2>
                {showError && (
                    <div className={counterCss.counter__err__txt}>
                        Max 100 allowed
                    </div>
                )}
                <div>
                    <button
                        onClick={decrementAction}
                        className={counterCss.button}
                        disabled={count <= 0}
                    >
                        -
                    </button>
                    <span className={counterCss.counter__text}>{count}</span>
                    <button onClick={incrementAction}>+</button>
                </div>

                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default React.memo(Counter)
