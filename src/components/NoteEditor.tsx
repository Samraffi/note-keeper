import { useState } from 'react';

interface NoteEditorProps {
  title: string;
  content: string;
  isEditing: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onSave?: (title: string, content: string) => void;
  onCancel?: () => void;
}

const NoteEditor = ({
  title,
  content,
  isEditing,
  onEdit,
  onDelete,
  onSave,
  onCancel
}: NoteEditorProps) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  return (
    <div className="p-6 h-[calc(100vh-64px)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-2xl font-medium w-full px-2 py-1 focus:outline-none focus:border-b-2 focus:border-blue-500"
          />
        ) : (
          <h2 className="text-2xl font-medium">{title}</h2>
        )}
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={() => onSave?.(editedTitle, editedContent)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Сохранить
              </button>
              <button
                onClick={onCancel}
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Отмена
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onEdit}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Изменить
              </button>
              <button
                onClick={onDelete}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Удалить
              </button>
            </>
          )}
        </div>
      </div>
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="flex-1 resize-none p-2 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Начните писать..."
        />
      ) : (
        <div className="flex-1 whitespace-pre-wrap">
          {content}
        </div>
      )}
    </div>
  );
};

export default NoteEditor;
