import { useState } from 'react';
import { useNavigate } from 'react-router';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { mockNotes } from '../constants/mockData';

const NotesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleNoteSelect = (id: string) => {
    navigate(`notes/${id}`);
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
            onCreateNote={() => navigate('notes/new')}
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

export default NotesPage;
