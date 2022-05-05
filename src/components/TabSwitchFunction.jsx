import React, { createElement, useEffect } from "react";

export function TabSwitchFunction({ tabIndexNumber }) {
    const nodeRef = React.createRef();

    useEffect(() => {
        const tabContainer = nodeRef.current.parentNode.querySelector(".mx-tabcontainer");
        console.log(tabContainer);
        const tabToOpen = tabContainer.childNodes[0].childNodes[tabIndexNumber];
        console.log(tabToOpen);
        if (tabToOpen) {
            setTimeout(function () {
                tabToOpen.click();
            }, 1);
        }
    }, []);

    return <div ref={nodeRef} />;
}
