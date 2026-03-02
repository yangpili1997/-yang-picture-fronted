// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 此处后端没有提供注释 POST /picture/delete */
export async function deletePicture(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/picture/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /picture/edit */
export async function editPicture(body: API.PictureEditRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/picture/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 GET /picture/get */
export async function getPictureById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPictureByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePicture>('/picture/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 GET /picture/get/vo */
export async function getPictureVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPictureVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePictureVO>('/picture/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /picture/list/page */
export async function listPictureByPage(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePicture>('/picture/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /picture/list/page/vo */
export async function listPictureVoByPage(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePictureVO>('/picture/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /picture/review */
export async function doPictureReview(
  body: API.PictureReviewRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/picture/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 GET /picture/tag_category */
export async function listPictureTagCategory(options?: { [key: string]: any }) {
  return request<API.BaseResponsePictureTagCategory>('/picture/tag_category', {
    method: 'GET',
    ...(options || {}),
  })
}

/** 此处后端没有提供注释 POST /picture/update */
export async function updatePicture(
  body: API.PictureUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/picture/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

export async function uploadPicture(
  params: API.uploadPictureParams,
  body: {
    file?: any // 这里的 file 对应后端 @RequestPart("file")
  },
  options?: { [key: string]: any },
) {
  // 1. 创建 FormData 对象
  const formData = new FormData()

  // 2. 将文件添加到 FormData 中
  // 注意：这里的 'file' 必须与后端 @RequestPart("file") 保持一致
  if (body.file) {
    formData.append('file', body.file)
  }

  // 3. 将其他业务参数（PictureUploadRequest）添加到 FormData
  // 如果 params 中包含 id 等信息，也需要 append 进去
  if (params) {
    Object.keys(params).forEach((key) => {
      const value = (params as any)[key]
      if (value !== undefined && value !== null) {
        formData.append(key, value)
      }
    })
  }

  // 4. 发起请求
  return request<API.BaseResponsePictureVO>('/picture/upload', {
    method: 'POST',
    // 注意：在使用 FormData 时，通常不需要手动设置 'Content-Type'
    // 浏览器会自动识别并添加 boundary 分隔符。
    // 如果手动硬编码为 'multipart/form-data'，反而可能导致后端报错（缺少 boundary）
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData, // 这里发送的是 formData，而不是原始的 body
    ...(options || {}),
  })
}
/** 此处后端没有提供注释 POST /picture/upload/url */
export async function uploadPictureByUrl(
  body: API.PictureUploadRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePictureVO>('/picture/upload/url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
