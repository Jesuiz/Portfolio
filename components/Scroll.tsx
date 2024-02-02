import React, { useEffect } from 'react';


const Scroll: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // Si un usuario no ha optado por reducir el movimiento, agregamos la animación
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller: Element) => {
        // Realizamos un casting seguro a HTMLElement
        const scrollerElement = scroller as HTMLElement;

        // Agrega data-animated="true" a cada `.scroller` en la página
        scrollerElement.setAttribute("data-animated", "true");

        // Hacer un array de los elementos dentro de `.scroller-inner`
        const scrollerInner = scrollerElement.querySelector(".scroller__inner") as HTMLElement;
        const scrollerContent = Array.from(scrollerInner.children);

        // Para cada elemento en el array, clónalo, agrega aria-hidden y añádelo a `.scroller-inner`
        scrollerContent.forEach((item: Element) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Se ejecutará solo una vez después de que el componente se monte

  return (
    <div className="scroller" data-speed="fast">
      <ul className="tag-list scroller__inner">
        <li>Illustrator</li>
        <li>PHP</li>
        <li>Photoshop</li>
        <li>Laravel</li>
        <li>After Effects</li>
        <li>MySQL</li>
        <li>Figma</li>
        <li>JavaScript</li>
        <li>CorelDraw</li>
        <li>Wordpress</li>
      </ul>
    </div>
  );
}

export default Scroll;


