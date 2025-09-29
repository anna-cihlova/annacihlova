const tickerWrapper = document.querySelector(".tickerwrapper");
const list = tickerWrapper.querySelector("ul.list");
const clonedList = list.cloneNode(true);

let listWidth = 0;
list.querySelectorAll("li").forEach((li) => {
  listWidth += li.offsetWidth;
});

list.style.width = `${listWidth}px`;
clonedList.classList.add("cloned");
clonedList.style.width = `${listWidth}px`;
tickerWrapper.appendChild(clonedList);

const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
const duration = 40;

tl.fromTo(list, { x: 0 }, { x: -listWidth, duration }).fromTo(
  clonedList,
  { x: listWidth },
  { x: 0, duration },
  0
);

tickerWrapper.addEventListener("mouseenter", () => tl.pause());
tickerWrapper.addEventListener("mouseleave", () => tl.play());
