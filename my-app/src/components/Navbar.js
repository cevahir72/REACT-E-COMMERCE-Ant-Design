import React from 'react';
import { ShoppingCartOutlined,SearchOutlined } from '@ant-design/icons';
import { Layout ,Typography, Input, Space, Avatar,Badge} from 'antd';

const { Content } = Layout;
const { Title, Text} = Typography;


const Navbar = () => {
  return (
    <Layout align="center"  style={{display:"flex", flexDirection:"row", width:"100%"}}>
        <Space style={{flex:"1", paddingLeft:"1rem"}}>
        <Text>EN</Text>
        <Input style={{width:"100%"}} placeholder="default size" prefix={<SearchOutlined />} />
        </Space>
        <Space style={{flex:"1", justifyContent:"center"}}>
        <Title level={2}>.URBAN STYLE</Title>
        </Space>
        <Space align="center" style={{flex:"1", justifyContent:"end", padding:"1rem"}}>
          <Text >REGISTER</Text>
          <Text>LOGIN</Text>
          <a href="#">
            <Badge count={5}>
                <Avatar shape="square" size="large" icon={<ShoppingCartOutlined/>}/>
             </Badge>
            </a>
          
        </Space>
        
        
    </Layout>
  )
}

export default Navbar