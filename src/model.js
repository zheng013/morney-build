const localStorageKeyName="recordList"
const model = {
  fecth() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]")
  },
  save(data) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
}
export  { model}