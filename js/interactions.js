// ===== INTERACTIONS MODULE =====
import { sanitizeInput, trackEvent, hapticFeedback, scrollToSection, addTouchFeedback } from './utils.js';
import { createConfetti, createResolutionCelebration } from './animations.js';

/**
 * Initialize wishes system
 */
export function initWishes() {
    const submitBtn = document.getElementById('submitWish');
    const wishInput = document.getElementById('wishInput');

    if (!submitBtn || !wishInput) return;

    submitBtn.addEventListener('click', () => {
        const wishText = wishInput.value.trim();
        if (wishText) {
            addWish(wishText);
            wishInput.value = '';
            wishInput.focus();
            trackEvent('Engagement', 'wish_submitted', 'New Year Wish');
        }
    });

    wishInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
}

/**
 * Add a wish to the display
 * @param {String} wishText - The wish text
 */
function addWish(wishText) {
    const wishesDisplay = document.getElementById('wishesDisplay');
    if (!wishesDisplay) return;

    // Validate length (min 3, max 200 characters)
    if (!wishText || wishText.trim().length < 3) {
        showTempMessage('Por favor, insira pelo menos 3 caracteres', 'error');
        return;
    }

    if (wishText.length > 200) {
        showTempMessage('Desejo muito longo (máx. 200 caracteres)', 'error');
        return;
    }

    const wishCard = document.createElement('div');
    wishCard.className = 'wish-card';

    const emojis = ['✨', '🌟', '⭐', '💫', '🎊', '🎉'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Sanitize input to prevent XSS
    const sanitized = sanitizeInput(wishText);

    // Create safe HTML
    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = randomEmoji + ' ';

    const textSpan = document.createElement('span');
    textSpan.textContent = sanitized;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'wish-content';
    contentDiv.appendChild(emojiSpan);
    contentDiv.appendChild(textSpan);

    wishCard.appendChild(contentDiv);
    wishesDisplay.insertBefore(wishCard, wishesDisplay.firstChild);

    // Add celebration effect
    createConfetti(wishCard);
    hapticFeedback(20);

    // Success message
    showTempMessage('Desejo adicionado! 🌟', 'success');
}

/**
 * Show temporary message to user
 * @param {String} message - Message to show
 * @param {String} type - Message type (success, error)
 */
function showTempMessage(message, type = 'info') {
    const messageEl = document.createElement('div');
    messageEl.className = `temp-message temp-message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'error' ? '#ff6b6b' : '#4ade80'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;

    document.body.appendChild(messageEl);

    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageEl.remove(), 300);
    }, 3000);
}

/**
 * Initialize resolution trackers
 */
export function initResolutionTrackers() {
    const resolutionCards = document.querySelectorAll('.resolution-card');

    resolutionCards.forEach(card => {
        card.addEventListener('click', () => {
            const progressBar = card.querySelector('.progress-bar-fill');
            const progressText = card.querySelector('.progress-text');

            if (!progressBar || !progressText) return;

            let currentProgress = parseInt(progressBar.style.width) || 0;
            currentProgress += 10;

            if (currentProgress > 100) currentProgress = 0;

            progressBar.style.width = `${currentProgress}%`;
            progressText.textContent = `${currentProgress}% Concluído`;

            // Add celebration effect at 100%
            if (currentProgress === 100) {
                createResolutionCelebration(card);
                hapticFeedback([100, 50, 100]);
                trackEvent('Achievement', 'resolution_completed', 'Resolution 100%');
            } else {
                hapticFeedback(10);
            }
        });
    });
}

/**
 * Initialize quotes carousel
 */
let currentQuoteIndex = 0;
let quoteAutoPlayInterval;

export function initQuotesCarousel() {
    const quotes = document.querySelectorAll('.quote-card');
    const dotsContainer = document.getElementById('quoteDots');

    if (!quotes.length || !dotsContainer) return;

    // Create dots
    quotes.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => showQuote(index));
        dotsContainer.appendChild(dot);
    });

    // Auto-play
    startQuoteAutoPlay();

    // Pause on hover
    const carousel = document.querySelector('.quotes-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopQuoteAutoPlay);
        carousel.addEventListener('mouseleave', startQuoteAutoPlay);

        // Add touch swipe support for mobile
        addSwipeSupport(carousel);
    }
}

/**
 * Add swipe support for carousel
 * @param {HTMLElement} element - Element to add swipe support to
 */
function addSwipeSupport(element) {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50;

    element.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Only trigger if horizontal swipe is dominant
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                // Swipe right - previous quote
                changeQuote(-1);
            } else {
                // Swipe left - next quote
                changeQuote(1);
            }
        }
    }, { passive: true });
}

/**
 * Show a specific quote
 * @param {Number} index - Quote index
 */
function showQuote(index) {
    const quotes = document.querySelectorAll('.quote-card');
    const dots = document.querySelectorAll('.carousel-dot');

    if (!quotes.length) return;

    // Wrap around
    if (index >= quotes.length) index = 0;
    if (index < 0) index = quotes.length - 1;

    currentQuoteIndex = index;

    // Update quotes
    quotes.forEach((quote, i) => {
        quote.classList.toggle('active', i === index);
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

/**
 * Change quote by direction
 * @param {Number} direction - Direction to change (-1 or 1)
 */
export function changeQuote(direction) {
    showQuote(currentQuoteIndex + direction);
    stopQuoteAutoPlay();
    startQuoteAutoPlay();
}

/**
 * Start quote auto-play
 */
function startQuoteAutoPlay() {
    stopQuoteAutoPlay();
    quoteAutoPlayInterval = setInterval(() => {
        showQuote(currentQuoteIndex + 1);
    }, 5000);
}

/**
 * Stop quote auto-play
 */
function stopQuoteAutoPlay() {
    if (quoteAutoPlayInterval) {
        clearInterval(quoteAutoPlayInterval);
    }
}



/**
 * Initialize back to top button
 */
export function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    // Show/hide button based on scroll position
    const toggleBackToTop = () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        hapticFeedback(20);
    };

    // Event listeners
    backToTopButton.addEventListener('click', scrollToTop);

    // Use debounce from utils (imported)
    window.addEventListener('scroll', () => {
        toggleBackToTop();
    });

    // Initial check
    toggleBackToTop();
}
