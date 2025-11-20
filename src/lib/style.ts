import type { CSSProperties } from "react";

export type CSSWithIntrinsic = CSSProperties & {
  containIntrinsicSize?: string;
};

export const reserve = (w: number, h: number): CSSWithIntrinsic => ({
  contentVisibility: "auto",
  containIntrinsicSize: `${w}px ${h}px`,
});
