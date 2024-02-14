import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem('token');
        // console.log(token);
        if(token){
            config.headers.Authorization= `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        console.log("hi");
        return Promise.reject(error);
    }
)
export default instance;