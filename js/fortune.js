// Fortune Teller Logic

const fortunes = [
    "2026 será um ano transformador, cheio de oportunidades inesperadas e crescimento pessoal.",
    "Este ano traz harmonia e equilíbrio. Sua paciência será recompensada com sucesso.",
    "A aventura aguarda! 2026 é o seu ano para explorar novos horizontes e abraçar a mudança.",
    "Concentre-se nos relacionamentos este ano. Conexões profundas trarão alegria e realização.",
    "Sua energia criativa atingirá o pico em 2026. Expresse-se e veja a mágica acontecer.",
    "O sucesso financeiro está no horizonte. Decisões inteligentes levarão à prosperidade.",
    "Saúde e bem-estar ocupam o centro do palco. Priorize o autocuidado para um ano vibrante.",
    "2026 traz avanços na carreira. Seu trabalho duro finalmente valerá a pena espetacularmente.",
    "O despertar espiritual aguarda. Este ano aprofundará sua compreensão de si mesmo.",
    "Oportunidades de liderança se apresentarão. Dê um passo à frente e brilhe intensamente."
];

const luckyColors = [
    "Roxo", "Dourado", "Verde Esmeralda", "Azul Real", "Ouro Rosé",
    "Vermelho Carmesim", "Azul Safira", "Branco Pérola", "Turquesa", "Prata"
];

const luckyDays = [
    "Sábado", "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"
];

const focusAreasOptions = [
    ["Crescimento na Carreira", "Planejamento Financeiro", "Equilíbrio Trabalho-Vida"],
    ["Amor e Romance", "Laços Familiares", "Amizades"],
    ["Desenvolvimento Pessoal", "Aprendizado", "Criatividade"],
    ["Saúde e Fitness", "Bem-estar Mental", "Crescimento Espiritual"],
    ["Aventura e Viagem", "Novas Experiências", "Exploração Cultural"],
    ["Inovação", "Tecnologia", "Habilidades Digitais"],
    ["Serviço Comunitário", "Impacto Ambiental", "Mudança Social"]
];

const adviceOptions = [
    "Confie na sua intuição este ano — ela o guiará para o caminho certo.",
    "Abrace a mudança de braços abertos; a resistência apenas adia seu destino.",
    "O universo recompensa aqueles que correm riscos calculados. Seja ousado.",
    "Sua maior força está na sua capacidade de adaptação. Mantenha-se flexível.",
    "Lembre-se: cada fim é um novo começo disfarçado.",
    "Colaboração em vez de competição trará recompensas inesperadas.",
    "Invista em si mesmo — educação e autoaperfeiçoamento pagam dividendos eternos.",
    "Deixe ir o que não lhe serve mais para abrir espaço para a abundância.",
    "Sua energia positiva atrairá almas afins. Construa sua tribo.",
    "Equilibre ambição com gratidão; o sucesso é mais doce quando compartilhado."
];

