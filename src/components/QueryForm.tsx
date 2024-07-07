import React, { useState, ReactElement } from 'react';
import { Button, Col, Row, Space, Grid } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

interface QueryFormProps {
  children: ReactElement[];
}

const size = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 2,
  xl: 3,
  xxl: 5,
};

export const QueryForm: React.FC<QueryFormProps> = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const screens = useBreakpoint();
  const width = Object.entries(screens).filter((screen) => !!screen[1]).at(-1)?.[0];
  const screen = size[width!];
  const span = 24 / (screen + 1);

  const formItems: ReactElement[] = [];

  const n = Math.ceil(children.length / (screen + 1));
  const offset = expand ? (n * 24) - (children.length * span) : 24 - (children.length * span);

  const formButtons = (element: ReactElement) => (
    <Col span={span} style={{ textAlign: 'right' }} offset={offset} key="form-buttons">
      <Space size="small">
        {element}
        {n !== 1 && (
          <a
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> {expand ? '折叠' : '展开'}
          </a>
        )}
      </Space>
    </Col>
  );

  children.forEach((element, index) => {
    if (index + 1 === children.length) {
      formItems.push(formButtons(element));
      return;
    }
    if (!expand) {
      formItems.push(<Col span={(index + 1) <= screen ? span : 0} key={index}>{element}</Col>);
    } else {
      formItems.push(<Col span={span} key={index}>{element}</Col>);
    }
  });

  return <Row gutter={24}>{formItems}</Row>;
};