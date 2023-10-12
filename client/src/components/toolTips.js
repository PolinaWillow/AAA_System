import React, {useState, useRef} from 'react'

export const ToolTip = ({children, text }) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const refSetTimeout = useRef();

    const onMouseEnterHandler = () => {
        refSetTimeout.current = setTimeout(() => {
          setShowToolTip(true);
        }, 750);
    };
    
      const onMouseLeaveHandler = () => {
        clearTimeout(refSetTimeout.current);
        setShowToolTip(false);
    };

    return (
        <div className='toolsTips-block'>
            <div className='toolTips-container' onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
                {children}
                {showToolTip && <div className='toolTips-text'>{text}</div>}
            </div>
        </div>
        
    )
}