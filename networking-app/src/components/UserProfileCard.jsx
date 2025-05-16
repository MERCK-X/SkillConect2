const UserProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 sticky top-4">
      <div className="text-center">
        <img 
          src="/assets/images/user-avatar.jpg" 
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-purple-200"
        />
        <h3 className="mt-3 font-semibold text-lg">{user.name}</h3>
        <p className="text-gray-600">{user.title}</p>
        <p className="text-sm text-gray-500 mt-1">{user.location}</p>
      </div>
      
      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-2">Sobre mí</h4>
        <p className="text-sm text-gray-600">{user.about}</p>
      </div>
      
      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-2">Habilidades</h4>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 bg-purple-50 text-purple-600 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <button className="w-full mt-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
        Ver perfil completo
      </button>
    </div>
  );
};

export default UserProfileCard;