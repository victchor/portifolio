


// 2) Victor Souza
new Typed('#typed1', {
    strings: ['Victor Souza'],
    typeSpeed: 50,
    backSpeed: 0,
    showCursor: false,
    onComplete: function () {

        // 3) Dev Full Stack
        new Typed('#typed2', {
            strings: ['Dev Full Stack'],
            typeSpeed: 50,
            backSpeed: 0,
            showCursor: false,
            onComplete: function () {

                new Typed('#typed3', {
                    strings: ['PHP | Java | SpringBoot | MySQL | PostgreSQL'],
                    typeSpeed: 50,
                    backSpeed: 0,
                    showCursor: false
                });
            }
        });

    }
});


