// ─── FADE-IN COM SCROLL ───────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// ─── ANIMAÇÃO DAS SKILL BARS ──────────────────────────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(fill => {
                const width = fill.dataset.width;
                fill.style.transform = `scaleX(${width})`;
            });
        }
    });
}, { threshold: 0.4 });

const skillSection = document.querySelector('.skills-list');
if (skillSection) skillObserver.observe(skillSection);


// ─── FORMULÁRIO DE CONTATO ────────────────────────────────────────────────────
function handleSubmit(event) {
    event.preventDefault();

    const btn = document.getElementById('submitBtn');
    const msg = document.getElementById('formMsg');

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.style.display = 'none';
        msg.style.display = 'block';
    }, 800);
}


// ─── NAV ATIVO NO SCROLL ──────────────────────────────────────────────────────
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 200) {
            current = sec.id;
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.style.color = href === '#' + current ? 'var(--accent)' : '';
    });
});
// ─── PRELOADER ───
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.classList.add('hide');

        preloader.addEventListener('transitionend', () => {
            preloader.remove();
        }, { once: true });
    }, 2100);
});