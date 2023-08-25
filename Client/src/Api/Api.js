import axios from 'axios'

const url = "http://localhost:2015/api";

export const register = async (input) =>
  await axios.post(`${url}/registration`, input).then((res) => {
    return res;
  })
.catch((err) => {
  console.log(err);
});
export const logIn = async (input) => await axios.post(`${url}/logIn`, input);
