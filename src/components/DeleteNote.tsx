import { DeleteNoteProps } from '../types/props';

const DeleteNote = ({ isOpen, onConfirm, onCancel }: DeleteNoteProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-xl font-medium mb-4">Удалить заметку?</h3>
        <p className="text-gray-600 mb-6">
          Это действие нельзя будет отменить. Вы уверены, что хотите удалить эту заметку?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Отмена
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNote;
