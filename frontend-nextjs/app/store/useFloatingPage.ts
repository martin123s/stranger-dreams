import { create } from 'zustand'

export type ClickProps = {
  currentView: string,
  setCurrentView: (value: string) => void
}

export const floatingPage = create<ClickProps>((set) => ({
  currentView: "",
  setCurrentView: (value) => set({ currentView: value }),
}))
