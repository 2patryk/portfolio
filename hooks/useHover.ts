import { useState, useEffect, useRef } from "react";

type UseHoverReturn<T> = [React.RefObject<T>, boolean];

const useHover = <T extends HTMLElement>(): UseHoverReturn<T> => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      // Clean up the event listeners on component unmount
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return [ref, isHovered];
};

export default useHover;
