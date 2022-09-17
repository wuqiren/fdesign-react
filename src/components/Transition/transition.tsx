import {CSSTransition} from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps  = {
  animation?: AnimationName,
} & CSSTransitionProps
const Transition =(props:TransitionProps)=>{
    const {children,classNames,animation,...restProps} = props;

    return <CSSTransition
    classNames={classNames?classNames:animation}
    unmountOnExit={true}
    appert='true'
    {...restProps}
    >
    {children}
    </CSSTransition>
}

export default Transition