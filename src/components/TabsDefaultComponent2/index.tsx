import { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Created from "../Created";
import { getArtist_page2 } from "../../utils/url";

interface IDesc {
  id: number;
  images: string;
  title: string;
  icons: string;
  user: string;
  wordPrice: string;
  rates: string;
  price: number;
  wt: string;
}

interface IArtist_page2 {
  value: string;
  label: string;
  desc: IDesc[];
}

export function TabsDefaultComponent2() {
  const [activeTab, setActiveTab] = useState("1");
  const _TabsHeader: any = TabsHeader as any;
  const _Tab: any = Tab as any;
  const _TabsBody: any = TabsBody as any;

  const [artist_page2, setArtist_page2] = useState<IArtist_page2[]>([]);

  useEffect(() => {
    getArtist_page2().then((data) => {
      setArtist_page2(data);
    });
  }, []);

  return (
    <Tabs value={activeTab}>
      <section className="mx-auto max-w-7xl  sm:px-6 lg:px-8 pb-5">
        <_TabsHeader
          className="rounded-none  text-[20px]"
          indicatorProps={{
            className:
              "bg-transparent border-b border-[#858584] shadow-none rounded-none  mt-2",
          }}
        >
          {artist_page2.map(({ label, value }) => (
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
      </section>
      <_TabsBody>
        {artist_page2.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="text-[#fff] bg-[#3B3B3B]"
          >
            <Created props={desc} />
          </TabPanel>
        ))}
      </_TabsBody>
    </Tabs>
  );
}
