import { Button, Col, Form, Input, Row, Select, Space, theme, Radio, Grid } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { count } from 'console';
const { useBreakpoint } = Grid;

const size = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 2,
  xl: 3,
  xxl: 5,
}
export const QueryForm = (props) => {
  const [expand, setExpand] = useState(false)
  const screens = useBreakpoint();
  const width = Object.entries(screens).filter((screen) => !!screen[1]).at(-1)?.[0]
  const screen = size[width!]
  const span = 24 / (screen + 1)
 
  const formItems = []

  const n = Math.ceil(props.children.length / (screen + 1));
  const offset = expand ? (n * 24) - ((props.children.length) * span): 24 - ((props.children.length) * span)
  const formButtons = (element) => (
    <Col span={span} style={{ textAlign: 'right' }} offset={offset}>
      <Space size="small">
        {element}

        {n !== 1?
          <a
          onClick={() => {
            setExpand(!expand);
          }}
          >
          <DownOutlined /> 展开
          </a>:''
        } 
       
      </Space>
    </Col>)

  props.children.forEach((element, index) => {
    if(index+1 === props.children.length){
        formItems.push(formButtons(element))
        return
    }
    if (!expand) {
      if ((index + 1) <= screen) {
        formItems.push(<Col span={span}>{element}</Col>)
      } else {
        formItems.push(<Col span={0}>{element}</Col>)
      }
    } else {
      formItems.push(<Col span={span}>{element}</Col>)
    }

  });
  return (<Row gutter={24}>{formItems }</Row>)
}