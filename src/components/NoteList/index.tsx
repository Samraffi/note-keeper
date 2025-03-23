import NoteItem from './NoteItem';
import { NoteListProps } from '../../types/props';

const NoteList = ({ notes, onNoteSelect }: NoteListProps) => {
  return (
    <div className="border-r h-[calc(100vh-64px)] overflow-y-auto">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          content={note.content}
          date={note.createdAt}
          onClick={() => onNoteSelect(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteList;
