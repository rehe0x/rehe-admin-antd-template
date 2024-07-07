import React, { useEffect, useLayoutEffect, useState } from 'react';

export const useTable = (fun: Function) => {
  const [data, setData] = useState({
    loading: false,
    pageSize: 10,
    pageNum: 1,
    total: 0,
    tableList: [],
    formData:{}
  });

  const load = async ({pageNum = data.pageNum,pageSize = data.pageSize}={},formData = data.formData) => {
    // 加载
    setData({
      ...data,
      loading: true,
    })
    // 获取数组
    const result = await fun({
      pageSize: pageSize,
      pageNum: pageNum
    },formData);

    //更新数组
    setData({
      ...data,
      loading: false,
      tableList: result.data,
      total: result.total,
      pageSize: pageSize,
      pageNum: pageNum,
      formData: formData
    })
  }

  //首次加载
  useEffect(() => {
    load()
  }, [])


  const pageChange = (page, pageSize)=>{
    load({pageNum:page, pageSize})
  }

  // table数据
  const tableProps = {
    loading: data.loading,
    dataSource: data.tableList,
    pagination: {
      total: data.total,
      size: "default",
      // pageSize: data.pageSize,
      current: data.pageNum,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total) => (`Total ${total} items`),
      onChange: pageChange,
    }
  }  
  // 查询
  const search = (formData:{})=>{
    load( {pageNum: 1}, formData)
  }

  //刷新
  const refresh = ()=>{
    load()
  }

  return { tableProps: tableProps, refresh,search }
}