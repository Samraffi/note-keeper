import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import DeleteNote from '../components/DeleteNote';
import { NoteViewPageProps } from '../types/props';

const NoteViewPage = ({ title, content, date, onDelete }: NoteViewPageProps) => {
  const navigate = useNavigate();
  const { noteId } = useParams<{ noteId: string }>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleConfirmDelete = () => {
    if (noteId) {
      onDelete(noteId);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header with actions */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/notes')}
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
            onClick={() => navigate(`edit`)}
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Редактировать
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            Удалить
          </button>
        </div>
      </div>

      {/* Note content */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <div className="text-gray-500 mb-6 text-sm">{date}</div>
        <div className="prose max-w-none">
          {content}
        </div>
      </div>

      {/* Delete confirmation modal */}
      <DeleteNote
        isOpen={showDeleteModal}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default NoteViewPage;
