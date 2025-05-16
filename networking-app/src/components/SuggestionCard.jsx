const SuggestionCard = ({ suggestion }) => {
  return (
    <div className="suggestion-card">
      <div className="suggestion-content">
        <img 
          src={suggestion.type === 'company' 
            ? "/assets/images/company-logo.jpg" 
            : "/assets/images/user-avatar.jpg"} 
          alt={suggestion.name}
          className="suggestion-avatar"
        />
        <div className="suggestion-info">
          <h4 className="suggestion-name">{suggestion.name}</h4>
          <p className="suggestion-role">{suggestion.role}</p>
          <p className="suggestion-common">{suggestion.common}</p>
        </div>
      </div>
      <button className="suggestion-btn">
        Conectar
      </button>
    </div>
  );
};