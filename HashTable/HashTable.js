class Hashmap {
    constructor() {
      this._storage = []
    }
  
    set(key, val) {
      const hashKey = this.hashStr(key)
      if (!this._storage[hashKey]) {
          this._storage[hashKey] = []
      }
      this._storage[hashKey].push([key, val])
    }
  
    get(key) {
      // implement this
      const hashKey = this.hashStr(key)

      if (!this._storage[hashKey]) return undefined

      for (let keyVal of this._storage[hashKey]){
          if (keyVal[0] === key) return keyVal[1]
      }

    }
  
    hashStr(str) {
      let finalHash = 0;
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        finalHash += charCode;
      }
      return finalHash;
    }
  }

  let m = new Hashmap()

  m.set('Malcome', {adress: 100})
  console.log(m.get('Malcome'))