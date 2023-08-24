
import { URL } from "./../shared/urlConstants";
import axios from "axios";
const server = URL.SERVER;

const UnitOfWork = {
  postAsync: async function (url:string, oData: object, config = undefined) {
    const res = await axios.post(server + url, oData, config);
    return res.data;
  },
  getAsync: async (url:string) => {
    const res = await axios.get(server + url);
    return res.data;
  }

};

export default UnitOfWork;
