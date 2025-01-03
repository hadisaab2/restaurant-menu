export const deepEqual = (obj1, obj2) => {
    const isObject = (obj) => obj && typeof obj === 'object';
  
    if (!isObject(obj1) || !isObject(obj2)) {
      return obj1 === obj2;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        // Sort arrays before comparison
        if (!deepEqual(obj1[key].sort(), obj2[key].sort())) {
          return false;
        }
      } else if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  };