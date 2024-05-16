import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select, InputNumber } from 'antd';
import { Product } from '../../types';

interface AddProductProps {
  onAdd: (newProduct: Product) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ onAdd }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    const newProduct: Product = {
      id: Date.now(),
      category: values.category,
      name: values.name,
      description: values.description,
      price: Number(values.price),
    };
    onAdd(newProduct);
    navigate('/');
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: 'Please select a category' }]}
      >
        <Select>
          <Select.Option value="Electronics">Electronics</Select.Option>
          <Select.Option value="Books">Books</Select.Option>
          <Select.Option value="Clothing">Clothing</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter the product name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please enter the product description' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[
          { required: true, message: 'Please enter the product price' },
          { type: 'number', min: 0, transform: (value) => Number(value), message: 'Price must be a number' },
        ]}
      >
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
