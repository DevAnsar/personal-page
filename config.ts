interface MyConfigInterface {
  Base_URL: string;
  API_URL: String;
}
export const myConfig: MyConfigInterface = {
  Base_URL:"http://localhost:8000",
  API_URL:"http://localhost:8000/api",
  // Base_URL: "https://server.ansarmirzayi.ir",
  // API_URL: "https://server.ansarmirzayi.ir/api",
};
