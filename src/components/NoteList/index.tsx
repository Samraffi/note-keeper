import NoteItem from './NoteItem';
import { NoteListProps } from '../../types/props';

const NoteList = ({ notes, onNoteSelect }: NoteListProps) => {
  return (
    <div className="border-r h-[calc(100vh-64px)] overflow-y-auto">
      {notes.map(({ id, title, content, createdAt }) => (
        <NoteItem
          key={id}
          title={title}
          content={content}
          date={createdAt}
          onClick={() => onNoteSelect(id)}
        />
      ))}
    </div>
  );
};

export default NoteList;
