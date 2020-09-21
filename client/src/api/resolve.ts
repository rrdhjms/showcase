export const resolve = async (promise: any) => {
  let resolved = {
    data: { result: null },
    error: null,
  };
  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
};
