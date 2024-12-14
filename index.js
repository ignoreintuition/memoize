const memoize = {};
const mockApi = (n1, n2) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, 2000);
  });
};

const add = async (n1, n2) => {
  const st = new Date();
  const key = n1 < n2 ? `${n1}_${n2}` : `${n2}_${n1}`;
  if (!memoize[key]) {
    memoize[key] = await mockApi(n1, n2);
  }
  // console.log(`Result of ${n1} and ${n2} is ${memoize[key]}`);
  const end = new Date();
  // console.log(`Total Time ${end - st}ms\n`);
  return memoize[key];
};

const test = async () => {
  await add(1, 2);
  await add(2, 3);
  await add(2, 1);
  await add(4, 5);
  await add(5, 4);
};

test();
