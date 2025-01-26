import { IServer } from "@/types/server.types";

export const paginate = (
  data: IServer[],
  currentPage: number,
  rowsPerPage: number
) => {
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const adjustedPage = Math.max(1, Math.min(currentPage, totalPages));

  const indexOfFirstRow = (adjustedPage - 1) * rowsPerPage;
  const indexOfLastRow = Math.min(indexOfFirstRow + rowsPerPage, data.length);

  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  return {
    totalPages,
    currentRows,
  };
};
