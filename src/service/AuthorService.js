import http from "../http-common";

const getAll = () => {
  return http.get("/author");
};

const create = data => {
  console.log(data)
  return http.post("/author", data);

};

const deleteAthor = (id) =>{
  console.log(`id en service/${id}`);
  return http.delete(`/author/${id}`); 
};
 
const AuthorService = {
  getAll,
  create,
  deleteAthor
 
};
export default AuthorService;