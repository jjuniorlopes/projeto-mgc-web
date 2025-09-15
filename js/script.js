// Dados dos objetivos estratégicos
const objetivosData = {
    estrutura: {
        title: "Adequar a estrutura organizacional às demandas estratégicas",
        description: "Desenvolver uma estrutura organizacional que atenda às necessidades estratégicas dos consórcios, incluindo definição de cargos, responsabilidades e hierarquias adequadas para a execução eficiente das políticas públicas."
    },
    processos: {
        title: "Uniformizar e informatizar os processos de suporte e finalísticos",
        description: "Padronizar e digitalizar todos os processos organizacionais, desde os processos de suporte administrativo até os processos finalísticos de prestação de serviços, garantindo eficiência e transparência."
    },
    pessoas: {
        title: "Aperfeiçoar os processos de gestão de pessoas",
        description: "Implementar práticas modernas de gestão de recursos humanos, incluindo recrutamento, seleção, capacitação, avaliação de desempenho e desenvolvimento profissional das equipes."
    },
    equilibrio: {
        title: "Alcançar o equilíbrio econômico-financeiro",
        description: "Estabelecer uma gestão financeira sustentável que garanta o equilíbrio entre receitas e despesas, permitindo a continuidade e expansão dos serviços prestados aos municípios consorciados."
    },
    receitas: {
        title: "Otimizar a relação entre receitas e despesas correntes",
        description: "Maximizar a eficiência na utilização dos recursos financeiros, buscando sempre a melhor relação custo-benefício nas operações e investimentos realizados."
    },
    portfolio: {
        title: "Alinhar o portifólio de serviços às demandas dos consorciados",
        description: "Desenvolver e ofertar serviços que atendam efetivamente às necessidades e prioridades dos municípios consorciados, garantindo relevância e impacto das ações realizadas."
    },
    qualidade: {
        title: "Elevar a qualidade dos serviços realizados",
        description: "Implementar padrões de excelência na prestação de todos os serviços, estabelecendo métricas de qualidade e processos de melhoria contínua."
    },
    produtividade: {
        title: "Aumentar a produtividade e eficiência dos processos",
        description: "Otimizar os processos organizacionais para aumentar a produtividade das equipes e a eficiência na entrega de resultados aos municípios consorciados."
    },
    captacao: {
        title: "Sistematizar a captação de recursos nacionais e internacionais",
        description: "Desenvolver uma estratégia estruturada para identificação, elaboração e submissão de projetos para captação de recursos junto a órgãos nacionais e internacionais de fomento."
    },
    necessidades: {
        title: "Atender às necessidades e expectativas dos consorciados",
        description: "Garantir que todos os serviços e ações realizadas estejam alinhados com as necessidades reais e expectativas dos municípios consorciados, promovendo alta satisfação e engajamento."
    }
};

// Dados das iniciativas (VERSÃO ATUALIZADA COM 13 ITENS)
const iniciativasData = {
    requalificacao: {
        title: "Requalificação de Vias",
        description: "Programa abrangente de melhoria da infraestrutura viária, incluindo pavimentação, sinalização e drenagem das vias urbanas e rurais dos municípios consorciados.",
        detalhes: [
            "Pavimentação asfáltica de vias urbanas",
            "Implementação de sistema de drenagem",
            "Sinalização horizontal e vertical",
            "Construção de calçadas acessíveis"
        ]
    },
    manutencao: {
        title: "Manutenção de Vias",
        description: "Serviços contínuos de conservação e manutenção das vias públicas para garantir sua durabilidade e segurança.",
        detalhes: [
            "Tapa-buracos e remendos",
            "Limpeza de bueiros e galerias",
            "Manutenção da sinalização",
            "Roçagem de canteiros centrais"
        ]
    },
    cadeias: {
        title: "Fortalecimento de Cadeias Produtivas Rurais",
        description: "Apoio técnico e financeiro para o desenvolvimento e fortalecimento das cadeias produtivas do setor agropecuário.",
        detalhes: [
            "Assistência técnica rural",
            "Capacitação de produtores",
            "Apoio à comercialização",
            "Desenvolvimento de cooperativas"
        ]
    },
    hidrica: {
        title: "Ampliação da Oferta Hídrica",
        description: "Construção e melhoria de infraestruturas hídricas para garantir o acesso à água de qualidade para a população e atividades produtivas.",
        detalhes: [
            "Perfuração de poços artesianos",
            "Construção de cisternas",
            "Sistemas de abastecimento",
            "Tratamento de água"
        ]
    },
    qualificacao: {
        title: "Qualificação de Produtos",
        description: "Programas de melhoria da qualidade e certificação de produtos de origem animal e vegetal produzidos na região.",
        detalhes: [
            "Certificação sanitária",
            "Controle de qualidade",
            "Rastreabilidade de produtos",
            "Adequação às normas técnicas"
        ]
    },
    fundiaria: {
        title: "Regularização Fundiária",
        description: "Suporte técnico e jurídico para a regularização de propriedades rurais e urbanas, garantindo segurança jurídica aos proprietários.",
        detalhes: [
            "Levantamento topográfico",
            "Documentação legal",
            "Georreferenciamento",
            "Registro de imóveis"
        ]
    },
    ambiental: {
        title: "Gestão Ambiental",
        description: "Suporte técnico especializado para fortalecer a gestão ambiental nos municípios consorciados, promovendo sustentabilidade e conformidade com a legislação.",
        detalhes: [
            "Elaboração de planos ambientais",
            "Suporte ao licenciamento ambiental",
            "Programas de educação ambiental",
            "Monitoramento de recursos naturais"
        ]
    },
    infraestrutura: {
        title: "Obras de Infraestrutura",
        description: "Execução consorciada de obras de infraestrutura urbana e construção ou reforma de edificações públicas essenciais para os serviços municipais.",
        detalhes: [
            "Construção de escolas e postos de saúde",
            "Reforma de praças e espaços públicos",
            "Construção de mercados municipais",
            "Edificação de centros administrativos"
        ]
    },
    social: {
        title: "Educação, Cultura, Esporte e Turismo",
        description: "Desenvolvimento de programas e ações integradas para fortalecer as políticas sociais, valorizando a cultura local e promovendo o desenvolvimento regional.",
        detalhes: [
            "Programas educacionais complementares",
            "Fomento a eventos culturais regionais",
            "Melhoria da infraestrutura esportiva",
            "Criação de roteiros turísticos integrados"
        ]
    },
    maquinas: {
        title: "Máquinas e Equipamentos",
        description: "Disponibilização e gerenciamento compartilhado de máquinas e equipamentos entre os municípios para otimizar recursos e viabilizar obras e serviços.",
        detalhes: [
            "Compartilhamento de máquinas pesadas",
            "Aquisição de equipamentos agrícolas",
            "Manutenção de frota compartilhada",
            "Sistema de agendamento online"
        ]
    },
    habitacao: {
        title: "Obras de Habitação",
        description: "Desenvolvimento e execução de programas habitacionais consorciados para atender às necessidades de moradia digna da população.",
        detalhes: [
            "Construção de unidades habitacionais",
            "Programas de reforma de moradias",
            "Implantação de infraestrutura urbana",
            "Regularização de loteamentos"
        ]
    },
    residuos: {
        title: "Resíduos Sólidos",
        description: "Implementação de sistemas integrados e regionais para a gestão de resíduos sólidos, visando a sustentabilidade ambiental e a redução de custos.",
        detalhes: [
            "Implantação de coleta seletiva",
            "Construção de aterros sanitários regionais",
            "Fomento a programas de reciclagem",
            "Campanhas de educação ambiental"
        ]
    },
    planos: {
        title: "Planos e Projetos",
        description: "Elaboração de planos estratégicos e projetos técnicos para orientar o desenvolvimento territorial e viabilizar a captação de recursos.",
        detalhes: [
            "Revisão de planos diretores municipais",
            "Elaboração de projetos para captação de recursos",
            "Realização de estudos de viabilidade técnica",
            "Desenvolvimento de planos setoriais integrados"
        ]
    }
};

