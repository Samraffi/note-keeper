import { Note } from './note';

export interface NoteListProps {
  notes: Note[];
  onNoteSelect: (id: string) => void;
}

export interface NoteItemProps {
  title: string;
  content: string;
  date: string;
  onClick: () => void;
}

export interface NoteViewPageProps {
  title: string;
  content: string;
  date: string;
  onDelete: (id: string) => void;
}

export interface NoteEditPageProps {
  title: string;
  content: string;
  onSave: (oldTitle: string, newTitle: string, newContent: string) => void;
}

export interface DeleteNoteProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onCreateNote: () => void;
}
