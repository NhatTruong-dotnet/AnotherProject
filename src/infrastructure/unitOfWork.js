
import { URL } from "../shared/constants/urlConstants";
import axios from "axios";
const server = URL.SERVER;

const UnitOfWork = {
  postAsync: async function (url, doc, config = undefined) {
    const res = await axios.post(server + url, doc, config);
    return res.data;
  },
  getAsync: async (url) => {
    const res = await axios.get(server + url);
    return res.data;
  }

};

export default UnitOfWork;
