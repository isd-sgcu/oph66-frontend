import React from 'react';

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate: string = new Date(dateString).toLocaleDateString('en-GB', options);
  return formattedDate;
};

interface TableHeaderProps {
  dateString: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ dateString }) => {
  return (
    <div className="flex w-max h-10 pt-2 px-3 bg-pink-400 rounded-2xl ">
      {formatDate(dateString)}
    </div>
  );
};

export default TableHeader;