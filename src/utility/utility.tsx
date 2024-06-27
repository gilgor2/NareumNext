export function sleep(ms: number) {
  /*eslint-disable */
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function generateUniqueId() {
  return Math.random().toString(36);
}

export function getDataFromStorage(key: string) {
  const data = localStorage.getItem(key);
  if (!!data) {
    return JSON.parse(data);
  }
  return false;
}

export function setDataToStorage(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getRandomFromArr(arr: any[]) {
  return arr[Math.floor(Math.random() * (arr.length - 1) + 0.3)];
}

export function throwWhenWrongFormat<T>(data: T, dataCheckFn = (d: T) => true) {
  if (!dataCheckFn(data)) {
    throw new Error('Wrong format : ');
  }
}

export function throwWhenError(error: string | undefined) {
  if (error) {
    throw new Error(error);
  }
}
