// Atualiza o ano do copyright automaticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal de Serviços
const modal = document.getElementById('services-modal');
const openModalBtn = document.getElementById('open-services-modal');
const closeModalBtn = document.getElementById('close-services-modal');
const servicosLink = document.getElementById('servicos-link');
const footerServicosLink = document.getElementById('footer-services-link');

function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

openModalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

servicosLink.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

footerServicosLink.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});





var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var telefone = document.getElementById('telefone').value;
var mensagem = document.getElementById('mensagem').value

function obrigado() {
    document.getElementById('obrigado').href = "obrigado.html"  ;

      

    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
 
    } else {
        alert("Obrigado por entrar em contato! Em breve retornaremos.");
    }return;
    document.getElementById('obrigado').style.display = "block";
}