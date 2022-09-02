import http from "../http-common"

const getAll = ()=>{
    return http.get("/article")
};

const create = data => {
    console.log(data)
    return http.post("/article", data);
  
  };

const ArticleService = {
    getAll,
    create
};
export default ArticleService;