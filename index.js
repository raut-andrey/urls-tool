class Url {
  static getParams() {
    try {
      if (!window.location.search) {
        return { arr: [], obj: {}, string: '' };
      }
      const paramsString = window.location.search.substring(1);
      const paramsArray = paramsString.split('&');
      const paramsObject = {};

      for (let i = 0; i < paramsArray.length; i++) {
        const name = paramsArray[i].split('=')[0];
        const value = paramsArray[i].split('=')[1];

        paramsArray[i] = { name, value };
        paramsObject[name] = value;
      }

      return { arr: paramsArray, obj: paramsObject, string: paramsString };
    } catch (err) {
      console.log('Error in Url.getParams method:', err);
      return { arr: [], obj: {}, string: '' };
    }
  }

  static get params() {
    return this.getParams().obj;
  }

  static set params(arg = []) {
    try {
      let obj = {};

      if (Array.isArray(arg)) {
        const [name, value] = arg;
        if (!name) { return; }

        obj = this.getParams().obj;

        obj[name] = value;

        if (!value || !obj[name]) {
          delete obj[name];
        }
      } else if (typeof arg === 'object') {
        obj = arg;
      }

      const arr = Object.keys(obj).map(key => (
        `${key}=${obj[key]}`
      ));

      window.history.pushState(null, null, `${window.location.pathname}${arr.length ? '?' : ''}${arr.join('&')}${window.location.hash}`);
      return true;
    } catch (err) {
      console.log('Error in Url.params(set) method:', err);
      return false;
    }
  }

  static get hash() {
    try {
      const hash = window.location.hash.substring(1);
      return hash;
    } catch (err) {
      console.log('Error in Url.hash(get) method:', err);
      return undefined;
    }
  }

  static set hash(value) {
    try {
      window.location.hash = value;
      return true;
    } catch (err) {
      console.log('Error in Url.hash(set) method:', err);
      return false;
    }
  }

  static get pathname() {
    try {
      const pathname = window.location.pathname;
      return pathname;
    } catch (err) {
      console.log('Error in Url.pathname(get) method:', err);
      return '';
    }
  }

  static set pathname(value) {
    try {
      window.history.pushState(null, null, `${value}${window.location.search}${window.location.hash}`);
      return true;
    } catch (err) {
      console.log('Error in Url.pathname(set) method:', err);
      return false;
    }
  }
}

module.exports = Url;
