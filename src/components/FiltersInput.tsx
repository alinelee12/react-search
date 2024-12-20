import { data } from "@/services/data";
import { useState, ChangeEvent } from 'react';
import SearchResultCard from './SearchResultCard'; // Importe o novo componente
import categoryColors from '../services/categoryColors'; // Importe o mapeamento de cores

export default function FilterPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Categorias selecionadas
  const [searchQuery, setSearchQuery] = useState(''); // Valor de busca
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list'); // Modo de visualização
  const categories = [...new Set(data.flatMap((item) => item.categorias))].sort((a, b) => a.localeCompare(b));

  // Função para remover acentuação de uma string
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Atualiza as categorias selecionadas
  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  // Atualiza o valor de busca enquanto o usuário digita
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Atualiza a seleção de categorias a partir do select
  const handleCategorySelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    if (category) {
      handleCategoryClick(category);
    }
  };

  // Filtrar os dados com base nas categorias selecionadas e no valor de busca
  const filteredData = data.filter((item) => {
    const lowerCaseQuery = removeAccents(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some((category) => item.categorias.includes(category));
    const matchesSearchQuery = removeAccents(item.pergunta.toLowerCase()).includes(lowerCaseQuery) ||
                               removeAccents(item.resposta.toLowerCase()).includes(lowerCaseQuery) ||
                               item.categorias.some((category) => removeAccents(category.toLowerCase()).includes(lowerCaseQuery));
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="py-4 px-6 md:py-8 md:px-12">
      <div className="md:grid md:grid-cols-4 md:grid-rows-1 md:gap-4">
        <div>
          {/* Botões de Alternância de Visualização */}
          <div className="mb-4 flex">
            <div className="grid grid-cols-1 grid-rows-2 gap-0">
                <div >              
                  <p className="block text-gray-700 font-medium">
                    Vizualição:
                  </p></div>
                <div >
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2 py-2 mr-2 rounded-md ${viewMode === 'list' ? 'bg-primary text-white shadow-2xl' : 'bg-gray-200 shadow'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-2 py-2 rounded-md ${viewMode === 'grid' ? 'bg-primary text-white shadow-2xl' : 'bg-gray-200 shadow'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                </button>
                </div>
            </div>
          </div>
          {/* Campo de Busca */}
          <div className="mb-4 pt-4">
            <label htmlFor="search" className="block text-gray-700 font-medium">
              Buscar:
            </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Digite sua busca..."
              className="rounded-md mt-2 block w-full p-2 border border-gray-300 focus:outline-none focus:border-primary focus:ring-primary focus:ring-0 sm:text-sm"
            />
          </div>

          {/* Lista de Categorias */}
          <div className="mb-4 pt-4">
            <label htmlFor="category-filter" className="block text-gray-700 font-medium">
              Selecione a categoria:
            </label>
            {/* Select para dispositivos móveis */}
            <div className="block md:hidden">
              <select
                id="category-filter"
                onChange={handleCategorySelectChange}
                className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-primary focus:ring-0 "
              >
                <option value="">Todas</option>
                
                {categories.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
            {/* Grid para dispositivos maiores */}
            <div className="hidden md:grid grid-cols-2 gap-2">
              {categories.map((categoria) => (
                <div key={categoria} className="mt-2">
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(categoria)}
                    className={`ml-1.5 text-[09px] px-3 py-1 rounded-full text-white font-bold min-w-[100px] uppercase ${categoryColors[categoria] || 'bg-gray-200'} ${selectedCategories.includes(categoria) ? 'ring ring-gray-200' : ''}`}
                  >
                    {categoria}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3">
          {/* Lista de Resultados Filtrados */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-2 md:grid-cols-3 gap-4' : 'flex flex-col'}>
            {filteredData.map((item) => (
              <SearchResultCard
                key={item.id}
                id={item.id}
                pergunta={item.pergunta}
                resposta={item.resposta}
                categorias={item.categorias}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}