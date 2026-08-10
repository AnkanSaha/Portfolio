"use client";
import { useLocalStorage } from "./useLocalStorage";

export function useSetting<T>(key: string, initialValue: T) {
  return useLocalStorage<T>(`os:${key}`, initialValue);
}
