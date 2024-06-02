import request from "@/common/request";



const  getUserList = async ({pageSize, pageNum},formData = {}) => {
  const result = await request.get('/api/user/list',{pageSize,pageNum,...formData});
  return result
}

export const UserService = {getUserList}
