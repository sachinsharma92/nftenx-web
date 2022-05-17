export const storage = {
    get(key) {
        return localStorage.getItem(key);
    },
    set(key, value) {
        return localStorage.setItem(key, value);
    },
    del(key) {
        return localStorage.removeItem(key);
    },
}