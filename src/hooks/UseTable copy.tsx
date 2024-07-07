import React, { useEffect, useState } from 'react';

interface TableData<T> {
  loading: boolean;
  pageSize: number;
  pageNum: number;
  total: number;
  tableList: T[];
  formData: Record<string, any>;
}

interface Pagination {
  total: number;
  size: 'default';
  current: number;
  showSizeChanger: boolean;
  showQuickJumper: boolean;
  showTotal: (total: number) => string;
  onChange: (page: number, pageSize?: number) => void;
}

interface TableProps<T> {
  loading: boolean;
  dataSource: T[];
  pagination: Pagination;
}

interface UseTableResult<T> {
  tableProps: TableProps<T>;
  refresh: () => void;
  search: (formData: Record<string, any>) => void;
}

export const useTable = <T,>(fun: (params: { pageSize: number; pageNum: number }, formData: Record<string, any>) => Promise<{ data: T[]; total: number }>)
: UseTableResult<T> => {
  const [data, setData] = useState<TableData<T>>({
    loading: false,
    pageSize: 10,
    pageNum: 1,
    total: 0,
    tableList: [],
    formData: {}
  });

  const load = async ({ pageNum = data.pageNum, pageSize = data.pageSize } = {}, formData = data.formData) => {
    setData(prevData => ({
      ...prevData,
      loading: true,
    }));

    const result = await fun({ pageSize, pageNum }, formData);

    setData(prevData => ({
      ...prevData,
      loading: false,
      tableList: result.data,
      total: result.total,
      pageSize,
      pageNum,
      formData
    }));
  };

  useEffect(() => {
    load();
  }, []);

  const pageChange = (page: number, pageSize?: number) => {
    load({ pageNum: page, pageSize });
  };

  const tableProps: TableProps<T> = {
    loading: data.loading,
    dataSource: data.tableList,
    pagination: {
      total: data.total,
      size: "default",
      current: data.pageNum,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total) => `总共 ${total} 条`,
      onChange: pageChange,
    }
  };

  const search = (formData: Record<string, any>) => {
    load({ pageNum: 1 }, formData);
  };

  const refresh = () => {
    load();
  };

  return { tableProps, refresh, search };
};