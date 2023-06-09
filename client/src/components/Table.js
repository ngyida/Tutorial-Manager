import React from 'react';
import Pagination from './Pagination';

const Table = ({ getTableProps, getTableBodyProps, headerGroups, page, prepareRow, openTutorial, deleteTutorial, currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="col-md-12 list">
      <table className="table table-striped table-bordered" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.Header === "Actions"
                        ? cell.render("Cell", {
                            openTutorial: openTutorial,
                            deleteTutorial: deleteTutorial,
                            rowIndex: row.index,
                          })
                        : cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;