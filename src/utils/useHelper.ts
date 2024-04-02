const useHelper = () => {
  const replaceAtIndex = (
    str: string | undefined,
    index: number,
    char: string
  ) => {
    if (!str) return;
    return str.substring(0, index) + char + str.substring(index + 1);
  };

  return {replaceAtIndex};
};

export default useHelper;
