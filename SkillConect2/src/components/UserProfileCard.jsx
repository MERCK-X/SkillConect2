const UserProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img 
          src="/assets/images/user-avatar.jpg" 
          alt={user.name} 
          className="profile-avatar"
        />
        <h3>{user.name}</h3>
        <p className="profile-title">{user.title}</p>
        <p className="profile-location">{user.location}</p>
      </div>
      
      <div className="profile-section">
        <h4>Sobre mí</h4>
        <p>{user.about}</p>
      </div>
      
      <div className="profile-section">
        <h4>Habilidades</h4>
        <div className="skills-list">
          {user.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      
      <div className="profile-section">
        <h4>CV</h4>
        <button className="btn-outline">
          <i className="icon-download"></i> Descargar CV
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;