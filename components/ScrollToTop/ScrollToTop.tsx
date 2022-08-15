import { useEffect, useState } from "react";
import { useRef } from "react";
import { FiArrowUp } from "react-icons/fi";
const ScrollToTop = () => {
  const [position, setPosition] = useState<Number | any>({ top: 0, left: 0 });
  const [visibility, setVisibility] = useState(false);
  const scrollTop = useRef<any>();
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <button
      onClick={() =>
        setPosition({ ...position, position: { top: 0, left: 0 } })
      }
      className="scrollToTop"
      ref={scrollTop}
    >
      <FiArrowUp />
    </button>
  );
};

export default ScrollToTop;
