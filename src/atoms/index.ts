import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'seia_atwork'
})

export const light = atom({
  key: 'light',
  default: true,
  effects_UNSTABLE: [persistAtom]
})
