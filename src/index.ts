import { useState, SetStateAction } from "react";
import { flushSync } from "react-dom";

interface ITransition {
  start(cb: () => void): Promise<void>;
}

interface IDocument extends Document {
  createDocumentTransition?: () => ITransition;
}

export type Dispatch<T> = (value: SetStateAction<T>) => Promise<void>;

const _document = document as IDocument;

export function useTransitionState<T>(initialState: T): [T, Dispatch<T>] {
  const [state, setStateInternal] = useState(initialState);

  const setState = async (value: SetStateAction<T>) => {
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
