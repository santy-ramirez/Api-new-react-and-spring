import http from "../http-common";

const getAll = () => {
  return http.get("/author");
};

const create = data => {
  console.log(data)
  return http.post("/author", data);

};
 
const AuthorService = {
  getAll,
  create,
 
};
export default AuthorService;