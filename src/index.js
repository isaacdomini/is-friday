export class IsFriday {
  constructor(tz) {
    this._tz = tz || 'UTC'

    return new Proxy(this, {
      get: function (object, methodName) {
        if (Reflect.has(object, methodName)) {
          return Reflect.get(object, methodName);
        } else {
          const methodParts = methodName.match(/is([A-Z]{1}[a-z]+$){1}|(^[a-z]+){1}$/);
          console.log("Method: " + methodName + " Method Parts: " + methodParts)
          if(methodParts === null) {
            throw new Error(`Invalid Method ${methodName}`);
          }
          const check = methodParts[1];
          return function methodMissing() {
            console.log(`Is it a ${check} in ${this._tz}? I can tell you soon!`)
            return false
          }
        }
      }
    });
  }
}

const IsToday = IsFriday

export default IsToday;