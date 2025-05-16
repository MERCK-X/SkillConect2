const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <h2>Filtrar búsqueda</h2>
      
      <div className="filter-group">
        <h3>Tipo</h3>
        <label className="filter-option">
          <input type="checkbox" checked /> Personas
        </label>
        <label className="filter-option">
          <input type="checkbox" /> Empresas
        </label>
      </div>
      
      <div className="filter-group">
        <h3>Ubicación</h3>
        <select className="filter-select">
          <option value="">Todos los países</option>
          <option value="mx">México</option>
          <option value="co">Colombia</option>
          <option value="ar">Argentina</option>
        </select>
      </div>
      
      <div className="filter-group">
        <h3>Área profesional</h3>
        <select className="filter-select">
          <option value="">Todas las áreas</option>
          <option value="tech">Tecnología</option>
          <option value="design">Diseño</option>
          <option value="business">Negocios</option>
        </select>
      </div>
      
      <div className="filter-group">
        <h3>Habilidades</h3>
        <input 
          type="text" 
          placeholder="Ej: React, Marketing Digital" 
          className="filter-input"
        />
      </div>
      
      <button className="btn-primary">Aplicar filtros</button>
      <button className="btn-text">Restablecer</button>
    </aside>
  );
};

export default FilterSidebar;