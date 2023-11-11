import { useState } from "react";
import data from "../../assets/TabData.js";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function ProductTab() {
  const [activeTab, setActiveTab] = useState("descripción");
  return (
    <Tabs value={activeTab} className="mt-12">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="w-[450px]">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="md:h-36">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
