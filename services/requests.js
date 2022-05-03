export class Request {
  constructor(BASE_URL, getToken = null, HEADERS = {}) {
    this.BASE_URL = BASE_URL;
    this.getToken = getToken;
    this.DEFAULT_HEADERS = { "Content-type": "application/json" };
    this.headers = { ...this.DEFAULT_HEADERS, ...HEADERS };
  }

  dict_to_params(path, params) {
    const queryString = new URLSearchParams(params).toString();
    const url = `${this.BASE_URL}${path}`;
    if (queryString) {
      return `${url}?${queryString}`;
    }
    return url;
  }

  objectToFormData(object) {
    const formData = new FormData();
    for (var key in object) {
      formData.append(key, object[key]);
    }
    return formData;
  }

  call(path, method, options = {}) {
    const { data = null, params = {} } = options;
    this.path = this.dict_to_params(path, params);
    this.method = method;
    this.data = data;
    return this.request();
  }

  safeCall(path, method, options = {}) {
    const { data = null, params = {} } = options;
    this.path = this.dict_to_params(path, params);
    this.method = method;
    this.data = data;
    this.headers = { ...this.headers, Authorization: this.getToken() };
    return this.request();
  }

  safeFormData(path, method, options = {}) {
    const { data = null, params = {} } = options;
    this.path = this.dict_to_params(path, params);
    this.method = method;

    this.data = this.objectToFormData(data);
    this.headers = { Authorization: this.getToken() };
    return this.request();
  }

  request() {
    const requestOptions = {
      method: this.method,
      headers: this.headers,
    };
    if (this.data) {
      if (this.data instanceof FormData) {
        requestOptions.body = this.data;
      } else {
        requestOptions.body = JSON.stringify(this.data);
      }
    }
    return fetch(this.path, requestOptions)
      .then((res) => {
        if (res.status !== 200) {
          throw res;
        }
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res?.json();
        } else {
          return res?.text();
        }
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const BlockchainApi = new Request(process.env.NEXT_PUBLIC_BASE_URL, 'testing');
export const AdminApi = new Request(process.env.NEXT_PUBLIC_ADMIN_BACKEND, 'testing');