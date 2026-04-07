import React from 'react';
import { Radio } from 'antd';
import { useAppContext } from '../../contexts/AppContext';

const options = [
  { label: 'all', value: 'all' },
  { label: "men's clothing", value: "men's clothing" },
  { label: 'jewelery', value: 'jewelery' },
  { label: 'electronics', value: 'electronics' },
  { label: "women's clothing", value: "women's clothing" },
];


const Select = () => {
  const {
    FetchData,
    activeFilter,
    setActiveFilter
  } = useAppContext()

  return (
    <Radio.Group
      onChange={
        (e) => {
          // FetchData(`https://fakestoreapi.com/products/${e.target.value == 'all' ? "" : `category/${e.target.value.toLowerCase()}`}`)
          setActiveFilter(e.target.value)
        }
      }
      defaultValue={activeFilter}
      style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} // vertical layout
    >
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label.toUpperCase()}
        </Radio>
      ))}
    </Radio.Group>

  )
};

export default Select;
