export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched successfully!'), 1000);
  });
}