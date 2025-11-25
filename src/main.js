const $ = (selector) => document.querySelector(selector);

new Typed('#typed1', {
    strings: ['Victor Souza'],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function () {

        new Typed('#typed2', {
            strings: ['Dev Full Stack'],
            typeSpeed: 50,
            showCursor: false,
            onComplete: function () {

                new Typed('#typed3', {
                    strings: ['PHP | Java | SpringBoot | MySQL | PostgreSQL'],
                    typeSpeed: 50,
                    showCursor: false,
                    onComplete: function () {

                        // Botão Currículo
                        const curriculoDiv = $('.header__actions div:nth-child(1)');
                        curriculoDiv.classList.remove('ocult');
                        curriculoDiv.setAttribute('data-usal', 'split-item split-fade-r duration-500');

                        // Botão LinkedIn
                        const linkedinDiv = $('.header__actions div:nth-child(2)');
                        linkedinDiv.classList.remove('ocult');
                        linkedinDiv.setAttribute('data-usal', 'split-item split-fade-l duration-500 delay-100');

                        // Avatar
                        const avatarWrapper = $('.header__avatar-wrapper');
                        avatarWrapper.classList.remove('ocult');
                        avatarWrapper.setAttribute('data-usal', 'blur-3 duration-800 delay-200');

                        if (window.USAL && typeof window.USAL.scan === 'function') {
                            window.USAL.scan(); 
                        }
                    }
                });
            }
        });
    }
});