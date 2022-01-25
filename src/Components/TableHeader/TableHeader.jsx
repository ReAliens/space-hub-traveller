const headerItems = [
  { id: 1, title: 'Mission' },
  { id: 2, title: 'Description' },
  { id: 3, title: 'Status' },
  { id: 4, title: 'Join / Leave' },
];

const TableHeader = () => (
  <div className="w-full grid grid-cols-4">
    {headerItems.map((item) => (
      <div key={item.id} className="h-16 border-gray-300 border-2 text-2xl flex items-center px-4 font-bold">
        <h3>{item.title}</h3>
      </div>
    ))}
  </div>
);
export default TableHeader;
