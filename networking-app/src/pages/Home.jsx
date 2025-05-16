import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfileCard from "../components/UserProfileCard";
import PostCard from "../components/PostCard";
import SuggestionCard from "../components/SuggestionCard";

const Home = () => {
  // Datos de ejemplo actualizados
  const userProfile = {
    name: "María González",
    title: "Desarrolladora Frontend",
    location: "Ciudad de México, MX",
    skills: ["React", "JavaScript", "UI/UX"],
    about: "Especialista en desarrollo de interfaces de usuario con 5 años de experiencia en proyectos internacionales."
  };

  const posts = [
    {
      id: 1,
      author: "Tech Solutions Inc.",
      role: "Empresa - Tecnología",
      content: "Estamos buscando un desarrollador Frontend con experiencia en React para unirse a nuestro equipo remoto. Ofrecemos paquete competitivo y flexibilidad horaria.",
      time: "Hace 2 horas"
    },
    {
      id: 2,
      author: "Carlos Mendoza",
      role: "Diseñador UX",
      content: "Comparto mi último proyecto de rediseño de experiencia de usuario para una plataforma de e-learning. ¡Feedback bienvenido!",
      time: "Hace 5 horas"
    }
  ];

  const suggestions = [
    {
      id: 1,
      name: "Ana López",
      role: "Ingeniera de Software",
      common: "3 habilidades en común",
      type: "user"
    },
    {
      id: 2,
      name: "Design Studio",
      role: "Agencia de Diseño",
      common: "2 conexiones en común",
      type: "company"
    },
    {
      id: 3,
      name: "Luis Ramírez",
      role: "Product Manager",
      common: "Misma universidad",
      type: "user"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Columna izquierda - Perfil */}
          <aside className="lg:col-span-3">
            <UserProfileCard user={userProfile} />
          </aside>
          
          {/* Columna central - Publicaciones */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <textarea 
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Comparte una actualización..." 
                rows="3"
              />
              <div className="flex justify-between mt-3">
                <button className="text-gray-500 hover:text-purple-600 flex items-center space-x-1">
                  <span>📷</span>
                  <span>Foto</span>
                </button>
                <button className="bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700">
                  Publicar
                </button>
              </div>
            </div>
            
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Columna derecha - Sugerencias */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Personas que podrías conocer</h3>
              <div className="space-y-3">
                {suggestions.map(suggestion => (
                  <SuggestionCard key={suggestion.id} suggestion={suggestion} />
                ))}
              </div>
              <button className="w-full mt-3 text-sm text-purple-600 hover:underline">
                Mostrar más
              </button>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Eventos</h3>
              <p className="text-gray-600 text-sm">Conferencia de Tecnología - 15 Mayo</p>
              <button className="w-full mt-3 text-sm text-purple-600 hover:underline">
                Ver todos los eventos
              </button>
            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;