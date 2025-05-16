const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-start space-x-3">
        <img 
          src={post.author.includes("Inc.") 
            ? "/assets/images/company-logo.jpg" 
            : "/assets/images/user-avatar.jpg"} 
          alt={post.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <h4 className="font-medium text-gray-900">{post.author}</h4>
            <span className="text-gray-500">•</span>
            <span className="text-sm text-gray-500">{post.time}</span>
          </div>
          <p className="text-gray-600 mt-1">{post.role}</p>
          <p className="mt-3 text-gray-800">{post.content}</p>
          
          <div className="mt-4 flex justify-between text-gray-500">
            <button className="flex items-center space-x-1 hover:text-purple-600">
              <span>👍</span>
              <span>Me gusta</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-purple-600">
              <span>💬</span>
              <span>Comentar</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-purple-600">
              <span>↗️</span>
              <span>Compartir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;