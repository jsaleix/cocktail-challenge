import { COCKTAIl_API_KEY } from "../config/endpoints";

export const authHeaders = () => {
  return {
    "x-api-key": COCKTAIl_API_KEY ? COCKTAIl_API_KEY : "1",
  };
};
