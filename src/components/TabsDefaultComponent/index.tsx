import { useEffect, useState } from "react";
import { getRankings } from "../../utils/url";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Dates from "../Dates";

interface DescInterface {
  id: number;
  count: number;
  avatar: string;
  name: string;
  percent: string;
  sold: number;
  volume: number;
}

interface InterfaceTankings {
  label: string;
  value: string;
  desc: DescInterface[];
}
export function TabsDefaultComponent() {
  const [rankings, setRankings] = useState<InterfaceTankings[]>([]);

  useEffect(() => {
    getRankings().then((data) => {
      setRankings(data);
    });
  }, []);

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
            "bg-transparent border-b border-[#858584] shadow-none rounded-none  mt-2 ",
        }}
      >
        {rankings.map(({ label, value }) => (
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
      <div className="mt-8 flex justify-between py-3 pl-7  border-[#3B3B3B] border-[1px] text-[#858584] rounded-[2rem]">
        <div className="flex gap-6">
          <p>#</p>
          <p>Artist</p>
        </div>
        <div className="flex gap-[10rem] lg:pr-[10rem] md:pr-[5rem] sm:pr-[5rem] xs:pr-[3rem]">
          <p className="lg:block md:block sm:hidden xs:hidden">Change</p>
          <p className="lg:block md:hidden sm:hidden xs:hidden">NFTs Sold</p>
          <p>Volume</p>
        </div>
      </div>
      <_TabsBody>
        {rankings.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="mt-8 text-[#fff]">
            <Dates props={desc} />
          </TabPanel>
        ))}
      </_TabsBody>
    </Tabs>
  );
}
