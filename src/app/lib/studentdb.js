import { env } from "../../../next.config";


// export const Connect_url = "mongodb+srv://"+username+":"+password+"@cluster0.4brsisv.mongodb.net/taskstudentDB?retryWrites=true&w=majority";

export const Connect_url = process.env.MONGODB_URL;

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASIC_API_URL;
