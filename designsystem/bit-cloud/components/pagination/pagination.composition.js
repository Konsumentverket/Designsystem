import React from 'react';
import { Pagination } from './pagination.js';

export const BasicPagination = () => {
  return (
    <Pagination
      total={100}
      currentPage={2}
      pageSize={10}
      baseUrl="#?page=2"
    />
  );
}
