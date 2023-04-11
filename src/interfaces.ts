import { CircleSpec } from "./draw-circle";
import { ImageSpec } from "./draw-image";
import { RectSpec } from "./draw-rect";
import { TextSpec } from "./draw-text";

export type Point = {
  x: number;
  y: number;
  z: number;
}

export type Size = {
  height: number;
  width: number;
  depth: number;
}

export type RadianAngle = {
  start: number;
  end: number;
}

export type MetaData = {
  alpha?: number;
  rotation?: number;
  color?: string | CanvasGradient | CanvasPattern;
}

export interface IBaseSpec {
  metadata: MetaData;
  spec: RendererSpecType;
}

export enum RendererSpecType {
  RectSpec = "RectSpec",
  CircleSpec = "CircleSpec",
  TextSpec = "TextSpec",
  ImageSpec = "ImageSpec",
}

export const RENDERER_SPEC_TYPE = Object.values(RendererSpecType);

export type DrawableSpecs = RectSpec | CircleSpec | TextSpec | ImageSpec;