function generateFortune() {
    const userName = document.getElementById('userName').value.trim();
    const birthMonth = document.getElementById('birthMonth').value;

    if (!userName || !birthMonth) {
        alert('Por favor, insira seu nome e selecione seu mês de nascimento! 🔮');
        return;
    }

    // Generate personalized fortune based on name and birth month
    const nameHash = hashString(userName);
    const monthIndex = parseInt(birthMonth) - 1;

    // Select fortune elements
    const fortune = fortunes[(nameHash + monthIndex) % fortunes.length];
    const luckyNumber = ((nameHash % 99) + 1);
    const luckyColor = luckyColors[(nameHash + monthIndex) % luckyColors.length];
    const luckyDay = luckyDays[(nameHash) % luckyDays.length];
    const focusAreas = focusAreasOptions[monthIndex % focusAreasOptions.length];
    const advice = adviceOptions[(nameHash + monthIndex * 2) % adviceOptions.length];

    // Generate monthly forecast
    const monthlyForecast = generateMonthlyForecast(nameHash, monthIndex);

    // Display results
    document.getElementById('fortuneGreeting').textContent = `Bem-vindo(a), ${userName}! ✨`;

    // Add timestamp
    const now = new Date();
    const timestamp = `Gerado em ${now.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })} às ${now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    })}`;
    const timestampEl = document.getElementById('fortuneTimestamp');
    if (timestampEl) {
        timestampEl.textContent = timestamp;
    }

    document.getElementById('fortunePrediction').textContent = fortune;
    document.getElementById('luckyNumber').textContent = luckyNumber;
    document.getElementById('luckyColor').textContent = luckyColor;
    document.getElementById('luckyDay').textContent = luckyDay;
    document.getElementById('fortuneAdvice').textContent = advice;

    // Display focus areas
    const focusContainer = document.getElementById('focusAreas');
    focusContainer.innerHTML = '';
    focusAreas.forEach(area => {
        const tag = document.createElement('span');
        tag.className = 'focus-tag';
        tag.textContent = area;
        focusContainer.appendChild(tag);
    });

    // Display monthly forecast
    const forecastContainer = document.getElementById('monthlyForecast');
    if (forecastContainer) {
        forecastContainer.innerHTML = '';
        monthlyForecast.forEach((month, index) => {
            const monthEl = document.createElement('div');
            monthEl.className = 'month-indicator';
            monthEl.innerHTML = `
                <div class="month-name">${getMonthName(index)}</div>
                <div class="month-energy">${month.energy}</div>
            `;
            monthEl.title = month.description;
            forecastContainer.appendChild(monthEl);
        });
    }

    // Show result with animation
    const resultDiv = document.getElementById('fortuneResult');
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Trigger confetti
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function resetFortune() {
    document.getElementById('userName').value = '';
    document.getElementById('birthMonth').value = '';
    document.getElementById('fortuneResult').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple hash function for consistent randomization
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// Global New Year Clocks with World Time API
// Global New Year Clocks with World Time API
const worldClocks = [
    { id: 'samoa', timezone: 'Pacific/Samoa', offset: -11, name: 'Samoa', flag: '🇼🇸' },
    { id: 'nz', timezone: 'Pacific/Auckland', offset: 13, name: 'Nova Zelândia', flag: '🇳🇿' },
    { id: 'sydney', timezone: 'Australia/Sydney', offset: 11, name: 'Sydney', flag: '🇦🇺' },
    { id: 'tokyo', timezone: 'Asia/Tokyo', offset: 9, name: 'Tóquio', flag: '🇯🇵' },
    { id: 'india', timezone: 'Asia/Kolkata', offset: 5.5, name: 'Índia', flag: '🇮🇳' },
    { id: 'dubai', timezone: 'Asia/Dubai', offset: 4, name: 'Dubai', flag: '🇦🇪' },
    { id: 'london', timezone: 'Europe/London', offset: 0, name: 'Londres', flag: '🇬🇧' },
    { id: 'ny', timezone: 'America/New_York', offset: -5, name: 'Nova York', flag: '🇺🇸' },
    { id: 'la', timezone: 'America/Los_Angeles', offset: -8, name: 'Los Angeles', flag: '🇺🇸' }
];

let useAPITime = true; // Flag to switch between API and local calculation
let apiTimeCache = {}; // Cache API responses

// Fetch time from World Time API
async function fetchTimeFromAPI(timezone) {
    try {
        const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        return {
            datetime: new Date(data.datetime),
            success: true
        };
    } catch (error) {
        console.warn(`World Time API failed for ${timezone}, using fallback`, error);
        return { success: false };
    }
}

// Update world clocks using API or fallback
async function updateWorldClocks() {
    for (const clock of worldClocks) {
        let currentTime;

        // Try API first if enabled
        if (useAPITime && !apiTimeCache[clock.id]) {
            const apiResult = await fetchTimeFromAPI(clock.timezone);
            if (apiResult.success) {
                apiTimeCache[clock.id] = apiResult.datetime;
                currentTime = apiResult.datetime;
            } else {
                // Fallback to client-side calculation
                useAPITime = false; // Disable API for this session
                currentTime = getLocalCalculatedTime(clock.offset);
            }
        } else if (apiTimeCache[clock.id]) {
            // Use cached API time and increment
            const cached = apiTimeCache[clock.id];
            currentTime = new Date(cached.getTime() + (Date.now() - cached.getTime()));
        } else {
            // Use fallback calculation
            currentTime = getLocalCalculatedTime(clock.offset);
        }

        updateClockDisplay(clock.id, currentTime, clock.offset);
    }
}

// Fallback: Calculate time using client-side offset
function getLocalCalculatedTime(offset) {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utcTime + (3600000 * offset));
}

// Update clock display elements
function updateClockDisplay(clockId, currentTime, offset) {
    const timeString = currentTime.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const timeElement = document.getElementById(`${clockId}-time`);
    const statusElement = document.getElementById(`${clockId}-status`);

    if (timeElement) {
        timeElement.textContent = timeString;
    }

    if (statusElement) {
        updateCelebrationStatus(statusElement, currentTime, offset);
    }
}

// Update celebration status based on current time
function updateCelebrationStatus(statusElement, currentTime, offset) {
    const targetDate = new Date('2026-01-01T00:00:00');
    const utcTime = currentTime.getTime();
    const targetUTC = targetDate.getTime() - (offset * 3600000);

    if (utcTime < targetUTC) {
        statusElement.textContent = 'Aguardando...';
        statusElement.className = 'status waiting';
    } else if (utcTime < targetUTC + 3600000) { // Within 1 hour of New Year
        statusElement.textContent = '🎉 Celebrando!';
        statusElement.className = 'status celebrating';

        // Trigger confetti for celebrating cities
        if (typeof confetti !== 'undefined' && Math.random() < 0.1) {
            confetti({
                particleCount: 30,
                spread: 50,
                origin: { y: 0.7 }
            });
        }
    } else {
        statusElement.textContent = '✓ Celebrado';
        statusElement.className = 'status completed';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔮 Fortune page loaded');
    initializeWorldClocks();
});

// Initialize world clocks with API
async function initializeWorldClocks() {
    console.log('Initializing world clocks with API...');

    // Fetch initial times from API
    for (const clock of worldClocks) {
        const apiResult = await fetchTimeFromAPI(clock.timezone);
        if (apiResult.success) {
            apiTimeCache[clock.id] = {
                time: apiResult.datetime,
                fetchedAt: Date.now()
            };
            console.log(`✓ ${clock.name} time fetched from API`);
        } else {
            console.warn(`✗ ${clock.name} using fallback calculation`);
            useAPITime = false;
        }
    }

    // Start regular updates
    updateWorldClocksSync();
    setInterval(updateWorldClocksSync, 1000);
}

// Synchronous update function for setInterval
function updateWorldClocksSync() {
    for (const clock of worldClocks) {
        let currentTime;

        if (apiTimeCache[clock.id]) {
            // Calculate current time from cached API time
            const cached = apiTimeCache[clock.id];
            const elapsedMs = Date.now() - cached.fetchedAt;
            currentTime = new Date(cached.time.getTime() + elapsedMs);
        } else {
            // Use fallback calculation
            currentTime = getLocalCalculatedTime(clock.offset);
        }

        updateClockDisplay(clock.id, currentTime, clock.offset);
    }
}

// Update world clocks using API or fallback (kept for manual refresh)
async function updateWorldClocks() {
    for (const clock of worldClocks) {
        let currentTime;

        // Try API first if enabled
        if (useAPITime && !apiTimeCache[clock.id]) {
            const apiResult = await fetchTimeFromAPI(clock.timezone);
            if (apiResult.success) {
                apiTimeCache[clock.id] = {
                    time: apiResult.datetime,
                    fetchedAt: Date.now()
                };
                currentTime = apiResult.datetime;
            } else {
                // Fallback to client-side calculation
                useAPITime = false;
                currentTime = getLocalCalculatedTime(clock.offset);
            }
        } else if (apiTimeCache[clock.id]) {
            // Use cached API time and increment
            const cached = apiTimeCache[clock.id];
            const elapsedMs = Date.now() - cached.fetchedAt;
            currentTime = new Date(cached.time.getTime() + elapsedMs);
        } else {
            // Use fallback calculation
            currentTime = getLocalCalculatedTime(clock.offset);
        }

        updateClockDisplay(clock.id, currentTime, clock.offset);
    }
}

// Monthly Forecast Generator
function generateMonthlyForecast(nameHash, birthMonth) {
    const energyIcons = ['⚡', '🌟', '💫', '✨', '🔥', '💎', '🌈', '⭐', '💪', '🎯', '🚀', '🌙'];
    const energyDescriptions = [
        'Mês de alta energia - Tome atitudes ousadas',
        'Período de sorte - Oportunidades abundam',
        'Tempo de reflexão - Planeje estrategicamente',
        'Pico criativo - Expresse-se',
        'Conexões sociais - Faça networking ativamente',
        'Foco financeiro - Invista com sabedoria',
        'Prioridade de saúde - Mês de autocuidado',
        'Avanço na carreira - Siga em frente',
        'Fase de aprendizado - Desenvolvimento de habilidades',
        'Crescimento do relacionamento - Cultive laços',
        'Hora da aventura - Explore novos caminhos',
        'Crescimento espiritual - Paz interior'
    ];

    const forecast = [];
    for (let i = 0; i < 12; i++) {
        const energyIndex = (nameHash + birthMonth + i) % energyIcons.length;
        forecast.push({
            energy: energyIcons[energyIndex],
            description: energyDescriptions[energyIndex]
        });
    }
    return forecast;
}

function getMonthName(index) {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return months[index];
}

// Make functions global
window.generateFortune = generateFortune;
window.resetFortune = resetFortune;
