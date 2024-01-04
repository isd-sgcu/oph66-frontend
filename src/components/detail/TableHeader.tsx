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
    <div className="flex w-full h-10 mt-4 pt-2 px-3 lg:px-4 text-white text-base font-semibold bg-gradient-to-r from-[#393570] via-[#CA4072] via-70% to-[#DE87A8] rounded-2xl ">
      {formatDate(dateString)}
    </div>
  );
};

export default TableHeader;