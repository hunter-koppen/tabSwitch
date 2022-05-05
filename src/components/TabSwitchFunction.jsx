import { createElement, useEffect } from "react";

export function TabSwitchFunction({ tabClass, tabIndexNumber }) {
    useEffect(() => {
        const IntervalId = setInterval(openTab, 100);

        function openTab() {
            const tabContainer = document.querySelector("." + tabClass);
            if (tabContainer) {
                const tabToOpen = tabContainer.childNodes[0].childNodes[tabIndexNumber];
                if (tabToOpen) {
                    tabToOpen.click();
                    clearInterval(IntervalId);
                }
            }
        }
        // eslint-disable-next-line
        setTimeout(function () {
            clearInterval(IntervalId);
        }, 4000);
    }, [tabClass, tabIndexNumber]);

    return null;
}
