import { Space, Input } from "antd";
import Head from "next/head";
import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';
import { useState } from "react";

const Index = () => {
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Head>
        <title>My bookings</title>
      </Head>
      <h2 className="text-2xl font-lato font-medium">My Bookings</h2>
      <div className="tableWrapper">
        <div className="categoryHeader overflow-x-scroll">
          {/* <Space className="flex items-center pb-5"> */}
          <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
          <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
          {/* </Space> */}
        </div>
      </div>
    </div>
  );
};

export default Index;