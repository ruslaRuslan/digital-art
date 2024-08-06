import { useState } from "react";
import Data from "../../Data.json";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Dates from "../Dates";

export function TabsDefaultComponent() {
  const [activeTab, setActiveTab] = useState("1");
  const _TabsHeader: any = TabsHeader as any;
  const _Tab: any = Tab as any;
  const _TabsBody: any = TabsBody as any;
  return (
    <Tabs value={activeTab}>
      <_TabsHeader
        className="rounded-none  text-[20px]"
        indicatorProps={{
          className:
            "bg-transparent border-b border-[#858584] shadow-none rounded-none  mt-2",
        }}
      >
        {Data.rankings.map(({ label, value }) => (
          <_Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value as any)}
            className={
              (activeTab as any) === value
                ? "text-[#fff] "
                : "text-[#858584] cursor-pointer"
            }
          >
            {label}
          </_Tab>
        ))}
      </_TabsHeader>
      <_TabsBody>
        {Data.rankings.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="mt-8 text-[#fff]">
            <Dates props={desc} />
          </TabPanel>
        ))}
      </_TabsBody>
    </Tabs>
  );
}
