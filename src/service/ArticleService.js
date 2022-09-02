import http from "../http-common"

const getAll = ()=>{
    return http.get("/article")
};

const create = data => {
    console.log(data)
    return http.post("/article", data);
  
  };

const search = (data)=>{
    return http.get("/article?query=" + data)
}  

const ArticleService = {
    getAll,
    create,
    search
};
export default ArticleService;