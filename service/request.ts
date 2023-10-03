/* eslint-disable @typescript-eslint/no-unused-vars */
/**
*  nuxt项目目录/composables/http.ts
*/
//  基于useFetch()的网络请求封装
import { ElMessage } from 'element-plus'
// 全局基础URL
const BASEURL: string = "http://127.0.0.1:3000";  // 全局后台服务器请求地址

// 定义ts变量类型接口
interface HttpParms {
    baseURL?: string,  // 请求的基本URL，即后台服务器地址，（若服务器请求地址只有一个，可不填）
    url: string,      // 请求api接口地址
    method?: any,   // 请求方法
    query?: any,       // 添加查询搜索参数到URL
    body?: any         // 请求体
}


export const servers = (obj: HttpParms) => {
    const request = new Promise<void>((resolve, reject) => {
        useFetch(
            (obj.baseURL ?? BASEURL) + obj.url,
            {
                method: obj.method ?? "GET",
                query: obj?.query ?? null,
                body: obj?.body ?? null,
                onRequestError({ request, options, error }) {
                    // 处理请求错误
                    ElMessage(error.message)
                    reject(error)
                },
                onResponse({ request, response, options }) {
                    // 处理响应数据
                    resolve(response._data)
                },
                onResponseError({ request, response, options,error }) {
                    // 处理响应错误
                    ElMessage(error)
                    reject(error)
                }
            },

        )
    })
    return request;
}
