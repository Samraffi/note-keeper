interface NoteItemProps {
  title: string;
  content: string;
  date: string;
  onClick: () => void;
}

const NoteItem = ({ title, content, date, onClick }: NoteItemProps) => {
  return (
    <div 
      className="p-4 border-b hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={onClick}
    >
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
        {content}
      </p>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
  );
};

export default NoteItem;
