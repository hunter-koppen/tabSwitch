import { createElement } from "react";

import { TabSwitchFunction } from "./components/TabSwitchFunction";

export function TabSwitch({ tabIndexNumber }) {
    return <TabSwitchFunction tabIndexNumber={tabIndexNumber.value} />;
}
