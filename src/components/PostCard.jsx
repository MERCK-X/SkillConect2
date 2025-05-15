const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img 
          src={post.author.includes("Inc.") 
            ? "/assets/images/company-logo.jpg" 
            : "/assets/images/user-avatar.jpg"} 
          alt={post.author}
          className="post-avatar"
        />
        <div className="post-author">
          <h4>{post.author}</h4>
          <p className="post-role">{post.role}</p>
          <p className="post-time">{post.time}</p>
        </div>
      </div>
      
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      
      <div className="post-actions">
        <button className="btn-icon">
          <i className="icon-like"></i> Me gusta
        </button>
        <button className="btn-icon">
          <i className="icon-comment"></i> Comentar
        </button>
        <button className="btn-icon">
          <i className="icon-share"></i> Compartir
        </button>
      </div>
    </div>
  );
};

export default PostCard;