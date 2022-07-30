import React, { useState } from "react";
import { Layout, Typography, Space ,Card, Avatar} from "antd";
import products from "../helpers/products.json";
import { MinusOutlined, EditOutlined,PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Meta } = Card;

const Products = () => {

    
  return (
    <Layout style={{ width: "100%", margin: "0", padding: "0", display:"flex", flexWrap:"wrap"}}>
      <Title align="center"> Featured Products</Title>
      <Space style={{width:"100%", display:"flex", flexWrap:"wrap",justifyContent:"center" ,marginTop:"1rem"}}>
        {products.map((item) => {
          return (
            <Card
                key={item.id}
              style={{ width: 300 ,height:550, borderRadius:"1rem",margin:"0.5rem"}}
              hoverable={true}
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{height:300}}
                />
              }
              actions={[
                <MinusOutlined key="remove"/>,
                <span style={{fontWeight:"bold", color:"red",fontSize:"16px"}}>${item.price}</span>,
                <PlusOutlined  key="add"/>,
              ]}
            >
              <Meta
                title={item.title}
                description={item.about}

                style={{overflow:"hidden",height:150}}
              />
            </Card>
          );
        })}
      </Space>
    </Layout>
  );
};

export default Products;
