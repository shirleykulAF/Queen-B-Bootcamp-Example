// import classNames from 'classnames';
// import { useState, useRef } from 'react';
// import TooltipConent from './TooltipContent';



// export default function Tooltip({ data, children }) { // Use children prop
//     const targetRef = useRef(null);
//     const [show, setShow] = useState(false);
//     const [toolTipProperties, setToolTipProperties] = useState({
//         tooltipTop: 0,
//         toolTipLeft: 0,
//     });

//     const handleShowToolTip = () => {
//         const toolTipHalfwidth = 
//             targetRef.current.getBoundingClientRect().width / 2;
//         const toolTipHeight =
//             targetRef.current.getBoundingClientRect().height ;
        
//         setToolTipProperties({
//             tooltipTop: toolTipHeight,
//             toolTipLeft: toolTipHalfwidth,
//         })

//         setShow(true);
//     }

//     return (
//         <div
//         ref={targetRef}
//         onMouseEnter={handleShowToolTip}
//         onMouseLeave={() => setShow(false)}
//         className={classNames(
//             show && 'pb-6', // making sure the tooltip doesn't close when moving cursor to content
//             "inline relative"
//         )}
//         >
//         {/*Putting content inside this div so it will stay open when hovering over the content*/}
//             <TooltipConent
//             data={data}
//             show={show}
//             top={toolTipProperties.tooltipTop}
//             left={toolTipProperties.toolTipLeft}
//             />
//                 {/* {TooltipConent} 
//             </TooltipConent> */}
//         <span className="cursor-pointer">{tooltipTarget}</span>
    
//         </div>
        
//     )
// }


// chatGPT correction

import { useState, useRef } from 'react';
import TooltipContent from './TooltipContent';

export default function Tooltip({ data, children }) { // Use children prop to allow flexibility
    const targetRef = useRef(null);
    const [show, setShow] = useState(false);
    const [toolTipProperties, setToolTipProperties] = useState({
        tooltipTop: 0,
        toolTipLeft: 0,
    });

    const handleShowToolTip = () => {
        const toolTipHalfWidth = targetRef.current.getBoundingClientRect().width / 2;
        const toolTipHeight = targetRef.current.getBoundingClientRect().height;

        setToolTipProperties({
            tooltipTop: toolTipHeight,
            toolTipLeft: toolTipHalfWidth,
        });

        setShow(true); // Show tooltip on hover
    };

    const handleHideToolTip = () => {
        setShow(false); // Hide tooltip when not hovering
    };

    return (
        <div
            ref={targetRef}
            onMouseEnter={handleShowToolTip}
            onMouseLeave={handleHideToolTip}
            className={`inline relative ${show ? 'pb-6' : ''}`} // Conditional class for padding
        >
            {/* Tooltip content is shown based on the `show` state */}
            <TooltipContent
                data={data}
                show={show}
                top={toolTipProperties.tooltipTop}
                left={toolTipProperties.toolTipLeft}
            />
            {/* Render the passed children as the trigger */}
            <span className="cursor-pointer">{children}</span>
        </div>
    );
}




