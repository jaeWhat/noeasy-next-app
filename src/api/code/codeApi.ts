import api from '@/api/AxiosInstance';
import { Code } from '@/api/types';
import { handleError } from '@/api/errorUtils';

// GET: 코드 조회
export const getCode = async (): Promise<Code[]> => {
    try {
    const response = await api.get<Code[]>('/comm/code');

    return response.data;
  } catch (error) {
    handleError(error, '코드 조회');
    return [];
  }
};

// POST: 코드 생성
export const postCode = async (data: Partial<Code[]>): Promise<boolean> => {
  try {
    const response = await api.post('/comm/code', data);

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '코드 생성');
    return false;
  }
};

// PUT: 코드 수정
export const putCode = async (data: Partial<Code[]>): Promise<boolean> => {
  try {
    const response = await api.put('/comm/code', data);

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '코드 수정');
    return false;
  }
};

// DELETE: 코드 삭제 (주의: axios.delete는 data를 config에 넣어야 함)
export const deleteCode = async (data: Partial<Code[]>): Promise<boolean> => {
  try {
    const response = await api.delete('/comm/code', {
      data, // axios의 delete는 두 번째 인자로 config 객체를 받음
    });

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '코드 삭제');
    return false;
  }
};