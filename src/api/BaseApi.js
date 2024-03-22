import Config from "../config";

const BaseApi = axios.create({
    baseURL: Config.apiUrl,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default BaseApi




