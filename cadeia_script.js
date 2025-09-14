// Dados das tabelas para cada atividade primária
const atividadesData = {
    requalificacao: {
        title: "Requalificação de Vias",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Qualidade do serviço prestado</td>
                        <td>Nota de pesquisa de qualidade percebida</td>
                        <td><li>Elaborar padrão de pesquisa</li><li>Aplicar pesquisa</li></td>
                    </tr>
                    <tr>
                        <td>Cumprimento do prazo de execução</td>
                        <td>(Qtde de serviços realizados no prazo / Qtde total de serviços programados) x 100</td>
                        <td><li>Propor prazos padrão de execução para cada tipo de serviço</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    manutencao: {
        title: "Manutenção de Vias",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Qualidade do serviço prestado</td>
                        <td>Nota de pesquisa de qualidade percebida</td>
                        <td><li>Elaborar padrão de pesquisa</li><li>Aplicar pesquisa</li></td>
                    </tr>
                    <tr>
                        <td>Cumprimento do prazo de execução</td>
                        <td>(Qtde de serviços realizados no prazo / Qtde total de serviços programados) x 100</td>
                        <td><li>Propor prazos padrão de execução para cada tipo de serviço</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    fortalecimento: {
        title: "Fortalecimento de Cadeias Produtivas Rurais",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nível de atendimento às cadeias produtivas</td>
                        <td>(Produtores atendidos com kits / Produtores identificados) x 100</td>
                        <td><li>Pesquisar base de referência</li></td>
                    </tr>
                    <tr>
                        <td>Assiduidade do assessoramento</td>
                        <td>(Produtores assiduamente assessorados / Produtores atendidos com kits) x 100</td>
                        <td><li>Estabelecer quantidade mínima de visitas para caracterizar um "assessoramento assíduo".</li></td>
                    </tr>
                    <tr>
                        <td>Efetividade dos insumos produtivos</td>
                        <td>(Produtores em condição produtiva / Produtores atendidos com kits) x 100</td>
                        <td><li>Definir o status de "condição produtiva" para cada cadeia.</li><li>Verificar se há parâmetro de renda por produtor.</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    hidrica: {
        title: "Implantação de Estruturas para Ampliação da Oferta Hídrica",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Qualidade do serviço prestado</td>
                        <td>Nota de pesquisa de qualidade percebida</td>
                        <td><li>Elaborar padrão de pesquisa</li><li>Aplicar pesquisa</li></td>
                    </tr>
                    <tr>
                        <td>Cumprimento do prazo de execução</td>
                        <td>(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    qualificacao: {
        title: "Qualificação de Produtos de Origem Animal e Vegetal",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cumprimento do prazo de certificação</td>
                        <td>(Certificações realizadas no prazo / Total de certificações realizadas) x 100</td>
                        <td><li>Definir prazos-padrão para cada tipo de certificação</li></td>
                    </tr>
                    <tr>
                        <td>Abrangência de produtores certificados</td>
                        <td>(Produtores certificados / Produtores identificados) x 100</td>
                        <td><li>Definir base de referência para os produtores</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    fundiaria: {
        title: "Suporte Técnico à Regularização Fundiária",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cumprimento do prazo para formação de processo</td>
                        <td>(Processos formados no prazo / Total de processos formados) x 100</td>
                        <td><li>Definir prazo-padrão para a formação de processos</li></td>
                    </tr>
                    <tr>
                        <td>Abrangência de propriedades rurais regularizadas</td>
                        <td>(Propriedades rurais regularizadas / Propriedades rurais identificadas) x 100</td>
                        <td><li>Definir base de referência para as propriedades rurais</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    ambiental: {
        title: "Suporte Técnico à Gestão Ambiental Municipal",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cumprimento de prazo para emissão de pareceres</td>
                        <td>(Pareceres emitidos no prazo / Total de pareceres emitidos) x 100</td>
                        <td><li>Estabelecer prazo-padrão para emissão de pareceres.</li></td>
                    </tr>
                    <tr>
                        <td>Cumprimento do plano de educação ambiental</td>
                        <td>(Ações realizadas / Ações previstas no plano) x 100</td>
                        <td><li>Definir escopo mínimo de plano</li><li>Elaborar plano de educação ambiental</li></td>
                    </tr>
                    <tr>
                        <td>Elevação do nível do influência sobre o cumprimento dos condicionantes</td>
                        <td>(Condicionantes com status monitorado / Total de condicionantes) x 100</td>
                        <td><li>Levantar os processos nos quais o consórcio está atuando e os seus condicionantes</li><li>Prospectar e programar visitas para identificar o status de cada condicionante</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    infraestrutura: {
        title: "Execução de Obras de Infraestrutura Urbana e Edificações Públicas",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Qualidade do serviço prestado</td>
                        <td>Nota de pesquisa de qualidade percebida</td>
                        <td><li>Elaborar padrão de pesquisa</li><li>Aplicar pesquisa</li></td>
                    </tr>
                    <tr>
                        <td>Cumprimento do prazo de execução</td>
                        <td>(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    educacao: {
        title: "Fortalecimento das Políticas de Educação, Cultura, Esporte e Turismo",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cumprimento de iniciativas planejadas</td>
                        <td>(Ações realizadas / Ações previstas) x 100</td>
                        <td><li>Elaborar um plano de ação para contribuição com as políticas</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    maquinas: {
        title: "Disponibilização de Máquinas e Equipamentos",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Disponibilidade máxima da máquina/equipamento para uso</td>
                        <td>(Horas com máquina disponível / Qtde total de horas de cessão) x 100</td>
                        <td><li>Levantar dados que compõem a métrica</li></td>
                    </tr>
                    <tr>
                        <td>Margem favorável de locação</td>
                        <td>(Valor recebido por hora de cessão onerosa / Custo por hora de máquina)</td>
                        <td><li>Levantar todos os tipos de contrapartidas onerosas pelo uso das máquinas</li><li>Discriminar os custos com manutenção corretiva e preventiva</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    habitacao: {
        title: "Execução de Obras de Habitação",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Qualidade do serviço prestado</td>
                        <td>Nota de pesquisa de qualidade percebida</td>
                        <td><li>Elaborar padrão de pesquisa</li><li>Aplicar pesquisa</li></td>
                    </tr>
                    <tr>
                        <td>Cumprimento do prazo de execução</td>
                        <td>(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    residuos: {
        title: "Gestão de Resíduos Sólidos",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cumprimento do Plano de Resíduos Sólidos</td>
                        <td>(Ações realizadas / Ações previstas no plano) x 100</td>
                        <td><li>Fazer um recorte do Plano Municipal e Regional de Saneamento Básico para 2024 e 2025</li></td>
                    </tr>
                </tbody>
            </table>
        `
    },
    planos: {
        title: "Elaboração de Planos e Projetos",
        table: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Requisitos de desempenho</th>
                        <th>Métricas</th>
                        <th>Ações requeridas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Qualidade dos planos/projetos</td>
                        <td>Nota de pesquisa de qualidade percebida</td>
                        <td><li>Elaborar padrão de pesquisa</li><li>Aplicar pesquisa</li></td>
                    </tr>
                    <tr>
                        <td>Cumprimento do prazo de elaboração</td>
                        <td>(Qtde de itens elaborados no prazo / Qtde total de itens elaborados) x 100</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.atividade-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const atividadeKey = this.getAttribute('data-atividade');
            const atividade = atividadesData[atividadeKey];
            
            if (atividade) {
                showModal(atividade.title, atividade.table);
            }
        });
    });

    const modal = document.getElementById('atividade-modal');
    const closeBtn = modal.querySelector('.close-btn');

    closeBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideModal();
        }
    });
});

function showModal(title, tableHtml) {
    const modal = document.getElementById('atividade-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = title;
    modalBody.innerHTML = tableHtml;
    modal.style.display = 'flex';
}

function hideModal() {
    const modal = document.getElementById('atividade-modal');
    modal.style.display = 'none';
}