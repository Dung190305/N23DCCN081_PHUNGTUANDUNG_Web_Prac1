import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';

// Hàm này chạy trên Server, lấy dữ liệu từ API ảo
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // Xử lý lỗi nếu fetch fail
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <Header />
      
      {/* Container chính */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Bài viết mới nhất</h2>
        
        {/* Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 12).map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}