import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React from 'react';
import {Sms} from '../card/Sms'

export function ProjectTabs() {
  const [activeTab, setActiveTab] = React.useState('software');

  // Updated data array with JSX components
  const data = [
    {
      label: 'Software',
      value: 'software',
      component: (
        <div className='flex space-x-4'>
          <Sms />
          <Sms />
        </div>
      ),
    },
    {
      label: 'Softwdare',
      value: 'softdware',
      component: <Sms />,
    },
    {
      label: 'Vue',
      value: 'vue',
      component: (
        <div>
          <p>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </p>
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Type something...'
              className='px-4 py-2 border rounded'
            />
          </div>
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
      <TabsBody className='w-screen max-w-screen mx-auto flex justify-center items-center'>
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
