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

const updateAuthor = (id,data) => {
  console.log("http:"+id);
  console.log("http:"+data);


  return http.put(`/author/${id}`,data)
}
 
const AuthorService = {
  getAll,
  create,
  deleteAthor,
  updateAuthor,
 
};
export default AuthorService;