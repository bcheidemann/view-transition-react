import { useState, SetStateAction } from "react";
import { flushSync } from "react-dom";

console.warn("[react-document-transition] This package is deprecated. Please use view-transition-react instead.");

interface ITransition {
  readonly finished: Promise<void>;
  readonly ready: Promise<void>;
  readonly startupdateCallbackDone: Promise<void>;
  skipTransition(): void;
}

interface IDocument extends Document {
  startViewTransition?: (cb: () => void) => ITransition;
}

export type Dispatch<T> = (value: SetStateAction<T>) => Promise<void>;

const isServer = typeof window === "undefined";

export function useTransitionState<T>(initialState: T): [T, Dispatch<T>] {
  const [state, setStateInternal] = useState(initialState);

  const setState = isServer
    ? (value: SetStateAction<T>) => Promise.resolve(setStateInternal(value))
    : async (value: SetStateAction<T>) => {
      const _document = document as IDocument;

      if (!_document.startViewTransition) {
        return setStateInternal(value);
      }
      flushSync(() => void(0));
      await _document.startViewTransition(() => {
        flushSync(() => {
          setStateInternal(value);
        });
      }).startupdateCallbackDone;
    };

  return [state, setState];
}
