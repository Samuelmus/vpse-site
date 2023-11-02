let currentGroup = 1; // Grupo inicial
        const sliderItems = document.querySelectorAll('.slider-item');
        const numGroups = 2; // Total de grupos

        function changeSlide(direction) {
            const startIndex = (currentGroup - 1) * 3;
            const endIndex = startIndex + 3;

            for (let i = 0; i < sliderItems.length; i++) {
                if (i >= startIndex && i < endIndex) {
                    sliderItems[i].classList.remove('hidden');
                } else {
                    sliderItems[i].classList.add('hidden');
                }
            }

            currentGroup = (currentGroup + direction - 1 + numGroups) % numGroups + 1;
        }

        // Inicie com o primeiro grupo de imagens visível
        changeSlide(0);