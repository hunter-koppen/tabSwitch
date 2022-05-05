import React, { createElement, useEffect } from "react";

export function TabSwitchFunction({ tabIndexNumber }) {
    const nodeRef = React.createRef();

    useEffect(() => {
        const IntervalId = setInterval(openTab, 100);

        function openTab() {
            const tabContainer = nodeRef.current.parentNode.querySelector(".mx-tabcontainer");
            if (tabContainer) {
                const tabToOpen = tabContainer.childNodes[0].childNodes[tabIndexNumber];
                if (tabToOpen) {
                    tabToOpen.click();
                    clearInterval(IntervalId);
                }
            }
        }

        setTimeout(function(){ 
            clearInterval(IntervalId); 
        }, 4000);
    }, []);

    return <div ref={nodeRef} />;
}
