import React, { useRef, useEffect } from "react";

const Scroll = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollers = scrollerRef.current?.querySelectorAll(".scroller");

    if (scrollers && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers: NodeListOf<Element>) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  };

  return (
    <section
      id="scroll"
      className={`${styles.scroller} max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center`}
    >
      <div className="md:w-3/4">
        <div className="scroller" data-speed="fast">
          <ul className="tag-list scroller__inner">
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>After Effects</li>
            <li>Wordpress</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>BootStrap</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Scroll;


