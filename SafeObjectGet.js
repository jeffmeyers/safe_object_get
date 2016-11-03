const safeObjectGet = (obj, path) => {
  if (!obj) return null;
  if (!path) return obj;

  const splitPath = path.split('.');
  const nextObj = obj[splitPath[0]];

  if (nextObj) {
    if (splitPath.length === 1) return nextObj;

    const remainingPath = splitPath.slice(1).join('.');
    return safeObjectGet(nextObj, remainingPath);
  }

  return null;
};

module.exports = safeObjectGet;
