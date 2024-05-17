import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '地址1',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '地址2',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '你好',
    age: 32,
    address: '撒地方撒地方',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '在的',
    age: 42,
    address: 'is的烦恼撒地方',
    tags: ['loser'],
  },
  {
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },{
    key: '3',
    name: '啦啦啦',
    age: 32,
    address: 'i日诶无法收到',
    tags: ['cool', 'teacher'],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;