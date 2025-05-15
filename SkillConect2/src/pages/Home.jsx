import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileCard from '../components/UserProfileCard';
import PostCard from '../components/PostCard';
import SuggestionCard from '../components/SuggestionCard';

const Home = () => {
  // Datos de ejemplo
  const userProfile = {
    name: "María González",
    title: "Desarrolladora Frontend",
    location: "Ciudad de México, MX",
    skills: ["React", "JavaScript", "UI/UX"],
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };

  const posts = [
    {
      id: 1,
      author: "Tech Solutions Inc.",
      role: "Empresa - Tecnología",
      content: "Estamos buscando un desarrollador Frontend con experiencia en React para unirse a nuestro equipo remoto.",
      time: "Hace 2 horas"
    },
    {
      id: 2,
      author: "Carlos Mendoza",
      role: "Diseñador UX",
      content: "Comparto mi último proyecto de rediseño de experiencia de usuario para una plataforma de e-learning.",
      time: "Hace 5 horas"
    }
  ];

  const suggestions = [
    {
      id: 1,
      name: "Ana López",
      role: "Ingeniera de Software",
      common: "3 habilidades en común"
    },
    {
      id: 2,
      name: "Design Studio",
      role: "Empresa - Diseño",
      common: "2 conexiones en común"
    }
  ];

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="layout-grid">
            {/* Columna izquierda - Perfil */}
            <aside className="left-column">
              <UserProfileCard user={userProfile} />
            </aside>
            
            {/* Columna central - Publicaciones */}
            <div className="center-column">
              <div className="create-post">
                <textarea placeholder="Comparte una actualización..."></textarea>
                <div className="post-actions">
                  <button className="btn-outline">Subir imagen</button>
                  <button className="btn-primary">Publicar</button>
                </div>
              </div>
              
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            
            {/* Columna derecha - Sugerencias */}
            <aside className="right-column">
              <div className="suggestions-section">
                <h3>Personas que podrías conocer</h3>
                {suggestions.map(suggestion => (
                  <SuggestionCard key={suggestion.id} suggestion={suggestion} />
                ))}
                <button className="btn-text">Ver todas las sugerencias</button>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;