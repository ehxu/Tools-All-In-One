import React from 'react';
import { Button, Space, Typography } from 'antd';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title level={2}>Welcome to the Home Page</Title>
      <Space size="large">
        <Button
          type="primary"
          icon={<HomeOutlined />}
          onClick={() => navigate('/')}
        >
          Home
        </Button>
        <Button
          type="default"
          icon={<InfoCircleOutlined />}
          onClick={() => navigate('/about')}
        >
          About
        </Button>
      </Space>
    </>
  );
};

export default HomePage;
