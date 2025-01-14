/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Contract } from "starknet";
import type { BigNumberish } from "starknet/utils/number";

export type Point = {
  x: BigNumberish;
  y: BigNumberish;
};
export type PointPair = {
  p1: Point;
  p2: Point;
};
export interface constructor extends Contract {
  functions: {};
  callStatic: {};
  populateTransaction: {};
  estimateFee: {};
}
