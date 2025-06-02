import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPosts, createPost } from '../redux/slices/postSlice';
import { logout } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.post);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createPost({ title, content })).unwrap();
      setTitle('');
      setContent('');
      toast.success('Post created');
    } catch (err) {
      toast.error('Failed to create post');
    }
  };

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">POSTY</h1>
        <button onClick={handleLogout} className="bg-white text-black px-4 py-2 rounded">Logout</button>
      </div>

      <form onSubmit={handleAddPost} className="bg-white text-black p-4 rounded mb-6 max-w-md mx-auto">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded mb-2" required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full p-2 border rounded mb-2" required />
        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Add Post</button>
      </form>

      <div className="max-w-md mx-auto space-y-4">
        {posts.map((post, idx) => (
          <div key={idx} className="border p-4 rounded bg-white text-black">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold">{post.title}</h2>
                <p className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleString()}</p>
              </div>
              <button onClick={() => setExpanded(expanded === idx ? null : idx)}>
                <Eye size={20} />
              </button>
            </div>
            {expanded === idx && <p className="mt-2">{post.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}