import { env } from "../../../next.config";

const username ="keyurpansuriya88";
const password ="0DaT3QFaXRiby8VZ";

export const Connect_url = "mongodb+srv://"+username+":"+password+"@cluster0.4brsisv.mongodb.net/taskstudentDB?retryWrites=true&w=majority";

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASIC_API_URL;
