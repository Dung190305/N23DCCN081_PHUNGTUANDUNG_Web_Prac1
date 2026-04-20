import Link from 'next/link';
import Header from '@/components/Header';

// Hàm lấy dữ liệu 1 bài viết theo ID
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

// Component trang chi tiết
export default async function BlogDetailPage({ params }) {
  // params.id chính là phần trong ngoặc vuông [id] trên URL
  const post = await getPost(params.id);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Nút Back */}
        <Link href="/" className="inline-block mb-6 text-indigo-600 hover:text-indigo-800 font-medium">
          ← Quay lại danh sách
        </Link>
        
        {/* Nội dung bài viết */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
              Bài viết #{post.id}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 border-b pb-6">
            <span>Người đăng: User {post.userId}</span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.body}
            </p>
            {/* API này chỉ có title và body, nên chúng ta chỉ hiện thế này */}
          </div>
        </div>
      </article>
    </main>
  );
}