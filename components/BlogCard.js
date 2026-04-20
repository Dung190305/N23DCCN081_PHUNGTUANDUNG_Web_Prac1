export default function BlogCard({ post }) {
  return (
    <div className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white flex flex-col h-full">
      {/* Dùng category từ post hoặc mặc định nếu API không có */}
      <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
        Technology
      </span>
      <h2 className="font-bold text-lg mt-2 mb-1 line-clamp-2">{post.title}</h2>
      <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.body}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-sm text-gray-400">User #{post.userId}</span>
        <a href={`/blog/${post.id}`}
           className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">
          Read More
        </a>
      </div>
    </div>
  );
}