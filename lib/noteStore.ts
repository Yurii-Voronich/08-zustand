import { create } from "zustand";
import { NewNote } from "./api";

interface noteStore {
  draft: NewNote;
  setDraft: (note: NewNote) => void;
  clearDraft: () => void;
}
const initialDraft: NewNote = {
  title: "",
  tag: "",
  content: "",
};
export const useNoteStore = create<noteStore>()((set) => ({
  draft: initialDraft,
  setDraft: (note) => set(() => ({ draft: note })),
  clearDraft: () => set(() => ({ draft: initialDraft })),
}));
