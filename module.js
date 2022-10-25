import submodule from './submodule.js';
const subpow = submodule.subpow;

const pow = (a,n) => {

  if (subpow(a,n)) {
    let result = 1;
    for (let i = 0; i<n; i++) {
      result *= a;
    }
    return result;
  } else {
    return null;
  }

}

module.exports = {
  pow: pow,
}
