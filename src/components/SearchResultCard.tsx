import React, { useRef, useState } from 'react';
import categoryColors from '../services/categoryColors'; 

interface SearchResultCardProps {
  id: number;
  pergunta: string;
  resposta: string;
  categorias: string[];
}

const H2 = ({ texto }: { texto: string | JSX.Element }) => {
  return <div dangerouslySetInnerHTML={{ __html: texto }} className="text-sm md:text-[0.85rem]" />;
};

// Função para adicionar novas categorias dinamicamente
const getCategoryColor = (categoria: string) => {
  if (!categoryColors[categoria]) {
    // Adicione uma cor padrão se a categoria não estiver no mapeamento
    categoryColors[categoria] = 'bg-gray-500';
  }
  return categoryColors[categoria];
};

const SearchResultCard: React.FC<SearchResultCardProps> = ({ id, pergunta, resposta, categorias }) => {
  const respostaRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (respostaRef.current) {
      const range = document.createRange();
      range.selectNodeContents(respostaRef.current);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Voltar ao ícone original após 2 segundos
      }
    }
  };

  return (
    <div className="relative mb-4 p-4 border border-gray-300 rounded-md">
      <button
        onClick={copyToClipboard}
        className={`absolute top-3 right-3 p-1 rounded ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-primary hover:text-white'}`}
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
          </svg>
        )}
      </button>
      <div>
        <h2 className="font-bold text-base md:text-[1rem] mb-2 mr-5">
          <span>{id}. </span>{pergunta}
        </h2>
      </div>
      <div>
        <div ref={respostaRef} dangerouslySetInnerHTML={{ __html: resposta }} className="text-sm md:text-[0.85rem]" />
      </div>
      <div className="text-[10px] text-white font-bold mt-4 uppercase flex flex-col items-start">
        {categorias.map((categoria) => (
          <span key={categoria} className={`mr-2 px-2 py-1 rounded-full mb-2 ${getCategoryColor(categoria)}`}>
            {categoria}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultCard;