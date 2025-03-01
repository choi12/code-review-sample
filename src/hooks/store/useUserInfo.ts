import { UserDTO } from '@/api/auth/types';
import { useStore } from '@/store';

type UserDTOKey = keyof UserDTO;

type OneUserValue<K extends UserDTOKey> = UserDTO[K] | undefined;
type ManyUserValues<K extends UserDTOKey> = { [Key in K]: UserDTO[Key] | undefined };

function useUserInfo<K extends UserDTOKey>(selector: K): OneUserValue<K>;
function useUserInfo<K extends UserDTOKey>(selectors: K[]): ManyUserValues<K>;
function useUserInfo<K extends UserDTOKey>(selectorOrSelectors: K | K[]) {
  const createSelector = (user: UserDTO | null) => {
    if (!user) return undefined;

    if (Array.isArray(selectorOrSelectors)) {
      const fieldValuePairs = selectorOrSelectors.map((selector) => [selector, user[selector]]);
      return Object.fromEntries(fieldValuePairs) as ManyUserValues<K>;
    }

    return user[selectorOrSelectors] as OneUserValue<K>;
  };

  const selectedUser = useStore((state) => createSelector(state.user));

  return selectedUser;
}

export default useUserInfo;
