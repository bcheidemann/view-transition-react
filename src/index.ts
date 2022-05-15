import { useState, SetStateAction } from "react";
import { flushSync } from "react-dom";

interface ITransition {
  start(cb: () => void): Promise<void>;
}

interface IDocument extends Document {
  createDocumentTransition?: () => ITransition;
}

export type Dispatch<T> = (value: SetStateAction<T>) => Promise<void>;

const isServer = typeof window === "undefined";

export function useTransitionState<T>(initialState: T): [T, Dispatch<T>] {
  const [state, setStateInternal] = useState(initialState);

  const setState = isServer
    ? (value: SetStateAction<T>) => Promise.resolve(setStateInternal(value))
    : async (value: SetStateAction<T>) => {
      const _document = document as IDocument;

      if (!_document.createDocumentTransition) {
        return setStateInternal(value);
      }
      const transition = _document.createDocumentTransition();
      flushSync(() => void(0));
      await transition.start(() => {
        flushSync(() => {
          setStateInternal(value);
        });
      });
    };

  return [state, setState];
}
