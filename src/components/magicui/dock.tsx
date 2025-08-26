/**
 * Dock Component
 *
 * A responsive, animated navigation dock inspired by macOS/iOS.
 *
 * - On desktop: Floating, centered nav bar with magnifying icons.
 * - On mobile: Fixed to the bottom, full-width, with larger touch targets and reduced magnification for usability.
 *
 * Features:
 * - Responsive design using Tailwind CSS breakpoints
 * - Animated icon magnification on hover (desktop only)
 * - Aggressive logging for debugging
 * - Highly customizable via props
 *
 * Design Choices:
 * - Mobile-first: On small screens, the dock is always visible at the bottom, full-width, with increased icon size and spacing for touch.
 * - Desktop: Floating, centered nav bar as before.
 * - All changes are documented in dev-notebook.md
 *
 * @file src/components/magicui/dock.tsx
 */
"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionProps,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  /**
   * Additional class names for the dock container
   */
  className?: string;
  /**
   * Icon size (px). On mobile, defaults to larger size for touch.
   */
  iconSize?: number;
  /**
   * Icon magnification (px). On mobile, defaults to smaller magnification.
   */
  iconMagnification?: number;
  /**
   * Icon distance for magnification effect (px)
   */
  iconDistance?: number;
  /**
   * Dock alignment (top, middle, bottom)
   */
  direction?: "top" | "middle" | "bottom";
  /**
   * Dock children (should be DockIcon components)
   */
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const MOBILE_SIZE = 52;
const MOBILE_MAGNIFICATION = 60;
const MOBILE_DISTANCE = 80;

const dockVariants = cva(
  // Mobile: fixed bottom, centered with transform; Desktop: static, centered with mx-auto, no transform
  "fixed bottom-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-xl z-[5000] flex h-[58px] items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md bg-background/80 dark:bg-background/80 shadow-lg " +
  "md:static md:bottom-auto md:left-auto md:translate-x-0 md:mx-auto md:mt-8 md:w-max md:rounded-2xl md:border md:p-2 md:backdrop-blur-md"
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize,
      iconMagnification,
      iconDistance,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const [finalIconSize, setFinalIconSize] = useState<number>(iconSize ?? DEFAULT_SIZE);
    const [finalMagnification, setFinalMagnification] = useState<number>(iconMagnification ?? DEFAULT_MAGNIFICATION);
    const [finalDistance, setFinalDistance] = useState<number>(iconDistance ?? DEFAULT_DISTANCE);

    useEffect(() => {
      const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
      setFinalIconSize(iconSize ?? (mobile ? MOBILE_SIZE : DEFAULT_SIZE));
      setFinalMagnification(iconMagnification ?? (mobile ? MOBILE_MAGNIFICATION : DEFAULT_MAGNIFICATION));
      setFinalDistance(iconDistance ?? (mobile ? MOBILE_DISTANCE : DEFAULT_DISTANCE));
    }, [iconSize, iconMagnification, iconDistance]);

    const mouseX = useMotionValue(Infinity);
    const frameRef = useRef<number | null>(null);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (
          React.isValidElement<DockIconProps>(child) &&
          child.type === DockIcon
        ) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: finalIconSize,
            magnification: finalMagnification,
            distance: finalDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onPointerMove={(e) => {
          const pageX = e.pageX;
          if (frameRef.current == null) {
            frameRef.current = requestAnimationFrame(() => {
              mouseX.set(pageX);
              frameRef.current = null;
            });
          }
        }}
        onPointerLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), "transform-gpu [will-change:transform]", {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);
  const centerX = useMotionValue(0);
  useEffect(() => {
    const updateCenter = () => {
      const bounds = ref.current?.getBoundingClientRect();
      const x = (bounds?.x ?? 0) + (bounds?.width ?? 0) / 2 + window.scrollX;
      centerX.set(x);
    };
    updateCenter();
    window.addEventListener('resize', updateCenter);
    window.addEventListener('scroll', updateCenter, { passive: true });
    return () => {
      window.removeEventListener('resize', updateCenter);
      window.removeEventListener('scroll', updateCenter);
    };
  }, [centerX]);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    return val - centerX.get();
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full transform-gpu [will-change:transform]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
