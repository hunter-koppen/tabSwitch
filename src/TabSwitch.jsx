import { createElement } from "react";

import { TabSwitchFunction } from "./components/TabSwitchFunction";

export function TabSwitch({ tabClass, tabIndexNumber }) {
    return <TabSwitchFunction tabClass={tabClass} tabIndexNumber={tabIndexNumber.value} />;
}
