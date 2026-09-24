import { useEffect, useRef, useState } from "react";
import portraitAsset from "@/assets/mona-caricature.png.asset.json";

export function PortraitCursor() {
  const followerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setVisible(true);
    };
    const hide = () => setVisible(false);
    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${current.x + 20}px, ${current.y + 20}px, 0)`;
      }
      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className={`portrait-cursor ${visible ? "portrait-cursor-visible" : ""}`}
    >
      <img src={portraitAsset.url} alt="" />
    </div>
  );
}