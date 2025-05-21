
        // Dark Mode Toggl
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        
        // Verifica preferência do usuário
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Modo Claro</span>';
        }
        
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Modo Claro</span>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i><span>Modo Escuro</span>';
            }
        });
        
        // Animação simples ao carregar
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');
            
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 100 * index);
            });
            
            // Estilos iniciais para animação
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
        });
        
        // Você pode adicionar mais interações aqui
        // Exemplo: preenchimento dinâmico do currículo a partir de um objeto JSON
        const curriculoData = {
            nome: "Danilo Almeida Correa ",
            cargo: "Sua Profissão",
            email: "daniloalmeidacorrea741@gmail.com",
            telefone: "(15) 99258-4988",
            linkedin: "https://www.linkedin.com/in/danilo-almeida-48a4502a6/",
            github: "https://github.com/"
        };
        
        // Preenche os dados do currículo
        document.getElementById('nome').textContent = curriculoData.nome;
        document.getElementById('cargo').textContent = curriculoData.cargo;
        document.getElementById('sobre-texto').textContent = curriculoData.sobre;
        document.getElementById('email').textContent = curriculoData.email;
        document.getElementById('telefone').textContent = curriculoData.telefone;
        document.getElementById('linkedin').href = curriculoData.linkedin;
        document.getElementById('github').href = curriculoData.github;
    