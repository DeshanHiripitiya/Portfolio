import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React from 'react';
import {Sms} from '../card/projects/Sms'
import {Smsui} from '../card/projects/uiux/Sms'
import { DevConnector } from '../card/projects/DevConnector';
import { WordQuest } from '../card/projects/Wordquest';
import { Portfolio } from '../card/projects/Portfolio';
import { Portfolioui } from '../card/projects/uiux/Portfolioui';
import { Hardware } from '../card/projects/hardware/Hardware';

export function ProjectTabs() {
  const [activeTab, setActiveTab] = React.useState('software');

  // Updated data array with JSX components
  const data = [
    {
      label: 'Software',
      value: 'software',
      component: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <Sms />
          <WordQuest />
          <DevConnector />
          <Portfolio />
        </div>
      ),
    },
    {
      label: 'UI/UX',
      value: 'uiux',
      component: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <Smsui />
          <Portfolioui />
        </div>
      ),
    },
    {
      label: 'Hardware',
      value: 'hardware',
      component: (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <Hardware />
          {/* <Hardware /> */}
        </div>
      ),
    },
  ];

  return (
    <Tabs value='software' className=''>
      <TabsHeader
        className='bg-transparent max-w-[40rem] mx-auto' // Set max width and center it
        indicatorProps={{
          className: 'bg-[#0E4DA4] shadow-none rounded-full',
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? 'text-white duration-1000' : ''}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className='mx-auto mt-10 flex justify-center items-center'>
        {' '}
        {data.map(({ value, component }) => (
          <TabPanel
            key={value}
            value={value}
            className='w-full flex justify-center items-center'
          >
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
