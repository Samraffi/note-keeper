import { useState } from 'react';
import { useNavigate } from 'react-router';
import SearchBar from './SearchBar';
import NoteList from './NoteList';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const Notes = () => {
  const navigate = useNavigate();

  // Временные данные для демонстрации
  const mockNotes: Note[] = [
    {
      id: '1',
      title: 'Первая заметка',
      content: 'Содержание первой заметки...',
      createdAt: '21 марта, 2025'
    },
    {
      id: '2',
      title: 'Вторая заметка',
      content: 'Содержание второй заметки...',
      createdAt: '21 марта, 2025'
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleNoteSelect = (id: string) => {
    navigate(`/notes/${id}`);
  };

  const filteredNotes = mockNotes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex">
      {/* Боковая панель */}
      <div className="w-64 border-r bg-gray-50">
        <div className="p-4">
          <button 
            onClick={() => navigate('/')}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Все заметки
          </button>
        </div>
      </div>

      {/* Основной контент */}
      <div className="flex-1">
        <div className="p-6">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            onCreateNote={() => navigate('/notes/new')}
          />
          <div className="mt-6">
            <NoteList 
              notes={filteredNotes}
              onNoteSelect={handleNoteSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
