import path from "path";

export const filePath = (fPath: any) => {
  const storagePath = path.resolve(__dirname, "..", "..", "..", fPath);
  // console.log('path------From helper', storagePath);
  return storagePath;
};

export const getEnumKeys = (data: Record<string, any>): Array<string> => {
  const array: Array<string> = [];
  for (const [key, value] of Object.entries(data)) {
    array.push(value.toString());
  }

  return array;
};
