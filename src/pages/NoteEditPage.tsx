import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

interface NoteEditPageProps {
  title: string;
  content: string;
  onSave: (title: string, content: string) => void;
}

const NoteEditPage = ({ title, content, onSave }: NoteEditPageProps) => {
  const navigate = useNavigate();
  const { noteId } = useParams<{ noteId: string }>();
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleSave = () => {
    onSave(editedTitle, editedContent);
    navigate(`/notes/${noteId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header with actions */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(`/notes/${noteId}`)}
          className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
        >
          <svg 
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Назад
        </button>
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Сохранить
          </button>
          <button
            onClick={() => navigate(`/notes/${noteId}`)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Отмена
          </button>
        </div>
      </div>

      {/* Edit form */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="text-3xl font-semibold mb-6 w-full px-2 py-1 border-b border-transparent focus:border-blue-500 focus:outline-none"
          placeholder="Заголовок заметки"
          autoFocus
        />
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="w-full h-[calc(100vh-400px)] resize-none p-2 border rounded focus:border-blue-500 focus:outline-none"
          placeholder="Начните писать..."
        />
      </div>
    </div>
  );
};

export default NoteEditPage;
