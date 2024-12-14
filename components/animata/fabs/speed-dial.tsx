"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface SpeedialProps {
  direction: "up" | "down" | "left" | "right";
  actionButtons: Array<{
    icon: React.ReactNode;
    label: string;
    key: string;
    action: () => void;
  }>;
}

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, direction }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const tooltipPosition =
    direction === "up"
      ? "bottom-full left-1/2 mb-2 -translate-x-1/2"
      : direction === "down"
      ? "top-full left-1/2 mt-2 -translate-x-1/2"
      : direction === "left"
      ? "right-full top-1/2 mr-2 -translate-y-1/2"
      : "left-full top-1/2 ml-2 -translate-y-1/2";

  return (
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip} className="relative inline-block">
      {children}
      {visible && (
        <div
          className={`absolute z-10 transform rounded bg-gray-800 px-2 py-1 text-sm text-white ${tooltipPosition}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default function Speeddial({ direction, actionButtons }: SpeedialProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimation = () => {
    switch (direction) {
      case "up":
        return "flex-col-reverse";
      case "down":
        return "flex-col";
      case "left":
        return "flex-row-reverse";
      case "right":
        return "flex-row";
      default:
        return "";
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const getGlassyClasses = () => {
    return "backdrop-filter backdrop-blur-xl bg-white border border-white rounded-xl shadow-lg transition-all duration-300";
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`relative flex w-fit items-center gap-3 ${getAnimation()}`}
    >
      {/* Main Button */}
      <button
        onMouseEnter={handleMouseEnter}
        className={`${getGlassyClasses()} flex items-center p-3 text-gray-800 transition-all duration-300 hover:bg-slate-100`}
      >
        <Plus size={20} />
      </button>

      {/* Speed Dial Actions */}
      <div
        className={`${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } flex items-center gap-3 transition-all duration-500 ease-in-out ${getAnimation()}`}
      >
        {actionButtons?.length > 0 ? (
          actionButtons.map((action) => (
            <Tooltip key={action.key} text={action.label} direction={direction}>
              <button
                onClick={action.action}
                className={`${getGlassyClasses()} flex items-center p-3 text-gray-800 transition-all duration-300 hover:bg-slate-100`}
              >
                {action.icon}
              </button>
            </Tooltip>
          ))
        ) : (
          <div>No actions available</div>
        )}
      </div>
    </div>
  );
}
