const images = document.querySelectorAll('.image');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        document.getElementById('prev').addEventListener('click', prevImage);
        document.getElementById('next').addEventListener('click', nextImage);

        // Exibir a primeira imagem
        showImage(currentIndex);