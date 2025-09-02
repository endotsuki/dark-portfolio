"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 0.3, // ⬅️ much faster
    borderWidth = 1,
    disabled = false, // ⬅️ default false
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const ticking = useRef(false); // ⬅️ throttle updates

    const handleMove = useCallback(
      (e: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current || ticking.current) return;

        ticking.current = true;
        requestAnimationFrame(() => {
          const element = containerRef.current!;
          const rect = element.getBoundingClientRect();

          const mouseX = e.x ?? lastPosition.current.x;
          const mouseY = e.y ?? lastPosition.current.y;
          lastPosition.current = { x: mouseX, y: mouseY };

          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distanceFromCenter = Math.hypot(
            mouseX - centerX,
            mouseY - centerY
          );
          const inactiveRadius =
            0.5 * Math.min(rect.width, rect.height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            ticking.current = false;
            return;
          }

          const isActive =
            mouseX > rect.left - proximity &&
            mouseX < rect.right + proximity &&
            mouseY > rect.top - proximity &&
            mouseY < rect.bottom + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");
          if (!isActive) {
            ticking.current = false;
            return;
          }

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          const targetAngle =
            (180 * Math.atan2(mouseY - centerY, mouseX - centerX)) / Math.PI +
            90;

          animate(currentAngle, targetAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
            onComplete: () => {
              ticking.current = false;
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        {/* border outline */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "hidden"
          )}
        />
        {/* glowing background */}
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                      from 236.84deg at 50% 50%,
                      var(--black),
                      var(--black) calc(25% / var(--repeating-conic-gradient-times))
                    )`
                  : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                     radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                     radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
                     radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                     repeating-conic-gradient(
                       from 236.84deg at 50% 50%,
                       #dd7bbb 0%,
                       #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                       #5a922c calc(50% / var(--repeating-conic-gradient-times)),
                       #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                       #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                     )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity will-change-transform",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)]",
            className,
            disabled && "hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
export { GlowingEffect };
