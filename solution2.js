function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  for (const key in newObj) {
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    }
  }

  for (const key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    }
  }

  for (const key in oldObj) {
    if (
      key in newObj &&
      oldObj[key] !== newObj[key]
    ) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  return result;
}
console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" }
  )
);
{
  added: { city: 'Kingston' },
  removed: { country: 'Jamaica' },
  changed: {
    role: {
      from: 'Engineer',
      to: 'Senior Engineer'
    }
  }
}