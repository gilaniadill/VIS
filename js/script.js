let isSelectionMode = false;

        function toggleSelectionMode() {
            isSelectionMode = !isSelectionMode;
            if (isSelectionMode) {
                document.body.classList.add('selectionMode');
            } else {
                document.body.classList.remove('selectionMode');
            }
        }

        function handleInteraction(event) {
            if (isSelectionMode) {
                event.preventDefault();
                const selectedElement = event.target;

                if (!selectedElement.classList.contains('selected')) {
                    selectedElement.classList.add('selected');
                    const elementType = selectedElement.tagName.toLowerCase();
                    const elementText = selectedElement.innerText || selectedElement.value;
                    console.log(`Event sent to GTM - Element Type: ${elementType}, Text: ${elementText}`);
                } else {
                    selectedElement.classList.remove('selected');
                }
            }
        }

        const interactiveElements = document.querySelectorAll('button, a, select, iframe');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', (event) => {
                if (isSelectionMode) {
                    event.target.classList.add('highlighted');
                }
            });

            element.addEventListener('mouseleave', (event) => {
                if (isSelectionMode) {
                    event.target.classList.remove('highlighted');
                }
            });

            element.addEventListener('click', handleInteraction);
        });
