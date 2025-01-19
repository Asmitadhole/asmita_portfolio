'use client';

import React from 'react';

function Loading() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-[30px] h-[30px] top-1/2 left-1/2 bg-[#498467] animate-up" />
      <div className="absolute w-[30px] h-[30px] top-[calc(50%-30px)] left-[calc(50%-30px)] bg-[#f7c100] animate-down" />
      <style>
        {`
          .animate-up {
            animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
          }
          .animate-down {
            animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
          }
          @keyframes down {
            0%, 100% {
              transform: none;
            }
            25% {
              transform: translateX(100%);
            }
            50% {
              transform: translateX(100%) translateY(100%);
            }
            75% {
              transform: translateY(100%);
            }
          }
          @keyframes up {
            0%, 100% {
              transform: none;
            }
            25% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(-100%) translateY(-100%);
            }
            75% {
              transform: translateY(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;
