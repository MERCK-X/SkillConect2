import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar';

const Search = () => {
  // Resultados de ejemplo
  const results = [
    {
      id: 1,
      type: "user",
      name: "Laura Martínez",
      title: "Diseñadora UX/UI",
      location: "Bogotá, CO",
      skills: ["Figma", "User Research", "Prototipado"]
    },
    {
      id: 2,
      type: "company",
      name: "DevSolutions",
      title: "Empresa de Desarrollo",
      location: "Remoto",
      skills: ["React", "Node.js", "Bases de datos"]
    }
  ];

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="search-layout">
            {/* Sidebar de filtros */}
            <FilterSidebar />
            
            {/* Resultados de búsqueda */}
            <div className="search-results">
              <h1>Resultados de búsqueda</h1>
              
              <div className="results-grid">
                {results.map(result => (
                  <div key={result.id} className="result-card">
                    <img 
                      src={result.type === "company" 
                        ? "/assets/images/company-logo.jpg" 
                        : "/assets/images/user-avatar.jpg"} 
                      alt={result.name}
                      className="result-avatar"
                    />
                    <div className="result-info">
                      <h3>{result.name}</h3>
                      <p className="result-title">{result.title}</p>
                      <p className="result-location">{result.location}</p>
                      <div className="result-skills">
                        {result.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <button className="btn-outline">
                      {result.type === "company" ? "Ver empleos" : "Ver perfil"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;