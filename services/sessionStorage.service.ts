export class SessionStorageService {
  static set(name: string, value: any) {
    if (sessionStorage) {
      sessionStorage.setItem(name, value)
    }
  }

  static get(name: string): string | null | undefined {
    if (sessionStorage) {
      return sessionStorage.getItem(name)
    }
  }

  static remove(name: string) {
    if (sessionStorage) {
      return sessionStorage.removeItem(name)
    }
  }

  static clearSessionStorage(name: string) {
    if (sessionStorage) {
      return sessionStorage.clear()
    }
  }
}
