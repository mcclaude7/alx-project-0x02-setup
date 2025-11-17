import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    if (!trimmedTitle || !trimmedContent) return;

    onSubmit(trimmedTitle, trimmedContent);
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="post-modal-title" 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
        
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 id="post-modal-title" className="mb-4 text-xl font-semibold">Create a Post</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded border px-3 py-2" type="text" 
            placeholder="Post title" required/>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Content</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full rounded border px-3 py-2"
              rows={4} placeholder="Write something..." required/>
          </div>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
