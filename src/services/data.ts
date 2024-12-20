export interface Questions {
    id: number;
    pergunta: string;
    resposta: string;
    categorias: string[];
}

export const data: Questions[] = [
    {
        id: 1,
        pergunta: "Quais documentos são necessários para viajar dentro do Brasil?",
        resposta: "<p>Para viagens nacionais, é necessário apresentar um documento de identificação oficial com foto, como RG, CNH, passaporte, ou carteira de trabalho. Em voos domésticos, versões digitais, como a CNH Digital, também são aceitas. Para crianças, é necessário um documento que comprove a filiação, como a certidão de nascimento ou RG.</p>",
        categorias:["Documentação"]
    },
    {
        id: 2,
        pergunta: "Menores de idade precisam de autorização para viajar sem os pais?",
        resposta: "<p>Sim, em algumas situações. Para viagens dentro do mesmo estado, menores de 16 anos não precisam de autorização se estiverem acompanhados de parentes próximos (comprovado por documento). Já em viagens interestaduais, é necessário apresentar uma autorização judicial ou uma autorização escrita dos pais reconhecida em cartório, caso a criança não esteja acompanhada por um responsável legal.</p>",
        categorias:["Documentação"]
    },
    {
        id: 3,
        pergunta: "A carteira de identidade (RG) precisa estar atualizada para ser válida?",
        resposta: "<p>Sim, o RG deve estar em bom estado de conservação e com foto que permita a identificação do viajante. Não há prazo oficial de validade, mas, na prática, documentos muito antigos (com fotos desatualizadas) podem ser recusados. Por isso, é recomendável manter o RG atualizado.</p>",
        categorias:["Documentação"]
    },
    {
        id: 4,
        pergunta: "T É necessário portar passaporte para viagens nacionais?",
        resposta: "<p>Não. O passaporte não é obrigatório para viagens dentro do Brasil. Um documento de identidade com foto, como o RG ou CNH, é suficiente.</p>",
        categorias:["Documentação"]
    },
    {
        id: 5,
        pergunta: "A carteira de habilitação (CNH) é válida como documento para embarque?",
        resposta: "<p>Sim, a CNH é aceita como documento válido para embarque em voos nacionais e viagens rodoviárias, desde que esteja dentro do prazo de validade e em boas condiçõe</p>",
        categorias:["Documentação"]
    },
    {
        id: 6,
        pergunta: "Posso viajar com uma cópia autenticada do RG?",
        resposta: "<p>Não. As companhias aéreas, rodoviárias e outras transportadoras exigem o documento original ou uma versão digital válida. Cópias, mesmo autenticadas, não são aceitas.</p>",
        categorias:["Documentação"]
    },
    {
        id: 7,
        pergunta: "Estrangeiros precisam de visto para viagens domésticas no Brasil?",
        resposta: "<p>Não, estrangeiros não precisam de visto para viagens domésticas dentro do Brasil. Contudo, devem portar o passaporte válido ou, no caso de residentes, o Registro Nacional de Estrangeiros (RNE) ou Carteira de Registro Nacional Migratório (CRNM).</p>",
        categorias:["Documentação"]
    },
    {
        id: 8,
        pergunta: "É necessário levar a certidão de nascimento de crianças?",
        resposta: "<p>Sim, se a criança não tiver um RG. A certidão de nascimento é aceita como documento de identificação para menores de 12 anos, desde que seja original ou uma segunda via recente.</p>",
        categorias:["Documentação"]
    },
    {
        id: 9,
        pergunta: "Quais documentos são aceitos em aeroportos para embarque doméstico?",
        resposta: "<ul><li>RG;</li><li>CNH (física ou digital);</li><li>Passaporte;</li><li>Carteira de Trabalho (física ou digital);</li><li>Documentos emitidos por conselhos profissionais, como CRM ou OAB;</li><li>Certidão de nascimento para menores de 12 anos;</li><li>Identidade militar (se aplicável).</li></ul><p>Versões digitais, como a CNH Digital e o e-Título, são aceitas apenas com validação pelo aplicativo.</p>",
        categorias:["Documentação"]  
    },
    {
        id: 10,
        pergunta: "Documentos digitais, como o e-Título, são aceitos para viajar?",
        resposta: "<p>Sim, desde que sejam apresentados pelo aplicativo oficial e com QR Code para verificação. Isso inclui a CNH Digital e o e-Título, mas apenas para embarques em voos nacionais.</p>",
        categorias:["Documentação"]
    },
    {
        id: 11,
        pergunta: "Qual o limite de peso para bagagem de mão em voos domésticos?",
        resposta: "<p>O limite padrão de peso para bagagem de mão em voos domésticos é de 10 kg. Além disso, a bagagem deve respeitar as dimensões estabelecidas pela companhia aérea, geralmente 55 cm x 35 cm x 25 cm (altura, largura e profundidade).</p>",
        categorias:["Aéreo"] 
    },
    {
        id: 12,
        pergunta: "O que fazer se minha bagagem for extraviada durante uma viagem?",
        resposta: "<p>Se sua bagagem for extraviada, você deve:</p><ul><li>Procurar o balcão da companhia aérea no aeroporto imediatamente.</li><li>Preencher o Registro de Irregularidade de Bagagem (RIB).</li></ul><p>A companhia tem até 7 dias para devolver a bagagem (em voos domésticos). Caso não seja encontrada em até 7 dias úteis, você tem direito à indenização.</p>",
        categorias:["Aéreo"]   
    },
    {
        id: 13,
        pergunta: "É permitido levar líquidos na bagagem de mão?",
        resposta: "<p>Sim, mas com restrições. Para voos domésticos, não há limite de volume para líquidos. Já em voos internacionais, líquidos devem estar em frascos de até 100 ml, colocados em um saco plástico transparente de até 1 litro.</p>",
        categorias:["Aéreo"]  
    },
    {
        id: 14,
        pergunta: "Existe um tempo mínimo de antecedência para chegar ao aeroporto?",
        resposta: "<p>Sim. Recomenda-se chegar com:</p><ul><li>1h30 de antecedência para voos domésticos</li><li>3 horas de antecedência para voos internacionais.</li></ul><p>Em voos domésticos, o check-in geralmente fecha 40 minutos antes do embarque.</p>",
        categorias:["Aéreo"] 
    },
    {
        id: 15,
        pergunta: "Qual é a política de cancelamento de passagens aéreas no Brasil?",
        resposta: "<p>Você pode cancelar sua passagem sem custo até 24 horas após a compra, desde que faltem pelo menos 7 dias para o voo. Após esse período, podem ser cobradas taxas de cancelamento conforme a política da companhia aérea.</p>",
        categorias:["Aéreo"] 
    },
    {
        id: 16,
        pergunta: "É permitido levar alimentos na bagagem de mão?",
        resposta: "<p>Sim, é permitido levar alimentos na bagagem de mão, desde que estejam embalados adequadamente. Alimentos líquidos ou pastosos (como sopas ou cremes) devem seguir as regras de líquidos em voos internacionais.</p>",
        categorias:["Aéreo"] 
    },
    {
        id: 17,
        pergunta: "Crianças menores de dois anos pagam passagem aérea?",
        resposta: "<p>Crianças menores de dois anos podem viajar no colo de um adulto, pagando uma taxa reduzida (geralmente 10% do valor da passagem). Caso a criança ocupe um assento, será necessário pagar o valor integral.</p>",
        categorias:["Aéreo"] 
    },
    {
        id: 18,
        pergunta: "Posso alterar a data de um voo após a compra?",
        resposta: "<p>Sim, é possível alterar a data de um voo, mas geralmente há cobrança de uma taxa de remarcação e/ou diferença tarifária, dependendo da política da companhia aérea e do tipo de passagem adquirida.</p>",
        categorias:["Aéreo"] 
    },
    {
        id: 19,
        pergunta: "Quais são os direitos dos passageiros em casos de atraso de voo?",
        resposta: "<p>Os direitos variam conforme o tempo de atraso:</p><ul><li>1 hora: assistência básica (comunicação, como telefone ou internet);</li><li>2 horas: alimentação (vouchers, lanches ou refeições);</li><li>4 horas ou mais: acomodação ou reembolso integral da passagem, além de transporte, se necessário.</li></ul><p>Se o atraso comprometer o objetivo da viagem, você pode optar pelo reembolso ou realocação em outro voo.</p>",
        categorias:["Aéreo"] 
    },
    {
        id: 20,
        pergunta: "Como funciona o despacho de animais em voos nacionais?",
        resposta: "<p>Animais podem ser transportados na cabine ou no porão, dependendo do tamanho e peso. Regras gerais:</p><ul><li>O animal deve estar em uma caixa de transporte apropriada.</li><li>É necessário apresentar atestado de saúde veterinário válido.</li><li>Taxas adicionais são cobradas, e o limite de peso para transporte na cabine (animal + caixa) geralmente é de 8 a 10 kg.</li></ul>",
        categorias:["Aéreo"]   
    },
    {
        id: 21,
        pergunta: "Quais documentos são necessários para viajar de ônibus entre estados?",
        resposta: "<p>Para viagens interestaduais, é necessário apresentar um documento oficial com foto, como RG, CNH, passaporte, ou carteira de trabalho. No caso de menores de idade, a certidão de nascimento também é aceita.</p>",
        categorias:["Rodoviário"]
    },
    {
        id: 22,
        pergunta: "Crianças podem viajar desacompanhadas em ônibus?",
        resposta: "<p>Menores de 16 anos só podem viajar desacompanhados em ônibus interestaduais se apresentarem uma autorização judicial ou uma autorização dos pais ou responsáveis reconhecida em cartório. Para viagens dentro do mesmo estado, geralmente não é exigida a autorização, mas pode variar conforme as leis estaduais.</p>",
        categorias:["Rodoviário"]
    },
    {
        id: 23,
        pergunta: "Existe limite de bagagem em viagens de ônibus?",
        resposta: "<p>Sim. O limite de bagagem em viagens rodoviárias interestaduais é:</p><ul><li>30 kg no bagageiro (compartimento inferior);</li><li>5 kg para bagagem de mão (dentro do ônibus), respeitando o espaço disponível e as dimensões apropriadas</li></ul>",
        categorias:["Rodoviário"]
    },
    {
        id: 24,
        pergunta: "Quais são os direitos do passageiro em caso de atrasos de ônibus?",
        resposta: "<p>Se o atraso for superior a 1 hora, o passageiro pode:</p><ul><li>Solicitar o reembolso integral do valor da passagem;</li><li>Ser realocado em outro ônibus da mesma empresa sem custo adicional;</li><li>Exigir assistência, como alimentação e acomodação, dependendo do tempo de atraso.</li></ul>",
        categorias:["Rodoviário"]
    },
    {
        id: 25,
        pergunta: "É permitido embarcar com alimentos e bebidas em ônibus interestaduais?",
        resposta: "<p>Sim, é permitido levar alimentos e bebidas, desde que estejam bem embalados e não causem incômodo aos demais passageiros. Bebidas alcoólicas não podem ser consumidas dentro do ônibus.</p>",
        categorias:["Rodoviário"]
    },
    {
        id: 26,
        pergunta: "Como funciona a política de reembolso de passagens rodoviárias?",
        resposta: "<p>O passageiro tem direito ao reembolso integral se desistir da viagem e cancelar a passagem com, no mínimo, 3 horas de antecedência. Algumas empresas podem cobrar uma taxa de administração, conforme previsto no contrato.</p>",
        categorias:["Rodoviário"]
    },
    {
        id: 27,
        pergunta: "Animais de estimação podem viajar em ônibus interestaduais?",
        resposta: "<p>Sim, mas há regras específicas:</p><ul><li>O animal deve estar em uma caixa de transporte adequada;</li><li>Deve-se apresentar um atestado de saúde veterinário emitido com até 10 dias de antecedência;</li><li>Pode haver cobrança de uma taxa extra;</li><li>Nem todas as empresas aceitam animais na cabine, dependendo do tamanho e das condições da viagem.</li></ul>",
        categorias:["Rodoviário"]
    },
    {
        id: 28,
        pergunta: "Qual o procedimento para transportar bicicletas em ônibus?",
        resposta: "<p>As bicicletas podem ser transportadas no bagageiro, mas devem estar desmontadas e embaladas adequadamente para evitar danos. É importante verificar com antecedência a política específica da empresa.</p>",
        categorias:["Rodoviário"]
    },
    {
        id: 29,
        pergunta: "É necessário apresentar identidade para viagens de curta distância?",
        resposta: "<p>Sim, mesmo em viagens de curta distância, é obrigatório apresentar um documento oficial com foto, especialmente em viagens interestaduais. Em viagens municipais ou dentro do estado, a exigência pode ser mais flexível.</p>",
        categorias:["Rodoviário"]
    },
    {
        id: 30,
        pergunta: "Existe gratuidade para idosos em viagens de ônibus?",
        resposta: "<p>Sim, idosos com 60 anos ou mais e renda igual ou inferior a 2 salários mínimos têm direito a gratuidade em viagens interestaduais. As empresas devem reservar, no mínimo, 2 assentos gratuitos por ônibus. Caso essas vagas estejam ocupadas, o idoso pode adquirir o bilhete com desconto de 50% no valor da passagem.</p>",
        categorias:["Rodoviário"]
    },
    {
        id: 31,
        pergunta: " Quais documentos são necessários para viajar em embarcações?",
        resposta: "<p>É necessário apresentar um documento oficial com foto, como RG, CNH, passaporte, ou carteira de trabalho. Para menores de idade, a certidão de nascimento também é aceita, desde que seja original ou uma segunda via recente.</p>",
        categorias:["Hidroviário"] 
    },
    {
        id: 32,
        pergunta: "Como funciona a política de bagagem em transportes marítimos?",
        resposta: "<p>A política de bagagem varia de acordo com a empresa e o tipo de embarcação. Em geral:</p><p>Bagagens de mão devem ser leves e de fácil transporte;</p><p>Para bagagens maiores, pode haver cobrança adicional ou limite de peso, geralmente entre 20 kg e 30 kg no total.</p>",
        categorias:["Hidroviário"] 
    },
    {
        id: 33,
        pergunta: "Crianças precisam de autorização para viajar em barcos?",
        resposta: "<p>Sim, menores de 16 anos precisam de autorização judicial ou de autorização dos pais ou responsáveis com firma reconhecida em cartório, caso estejam desacompanhados. Essa regra se aplica especialmente em viagens interestaduais.</p>",
        categorias:["Hidroviário"] 
    },
    {
        id: 34,
        pergunta: "Posso levar animais de estimação em viagens fluviais?",
        resposta: "<p>Sim, animais de estimação podem ser transportados, mas é necessário seguir regras específicas</p><ul><li>O animal deve estar em uma caixa de transporte adequada;</li><li>É preciso apresentar um atestado de saúde veterinário recente;</li><li>Algumas empresas podem cobrar taxas extras.</li></ul> ",
        categorias:["Hidroviário"] 
    },
    {
        id: 35,
        pergunta: "Existe um limite de passageiros em embarcações de turismo?",
        resposta: "<p>Sim, o limite de passageiros é determinado pela capacidade da embarcação, estabelecida pelas autoridades marítimas (Capitania dos Portos). Esse limite deve ser respeitado para garantir a segurança de todos.</p>",
        categorias:["Hidroviário"] 
    },
    {
        id: 36,
        pergunta: "Quais são os requisitos de segurança para barcos e navios?",
        resposta: "<p>Os requisitos incluem:</p><ul><li>Disponibilidade de coletes salva-vidas para todos os passageiros;</li><li>Equipamentos de segurança (extintores de incêndio, botes salva-vidas)</li><li>Tripulação treinada em primeiros socorros;</li><li>Vistorias periódicas realizadas pela Marinha do Brasil.</li></ul>",
        categorias:["Hidroviário"] 
    },
    {
        id: 37,
        pergunta: "É permitido levar bebidas alcoólicas em transportes fluviais?",
        resposta: "<p>Em geral, sim, desde que estejam bem embaladas e em quantidade moderada para uso pessoal. Porém, o consumo de bebidas alcoólicas pode ser restrito dentro da embarcação, dependendo da política da empresa.</p>",
        categorias:["Hidroviário"] 
    },
    {
        id: 38,
        pergunta: "Como funciona o cancelamento de passagens em viagens de barco?",
        resposta: "<p>O cancelamento segue as regras estabelecidas pela empresa de transporte. Em geral, é possível solicitar reembolso ou remarcação, desde que o pedido seja feito com antecedência. Algumas empresas podem cobrar taxas administrativas.</p> ",
        categorias:["Hidroviário"] 
    },
    {
        id: 39,
        pergunta: "Existe algum tipo de seguro obrigatório para viagens marítimas?",
        resposta: "<p>Sim, as empresas de transporte devem oferecer seguro de responsabilidade civil obrigatório para cobrir danos causados a passageiros durante o transporte. Em viagens turísticas, pode ser oferecido um seguro adicional.</p>",
        categorias:["Hidroviário"] 
    },
    {
        id: 40,
        pergunta: "Quais os direitos dos passageiros em caso de cancelamento da viagem?",
        resposta: "<p>Os passageiros têm direito a:</p>,<ul><li>Reembolso integral do valor da passagem;</li><li>Remarcação para outra data sem custos adicionais;</li><li>Assistência, como alimentação e hospedagem, caso o cancelamento ocorra após o embarque programado.</li></ul>",
        categorias:["Hidroviário"] 
    },
    {
        id: 41,
        pergunta: "Quais documentos são necessários para realizar o check-in em hotéis no Brasil?",
        resposta: "<p>É necessário apresentar um documento oficial com foto, como RG, CNH ou passaporte. Para menores de idade, é necessário apresentar a certidão de nascimento ou RG, além de autorização dos pais, se viajarem desacompanhados.</p>",
        categorias:["Hospedagem"] 
    },
    {
        id: 42,
        pergunta: "Menores de idade podem se hospedar sozinhos em hotéis?",
        resposta: "<p>Não, menores de 18 anos só podem se hospedar desacompanhados com uma autorização por escrito dos pais ou responsáveis, com firma reconhecida em cartório, além de um documento de identificação.</p>",
        categorias:["Hospedagem"] 
    },
    {
        id: 43,
        pergunta: "É obrigatório apresentar o comprovante de vacinação para se hospedar?",
        resposta: "<p>Atualmente, essa exigência varia de acordo com a legislação local e as políticas do hotel. Durante períodos de emergência sanitária, como a pandemia de COVID-19, alguns estabelecimentos podem solicitar comprovantes de vacinação ou testes negativos</p>",
        categorias:["Hospedagem"] 
    },
    {
        id: 44,
        pergunta: "Existe um horário padrão para check-in e check-out em hotéis?",
        resposta: "<p>Sim, a maioria dos hotéis no Brasil adota o seguinte horário:</p><ul><li>Check-in: a partir de 14h.</li><li>Check-out: até 12h.</li></ul><p>Alguns estabelecimentos permitem ajustes mediante solicitação ou cobrança adicional.</p>",
        categorias:["Hospedagem"] 
    },
    {
        id: 45,
        pergunta: "É permitido levar animais de estimação para hotéis?",
        resposta: "<p>Isso depende da política do hotel. Muitos estabelecimentos aceitam pets, mas podem cobrar taxas adicionais e exigir regras específicas, como manter o animal em áreas designadas.</p>",
        categorias:["Hospedagem"] 
    },
    {
        id: 46,
        pergunta: "O que fazer se houver problemas no quarto do hotel?",
        resposta: "<p>Se houver problemas, como falhas no ar-condicionado ou falta de limpeza, você deve:</p><ul><li>Informar a recepção ou o serviço de atendimento ao cliente do hotel imediatamente.</li><li>Solicitar a troca de quarto ou reparo.</li><li>Caso o problema não seja resolvido, pode registrar reclamação formal ou até solicitar indenização, dependendo da gravidade.</li></ul>",
        categorias:["Hospedagem"] 
      },
    {
        id: 47,
        pergunta: "Quais são os direitos do hóspede em caso de cancelamento da reserva pelo hotel?",
        resposta: "<p>Se o hotel cancelar a reserva sem justa causa, o hóspede tem direito a:</p><ul><li>Reembolso integral do valor pago;</li><li>Indenização por danos materiais ou morais, caso aplicável;</li><li>Relocação para outro hotel de padrão equivalente ou superior, dependendo das circunstâncias.</li></ul>",
        categorias:["Hospedagem"] 
    },
    {
        id: 48,
        pergunta: "É permitido cozinhar nos quartos de hotel?",
        resposta: "<p>Em geral, não é permitido cozinhar em quartos de hotel comuns, a menos que o estabelecimento seja um apart-hotel ou tenha cozinhas integradas nos quartos. O uso de aparelhos como fogareiros e churrasqueiras portáteis é estritamente proibido devido a riscos de segurança.</p>",
        categorias:["Hospedagem"] 
    },
    {
        id: 49,
        pergunta: "O hotel pode cobrar taxas extras não informadas na reserva?",
        resposta: "<p>Não. Toda taxa adicional deve ser informada previamente no ato da reserva. Cobranças surpresa, como taxas de limpeza ou serviços obrigatórios, podem ser questionadas e contestadas.</p>",
        categorias:["Hospedagem"] 
    },
    {
        id: 50,
        pergunta: "Quais são as regras de cancelamento de reservas de hospedagem?",
        resposta: "<p>As regras variam conforme a política do hotel e o tipo de tarifa contratada:</p><ul><li>Tarifa flexível: permite cancelamento gratuito dentro de um prazo especificado (geralmente até 24 ou 48 horas antes da chegada).</li><li>Tarifa não reembolsável: não permite reembolso, mesmo em caso de cancelamento.</li><li>Em casos de força maior (como doenças ou emergências), pode ser possível negociar com o hotel.</li></ul>",
        categorias:["Hospedagem"] 
    },
    {
        id: 51,
        pergunta: "Quais documentos são necessários para crianças viajarem dentro do Brasil?",
        resposta: "<p>Para viagens nacionais, crianças podem viajar com:</p><ul><li>Certidão de nascimento (original ou cópia autenticada);</li><li>RG (caso possuam).</li></ul><p>Adolescentes (a partir de 12 anos) precisam de um documento oficial com foto, como RG ou passaporte.</p>",
        categorias:["Menores"] 
    },
    {
        id: 52,
        pergunta: "Crianças precisam de autorização para viajar desacompanhadas?",
        resposta: "<p>Sim. Crianças menores de 16 anos precisam de autorização judicial ou autorização escrita dos pais, reconhecida em cartório, para viajar desacompanhadas ou com terceiros que não sejam parentes diretos, em viagens interestaduais.</p>",
        categorias:["Menores"] 
    },
    {
        id: 53,
        pergunta: "Quais documentos são necessários para comprovar parentesco?",
        resposta: "<p>A certidão de nascimento ou RG da criança e dos pais/responsáveis serve para comprovar o parentesco. Em alguns casos, o passaporte da criança também pode ser usado.</p>",
        categorias:["Menores"]  
    },
    {
        id: 54,
        pergunta: "Existe limite de idade para crianças viajarem sozinhas de avião?",
        resposta: "<p>Sim. Em voos nacionais, crianças menores de 16 anos não podem viajar sozinhas sem autorização judicial ou consentimento dos pais. As companhias aéreas oferecem serviço de acompanhamento para menores desacompanhados, mediante solicitação.</p>",
        categorias:["Menores"] 
    },
    {
        id: 55,
        pergunta: "Menores de idade podem viajar com avós ou tios sem autorização?",
        resposta: "<p>Sim, desde que o parentesco seja comprovado por documentos, como certidão de nascimento da criança e RG do acompanhante. Caso o parentesco não seja evidente, será necessária uma autorização reconhecida em cartório.</p>",
        categorias:["Menores"] 
    },
    {
        id: 56,
        pergunta: "Crianças precisam de passaporte para viagens internacionais?",
        resposta: "<p>Sim. Todas as crianças, independentemente da idade, precisam de passaporte para viagens internacionais. Além disso, pode ser exigido visto, dependendo do país de destino.</p>",
        categorias:["Menores"] 
    },
    {
        id: 57,
        pergunta: "É necessário apresentar autorização dos pais para viagens internacionais?",
        resposta: "<p>Sim. Se a criança ou adolescente viajar com apenas um dos pais ou com terceiros, o outro genitor ou ambos os pais devem fornecer uma autorização por escrito, com firma reconhecida. O modelo deve seguir as orientações da Polícia Federal.</p>",
        categorias:["Menores"] 
    },
    {
        id: 58,
        pergunta: "É permitido transportar carrinhos de bebê em viagens aéreas?",
        resposta: "<p>Sim. Carrinhos de bebê podem ser transportados sem custo adicional na maioria das companhias aéreas. Normalmente, eles podem ser usados até o momento do embarque e depois despachados como bagagem.</p>",
        categorias:["Menores"] 
    },
    {
        id: 59,
        pergunta: "Qual a idade mínima para crianças viajarem de ônibus desacompanhadas?",
        resposta: "<p>Crianças menores de 16 anos não podem viajar desacompanhadas em ônibus interestaduais sem autorização judicial ou uma autorização dos pais, reconhecida em cartório.</p>",
        categorias:["Menores"] 
    },
    {
      id: 60,
      pergunta: "Como funciona o embarque prioritário para quem viaja com crianças?",
      resposta: "<p>A lei garante o direito ao embarque prioritário para passageiros que viajam com crianças de colo (menores de 2 anos). Isso vale tanto para aeroportos quanto para terminais rodoviários e marítimos.</p>",
      categorias:["Menores"] 
  },
    {
        id: 61,
        pergunta: "Quais documentos são necessários para viajar para o exterior?",
        resposta: "<p>Para viagens internacionais, é necessário apresentar:</p><ul><li>Passaporte válido (com validade mínima de 6 meses, dependendo do país de destino);</li><li>Visto, se exigido pelo país de destino;</li><li>RG ou outro documento com foto, para países do Mercosul (em substituição ao passaporte).</li></ul>",
        categorias:["Internacional"] 
    },
    {
        id: 62,
        pergunta: "É necessário visto para todos os destinos internacionais?",
        resposta: "<p>Não. A exigência de visto varia de acordo com o país de destino e a finalidade da viagem. Muitos países possuem acordos de isenção de visto para brasileiros, principalmente para turismo de curta duração.</p>",
        categorias:["Internacional"] 
    },
    {
        id: 63,
        pergunta: "Quais países aceitam apenas o RG para entrada?",
        resposta: "<p>Países do Mercosul (como Argentina, Uruguai, Paraguai e Chile) permitem a entrada de brasileiros apenas com o RG, desde que esteja em bom estado e tenha sido emitido há menos de 10 anos.</p>",
        categorias:["Internacional"] 
  },
    {
        id: 64,
        pergunta: "Como solicitar um passaporte no Brasil?",
        resposta: "<p>Para solicitar um passaporte, você deve:</p><ul><li>Preencher o formulário no site da Polícia Federal;</li><li>Pagar a taxa de emissão (GRU);</li><li>Agendar o atendimento presencial;</li><li>Comparecer com os documentos exigidos (RG, CPF, título de eleitor, e comprovante de quitação eleitoral, entre outros);</li><li>Retirar o passaporte no local indicado.</li></ul> ",
        categorias:["Internacional"]  
    },
    {
        id: 65,
        pergunta: "Qual a validade mínima do passaporte para viagens internacionais?",
        resposta: "<p>A maioria dos países exige que o passaporte tenha validade mínima de 6 meses a partir da data de entrada. É importante verificar essa exigência antes de viajar.</p>",
        categorias:["Internacional"] 
    },
    {
        id: 66,
        pergunta: "É necessário apresentar certificado de vacinação para viagens internacionais?",
        resposta: "<p>Depende do país de destino. Muitos países exigem o Certificado Internacional de Vacinação ou Profilaxia (CIVP), especialmente para a vacina contra a febre amarela. Recentemente, alguns também exigiram comprovantes relacionados à COVID-19.</p>",
        categorias:["Internacional"] 
    },
    {
        id: 67,
        pergunta: "Quais são as regras de alfândega para quem sai do Brasil?",
        resposta: "<p>Antes de sair do Brasil, é importante declarar bens de alto valor (como joias e eletrônicos novos) na Receita Federal, para evitar problemas no retorno. Há também limites para transporte de moeda (até R$ 10.000,00 em espécie sem declaração).</p>",
        categorias:["Internacional"]  
    },
    {
        id: 68,
        pergunta: "O que fazer se o passaporte for perdido durante a viagem?",
        resposta: "<p>Em caso de perda ou roubo do passaporte no exterior:</p><ul><li>Faça um boletim de ocorrência na delegacia local;</li><li>Procure a embaixada ou consulado brasileiro mais próximo para emitir um passaporte de emergência.</li></ul>",
        categorias:["Internacional"] 
    },
    {
        id: 69,
        pergunta: "É necessário contratar seguro de viagem para sair do Brasil?",
        resposta: "<p>Para alguns países, como os da União Europeia (que seguem o Acordo de Schengen), o seguro viagem é obrigatório, com cobertura mínima de 30 mil euros para despesas médicas. Mesmo onde não for obrigatório, o seguro é altamente recomendado.</p>",
        categorias:["Internacional"] 
    },
    {
        id: 70,
        pergunta: "Quais são os direitos do passageiro em caso de voos cancelados para o exterior?",
        resposta: "<p>Se o voo for cancelado, você tem direito a:</p><ul><li>Reacomodação em outro voo ou reembolso integral;</li><li>Alimentação, comunicação e acomodação, conforme o tempo de espera;</li><li>Indenização, caso o cancelamento seja por falha da companhia aérea e cause prejuízos.</li></ul>",
        categorias:["Internacional"] 
    },
    {
        id: 71,
        pergunta: "Quais documentos são necessários para transportar animais no Brasil?",
        resposta: "<p>Para transporte dentro do Brasil, geralmente são exigidos:</p><ul><li>Atestado de saúde do animal emitido por um veterinário (com validade de até 10 dias);</li><li>Carteira de vacinação atualizada (incluindo a vacina antirrábica, obrigatória para cães e gatos com mais de 3 meses).</li></ul>",
        categorias:["Animais"] 
    },
    {
        id: 72,
        pergunta: "É necessário apresentar algum documento específico para viagens internacionais com animais?",
        resposta: "<p>Sim, além do passaporte do proprietário, é necessário</p><p>Certificado Veterinário Internacional (CVI), emitido por um veterinário habilitado ou pela autoridade de saúde animal (MAPA - Ministério da Agricultura, Pecuária e Abastecimento); </p><p>Exames específicos ou quarentena, dependendo do país de destino.</p>",
        categorias:["Animais"] 
    },
    {
        id: 73,
        pergunta: "Como funciona o transporte de animais em aviões?",
        resposta: "<p>Os animais podem viajar:</p><ul><li>Na cabine: para animais de pequeno porte, desde que estejam em caixas de transporte adequadas e respeitem o peso máximo estipulado pela companhia aérea (geralmente entre 7 e 10 kg, incluindo a caixa).</li><li>No porão pressurizado: para animais maiores ou quando o limite de peso da cabine for excedido.</li><li>Cada companhia aérea possui suas regras específicas e pode cobrar taxas adicionai</li></ul> ",
        categorias:["Animais"] 
    },
    {
        id: 74,
        pergunta: "Animais podem viajar em ônibus rodoviários?",
        resposta: "<p>Sim, desde que sigam as regras da empresa de transporte:</p><ul><li>O animal deve estar em uma caixa de transporte apropriada e higienizada;</li><li>É necessário apresentar o atestado de saúde e carteira de vacinação;</li><li>Algumas empresas podem limitar o número de animais por viagem e cobrar taxas extras.</li></ul>",
        categorias:["Animais"] 
    },
    {
        id: 75,
        pergunta: "Como funciona o transporte de animais em barcos ou navios?",
        resposta: "<p>As regras variam entre empresas, mas geralmente:</p><ul><li>O animal deve estar em uma caixa de transporte;</li><li>É necessário apresentar atestado de saúde e carteira de vacinação;</li><li>O transporte pode ser restrito a áreas específicas da embarcação.</li></ul>",
        categorias:["Animais"] 
    },
    {
        id: 76,
        pergunta: "Existem restrições para transportar determinadas espécies de animais?",
        resposta: "<p>Sim, espécies exóticas ou ameaçadas de extinção exigem autorizações adicionais, como licenças do IBAMA. Animais silvestres só podem ser transportados com documentação que comprove origem legal.</p>",
        categorias:["Animais"] 
    },
    {
        id: 77,
        pergunta: "Quais são as condições exigidas para a caixa de transporte?",
        resposta: "<p>A caixa de transporte deve:</p><ul><li>Ser ventilada e de tamanho suficiente para o animal ficar de pé, se virar e deitar confortavelmente;</li><li>Estar bem travada e higienizada;</li><li>Cumprir os padrões estipulados pelas companhias de transporte e pela IATA (Associação Internacional de Transporte Aéreo), no caso de viagens aéreas.</li></ul>",
        categorias:["Animais"] 
    },
    {
        id: 78,
        pergunta: "Existe limite de peso para transporte de animais?",
        resposta: "<p>Sim, o limite de peso varia conforme o meio de transporte e a companhia. Para viagens aéreas, o limite para transporte na cabine geralmente é de 7 a 10 kg (incluindo a caixa). Acima desse peso, o transporte deve ser no porão.</p>",
        categorias:["Animais"] 
    },
    {
        id: 79,
        pergunta: "Quais são os custos para transportar animais em viagens?",
        resposta: "<p>Os custos dependem do meio de transporte e da política da empresa:</p><ul><li>Avião: cobram taxas que variam conforme o peso do animal e o destino;</li><li>Ônibus: algumas empresas cobram uma taxa fixa ou por peso;</li><li>Barcos: as taxas variam de acordo com o serviço oferecido.</li></ul>",
        categorias:["Animais"] 
    },
    {
        id: 80,
        pergunta: "Animais de apoio emocional ou serviço têm regras diferenciadas?",
        resposta: "<p>Sim, animais de apoio emocional ou de serviço (como cães-guia) têm regras mais flexíveis:!</p><ul><li>Podem viajar na cabine, independentemente do peso;</li><li>Não precisam de caixa de transporte, mas devem estar com coleira e guia</li><li>É necessário apresentar documentação que comprove a função do animal e seu treinamento.</li></ul>",
        categorias:["Animais"] 
    },
    {
        id: 81,
        pergunta: "Quais são os requisitos sanitários para viagens internacionais?",
        resposta: "<p>Os requisitos sanitários podem inclui</p><ul><li>Certificado Internacional de Vacinação (CIVP), principalmente para vacinas como a da febre amarela, exigido por diversos países, especialmente na América Latina e na África.</li><li>Exames e vacinas obrigatórios de acordo com o país de destino, como para a COVID-19 (em alguns países ainda é exigido).</li><li>Em alguns casos, pode ser necessário um período de quarentena ou isolamento dependendo da condição do viajante ou de seu histórico de saúde.</li></ul>",
        categorias:["Segurança"] 
    },
    {
        id: 82,
        pergunta: "Quais vacinas são obrigatórias para viajar para o exterior?",
        resposta: "<p>As vacinas exigidas variam de acordo com o destino, mas algumas comuns incluem:</p><ul><li>Febre amarela (necessária para destinos na América Latina, África e algumas regiões da Ásia);</li><li>COVID-19 (em alguns países ainda exigem teste negativo ou certificado de vacinação); Meningite (para destinos como Arábia Saudita e regiões específicas).</li><li>Cada país tem requisitos próprios, então é importante consultar o consulado ou embaixada do destino.</li></ul>",
        categorias:["Segurança"]  
    },
    {
        id: 83,
        pergunta: "O que fazer se alguém ficar doente durante a viagem?",
        resposta: "<p>Se alguém ficar doente durante a viagem, é importante:</p><ul><li>Informar a tripulação ou a equipe do transporte imediatamente (avião, ônibus, barco) para receber assistência.</li><li>Procurar atendimento médico, se necessário, conforme as orientações do serviço de saúde do transporte ou da localidade.</li><li>Verificar o seguro viagem, se contratado, para cobertura de despesas médicas. Em viagens internacionais, o seguro é altamente recomendado.</li></ul>",
        categorias:["Segurança"] 
    },
    {
        id: 84,
        pergunta: "Como proceder se o voo for interrompido por questões sanitárias?",
        resposta: "<p>Em caso de interrupção do voo por questões sanitárias (ex: surto de doença), as companhias aéreas devem:</p><ul><li>Garantir assistência material, como alimentação, hospedagem e transporte até o aeroporto de partida ou de destino, se necessário.</li><li>Oferecer reacomodação ou reembolso, conforme a política da empresa e o motivo da interrupção</li><li>Cumprir as recomendações de autoridades sanitárias, como quarentena ou restrições de entrada no destino.</li></ul>",
        categorias:["Segurança"] 
    },
    {
        id: 85,
        pergunta: "Quais são os procedimentos de segurança sanitária nos aeroportos?",
        resposta: "<p>Os procedimentos incluem:</p><ul><li>Verificação de temperatura em alguns países ou aeroportos (principalmente em tempos de pandemia).</li><li>Uso obrigatório de máscara em determinadas regiões ou durante voos (quando as normas sanitárias exigem).</li><li>Desinfecção de mãos e controle de distância social, conforme o protocolo de segurança do aeroporto.</li></ul>",
        categorias:["Segurança"] 
    },  
    {
        id: 86,
        pergunta: "Quais cuidados de segurança devem ser tomados com alimentos e bebidas em viagens internacionais?",
        resposta: "<p>Ao viajar para o exterior, especialmente para países com diferentes padrões sanitários, recomenda-se</p><ul><li>Evitar consumir alimentos de vendedores ambulantes ou alimentos não embalados;</li><li>Beber apenas água engarrafada ou filtrada;</li><li>Ter cuidado com alimentos crus ou mal cozidos, especialmente frutos do mar e carne</li><li>Levar medicamentos como antidiarreicos e antibióticos para tratar infecções alimentares.</li></ul>",
        categorias:["Segurança"] 
    },
    {
        id: 87,
        pergunta: "Como proceder em caso de acidente ou emergência médica no exterior?",
        resposta: "<p>Em caso de acidente ou emergência médica no exterior:</p><ul><li>Ligue para o número de emergência local (cada país tem um número específico).</li><li>Informe a companhia de seguro viagem, caso tenha uma.</li><li>Procurar um hospital ou clínica confiável, de preferência indicado pela embaixada ou consulado.</li><li>Tenha sempre uma cópia do passaporte, documentos de seguro e cartão de crédito para facilitar o processo.</li></ul>",
        categorias:["Segurança"] 
    },
    {
        id: 88,
        pergunta: "Quais são as medidas de segurança exigidas para viagens aéreas?",
        resposta: "<p>As medidas de segurança incluem:</p><ul><li>Revistas de segurança e verificação de objetos pessoais antes de embarcar (passageiros e bagagem).</li><li>Controle de líquidos (não podendo ultrapassar 100 ml por recipiente e totalizando no máximo 1 litro por passageiro).</li><li>Uso obrigatório de cintos de segurança durante a decolagem, aterrissagem e em turbulências.</li><li>Proibição de objetos perigosos (como facas e líquidos inflamáveis) na bagagem de mão.</li></ul>",
        categorias:["Segurança"] 
    },
    {
        id: 89,
        pergunta: "O que é a inspeção de segurança nos aeroportos e como funciona",
        resposta: "<p>A inspeção de segurança visa garantir a segurança dos passageiros e do voo. Inclui:</p><ul><li>Passar por raios-X de bagagens, mochilas e itens pessoais.</li><li>Revistas corporais dos passageiros, realizadas por agentes de segurança</li><li>Verificação de documentos e passagens para assegurar que o passageiro está autorizado a embarcar.</li></ul>",
        categorias:["Segurança"] 
    },
    {
        id: 90,
        pergunta: "O que fazer em caso de violação das regras de segurança ou de emergência no transporte?",
        resposta: "<p>Em caso de violação das regras de segurança ou emergência (como comportamentos inadequados a bordo), é importante:</p><ul><li>Informar imediatamente a tripulação ou a segurança do transporte.</li><li>Cooperar com as autoridades e seguir as instruções para garantir a segurança de todos.</li></ul><p>Em alguns casos, o passageiro pode ser removido da aeronave ou do transporte e enfrentará consequências legais, como multas ou prisão, dependendo da gravidade da violação.</p>",
        categorias:["Segurança"]  
    },
    {
        id: 91,
        pergunta: "Quais são as regras específicas para viajar para a Região Norte do Brasil?",
        resposta: "<p>Na Região Norte, algumas regras e cuidados específicos incluem:</p><ul><li>Transporte fluvial: Devido ao grande número de rios e falta de infraestrutura rodoviária em algumas áreas, muitos deslocamentos são feitos de barco. Para viagens fluviais, é importante verificar a segurança da embarcação e se há documentos específicos exigidos pelas autoridades locais.</li><li>Saúde: A vacinação contra a febre amarela é altamente recomendada, especialmente para quem vai para regiões de mata e áreas de risco, como a Amazônia.</li><li>Documentação: Em algumas localidades, como nas áreas indígenas, é necessário obter permissões especiais para a visitação.</li></ul>",
        categorias:["Regionais"] 
    },
    {
        id: 92,
        pergunta: "Quais são as regras de transporte para a Região Nordeste do Brasil?",
        resposta: "<p>Na Região Nordeste, algumas características específicas incluem:</p><ul><li>Transporte rodoviário: Muitas viagens são feitas de ônibus, e é importante observar as condições das estradas, que podem variar bastante entre os estados. Verifique também a obrigatoriedade de comprovação de saúde para menores de idade viajando desacompanhado</li><li>Segurança: Em algumas áreas turísticas e grandes cidades, como Salvador e Recife, é recomendado tomar precauções extras quanto à segurança pessoal, como evitar exibir objetos de valor.</li><li>Clima e saúde: O calor intenso e a umidade podem exigir cuidados com hidratação e proteção solar, além de se atentar à vacina contra a febre amarela, especialmente se viajar para áreas mais afastadas.</li></ul>",
        categorias:["Regionais"] 
    },
    {
        id: 93,
        pergunta: "Existem requisitos específicos para viajar para a Região Centro-Oeste do Brasil?",
        resposta: "<p>Na Região Centro-Oeste, algumas regras e cuidados incluem:</p><ul><li>Transporte rodoviário e aéreo: A região tem grandes distâncias entre cidades, então, além dos voos, é comum o uso de ônibus.</li><li>Saúde: A febre amarela também é uma preocupação na Região Centro-Oeste, então a vacina é recomendada antes de viajar para áreas de campo ou rurais.</li><li>Turismo: No Pantanal e outras áreas de ecoturismo, as visitas podem exigir a contratação de guias locais para garantir a segurança e o respeito ao meio ambiente.</li></ul>",
        categorias:["Regionais"] 
      },
    {
        id: 94,
        pergunta: "Quais são as regras para viajar para a Região Sudeste do Brasil?",
        resposta: "<p>A Região Sudeste, mais urbanizada, tem algumas particularidades:</p><ul><li>Transporte aéreo: Grande parte das viagens internas e internacionais passam pelos aeroportos de São Paulo (Guarulhos) e Rio de Janeiro (Galeão), que são hubs principais do país.</li><li>Segurança: Embora seja uma região com boas opções de transporte público e infraestrutura, é necessário tomar precauções em áreas urbanas de maior risco, como em algumas regiões da Zona Norte do Rio ou de bairros periféricos em São Paulo.</li><li>Turismo: As regras sanitárias para visitação de parques, museus e áreas protegidas devem ser observadas, com exigências de horários de visitação e preservação ambiental.</li></ul>",
        categorias:["Regionais"] 
    },
    {
        id: 95,
        pergunta: "O que se deve saber sobre viajar para a Região Sul do Brasil?",
        resposta: "<p>A Região Sul possui algumas particularidades:</p><ul><li>Transporte rodoviário e aéreo: Embora as distâncias não sejam tão grandes quanto no Norte ou Centro-Oeste, as viagens por estrada são comuns, e é necessário verificar as condições das rodovias, especialmente no inverno, quando ocorrem geadas e até nevascas.</li><li>Clima: A Região Sul tem clima subtropical, com inverno rigoroso em algumas áreas, como no Rio Grande do Sul e Santa Catarina. É importante se preparar para baixas temperaturas e até mesmo neve, especialmente em cidades como Gramado.</li><li>Turismo: As regras para a visitação de parques e reservas naturais devem ser seguidas à risca, além de atenção à regulamentação de atividades como o turismo de aventura, que pode exigir permissões e a presença de guias especializados.</li></ul>",
        categorias:["Regionais"] 
    },
    {
        id: 96,
        pergunta: "Existem regras específicas para o transporte de animais em áreas rurais?",
        resposta: "<p>Sim, em algumas regiões rurais do Brasil, principalmente no Norte e Centro-Oeste, pode ser exigido o transporte de animais em veículos específicos (como caminhões ou tratores) e com documentação adicional de saúde. Em regiões de ecoturismo, o transporte de animais pode ser restrito ou exigido em áreas específicas para não interferir nos ecossistemas locais.</p>",
        categorias:["Regionais"] 
    },
    {
        id: 97,
        pergunta: "Quais cuidados específicos são necessários em viagens para áreas de risco sanitário, como a Amazônia?",
        resposta: "<p>Em áreas como a Amazônia, é fundamental:</p><ul><li>Vacinação: A vacina contra a febre amarela é obrigatória, e outras vacinas, como a hepatite e tétano, também são recomendadas.</li><li>Proteção contra mosquitos: É essencial usar repelente, roupas de manga longa e mosquiteiro, já que há grande incidência de doenças como malária e dengue.</li><li>Cuidados com água e alimentos: O consumo de água deve ser feito sempre de garrafa fechada, e é importante evitar alimentos crus ou mal cozidos.</li></ul>",
        categorias:["Regionais"] 
    },
    {
        id: 98,
        pergunta: "Há regras específicas para viagens de turismo em áreas indígenas no Brasil?",
        resposta: "<p>Sim, para viagens a áreas indígenas, especialmente no Norte e Centro-Oeste, é necessário:</p><ul><li>Autorização prévia: O acesso a terras indígenas depende da permissão das autoridades locais e das lideranças indígenas.</li><li>Guia especializado: Em muitas comunidades, é necessário contratar um guia local para visitas e garantir o respeito às normas culturais e ambientais.</li><li>Respeito às culturas locais: É importante seguir as orientações dos líderes indígenas, evitando comportamentos invasivos ou desrespeitosos.</li></ul>",
        categorias:["Regionais"] 
    },
    {
        id: 99,
        pergunta: "Quais são as regras específicas para o transporte de grandes volumes de bagagem na Região Norte do Brasil?",
        resposta: "<p>No Norte, o transporte de grandes volumes de bagagem pode envolver transporte fluvial, o que exige cuidados específicos com a segurança e a proteção dos itens. Além disso, pode ser necessário contratar serviços de transporte especializados para enviar grandes volumes ou cargas específicas, como em viagens para áreas mais isoladas.</p>",
        categorias:["Regionais"] 
    },
    {
        id: 100,
        pergunta: "Quais são as regras de segurança nas viagens para o Pantanal?",
        resposta: "<p>No Pantanal, as regras de segurança incluem:</p><ul><li>Acompanhamento por guias especializados: Devido à natureza selvagem e ao difícil acesso, é essencial contratar guias locais experientes para navegar pelas trilhas ou fazer passeios de barco.</li><li>Cuidado com animais selvagens: É importante manter uma distância segura de animais selvagens, como onças, jacarés e cobras, que são comuns na região.</li><li>Equipamentos de proteção: O uso de roupas apropriadas, como botas e repelentes, é fundamental, assim como garantir a água potável e recursos de emergência em locais remotos.</li></ul>",
        categorias:["Regionais"] 
    },
];