// Função para inicializar a aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeInteractiveCards();
    initializeObjectiveButtons();
    initializeInitiativeCards();
    initializeModal();
    initializeScrollAnimations();
    initializeImageInteractions();
});

// Navegação suave
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                targetSection.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    targetSection.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
}

// Interatividade dos cards
function initializeInteractiveCards() {
    const cards = document.querySelectorAll('.interactive-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });
}

// Botões dos objetivos estratégicos
function initializeObjectiveButtons() {
    const objectiveButtons = document.querySelectorAll('.objetivo-btn');
    
    objectiveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const objetivoKey = this.getAttribute('data-objetivo');
            const objetivo = objetivosData[objetivoKey];
            
            if (objetivo) {
                showModal(objetivo.title, objetivo.description);
            }
        });
    });
}

// Cards das iniciativas
function initializeInitiativeCards() {
    const initiativeCards = document.querySelectorAll('.iniciativa-card');
    
    initiativeCards.forEach(card => {
        card.addEventListener('click', function() {
            const iniciativaKey = this.getAttribute('data-iniciativa');
            const iniciativa = iniciativasData[iniciativaKey];
            
            if (iniciativa) {
                const detalhesHtml = iniciativa.detalhes.map(detalhe => 
                    `<li>${detalhe}</li>`
                ).join('');
                
                const fullDescription = `
                    ${iniciativa.description}
                    <br><br>
                    <strong>Principais atividades:</strong>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        ${detalhesHtml}
                    </ul>
                `;
                
                showModal(iniciativa.title, fullDescription);
            }
        });
    });
}

// Sistema de modal
function initializeModal() {
    const modal = document.getElementById('objetivo-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        hideModal();
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideModal();
        }
    });
}

function showModal(title, description) {
    const modal = document.getElementById('objetivo-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    modalTitle.textContent = title;
    modalDescription.innerHTML = description;
    modal.style.display = 'block';
    
    setTimeout(() => {
        modal.querySelector('.modal-content').style.animation = 'modalSlideIn 0.3s ease';
    }, 10);
}

function hideModal() {
    const modal = document.getElementById('objetivo-modal');
    modal.style.display = 'none';
}

// Animações de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Interações com imagens
function initializeImageInteractions() {
    const interactiveImages = document.querySelectorAll('.interactive-image');
    
    interactiveImages.forEach(image => {
        image.addEventListener('click', function() {
            if (this.style.transform === 'scale(1.2)') {
                this.style.transform = 'scale(1)';
                this.style.zIndex = '1';
            } else {
                this.style.transform = 'scale(1.2)';
                this.style.zIndex = '100';
                this.style.transition = 'all 0.4s ease';
            }
        });
        
        document.addEventListener('click', function(event) {
            if (!image.contains(event.target)) {
                image.style.transform = 'scale(1)';
                image.style.zIndex = '1';
            }
        });
    });
}

// Navegação ativa com scroll
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}
updateActiveNavigation();