import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

interface Mentoring {
  mentor?: string;
  mentee?: string;
}

export const mentoringState = atom<Mentoring>({
  // key 값 참고 자료: https://velog.io/@kyung-baa/Recoil-Duplicate-atom-key
  key: `mentoringState/${uuidv4()}`,
  default: {
    mentor: '',
    mentee: '',
  }
});