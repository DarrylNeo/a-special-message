document.addEventListener('DOMContentLoaded', function() {
    try {
        const roseContainer = document.getElementById('rose-container');
        const rosePetals = document.querySelector('.rose-petals');
        const envelopeContainer = document.getElementById('envelope-container');
        const envelopeShape = document.querySelector('.envelope-shape');
        const messageContainer = document.getElementById('message-container');
        let isAnimating = false;

        // Helper function to wait for animation
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // When the rose is clicked, show the envelope
        roseContainer.addEventListener('click', async function() {
            if (isAnimating) return;
            isAnimating = true;

            // Trigger rose opening animation
            rosePetals.classList.add('rose-opening');
            await wait(1000);

            // Fade out rose
            roseContainer.style.opacity = '0';
            roseContainer.style.transform = 'translateY(-20px) scale(0.9)';
            await wait(500);
            
            // Hide rose and show envelope
            roseContainer.classList.add('hidden');
            envelopeContainer.classList.remove('hidden');
            envelopeContainer.style.opacity = '0';
            envelopeContainer.style.transform = 'translateY(20px) scale(0.9)';
            
            // Fade in envelope
            await wait(100);
            envelopeContainer.style.opacity = '1';
            envelopeContainer.style.transform = 'translateY(0) scale(1)';
            envelopeContainer.classList.add('fade-in');
            
            isAnimating = false;
        });

        // When the envelope is clicked, show the message
        envelopeContainer.addEventListener('click', async function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (isAnimating) return;
            isAnimating = true;

            // Envelope opening animation
            if (envelopeShape) {
                envelopeShape.style.transform = 'scale(1.1)';
                await wait(200);
                envelopeShape.style.transform = 'scale(1)';
                await wait(200);
            }

            // Fade out envelope
            envelopeContainer.style.opacity = '0';
            envelopeContainer.style.transform = 'translateY(-20px) scale(0.9)';
            await wait(500);

            // Hide envelope and show message
            envelopeContainer.classList.add('hidden');
            messageContainer.classList.remove('hidden');
            messageContainer.style.opacity = '0';
            messageContainer.style.transform = 'translate(-50%, -45%) scale(0.95)';
            
            // Fade in message
            await wait(100);
            messageContainer.style.opacity = '1';
            messageContainer.style.transform = 'translate(-50%, -50%) scale(1)';
            messageContainer.classList.add('fade-in');
            
            isAnimating = false;
        });

        // Also add click event to envelope shape directly
        if (envelopeShape) {
            envelopeShape.addEventListener('click', async function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (isAnimating) return;
                isAnimating = true;

                // Envelope opening animation
                this.style.transform = 'scale(1.1)';
                await wait(200);
                this.style.transform = 'scale(1)';
                await wait(200);

                // Fade out envelope
                envelopeContainer.style.opacity = '0';
                envelopeContainer.style.transform = 'translateY(-20px) scale(0.9)';
                await wait(500);

                // Hide envelope and show message
                envelopeContainer.classList.add('hidden');
                messageContainer.classList.remove('hidden');
                messageContainer.style.opacity = '0';
                messageContainer.style.transform = 'translate(-50%, -45%) scale(0.95)';
                
                // Fade in message
                await wait(100);
                messageContainer.style.opacity = '1';
                messageContainer.style.transform = 'translate(-50%, -50%) scale(1)';
                messageContainer.classList.add('fade-in');
                
                isAnimating = false;
            });
        }

        // Add hover effects for interactive elements
        [roseContainer, envelopeContainer].forEach(element => {
            element.addEventListener('mouseenter', function() {
                if (!isAnimating) {
                    this.style.transform = 'scale(1.05)';
                }
            });
            
            element.addEventListener('mouseleave', function() {
                if (!isAnimating) {
                    this.style.transform = 'scale(1)';
                }
            });
        });

    } catch (error) {
        console.error("Error during animation flow:", error);
    }
});
