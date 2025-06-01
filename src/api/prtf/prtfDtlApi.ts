import api from '@/api/AxiosInstance';
import { PrtfDtl } from '@/api/types';
import { handleError } from '@/api/errorUtils';

// GET: 포트폴리오 조회
export const getPrtfDtl = async (): Promise<PrtfDtl[]> => {
    try {
    console.log("PrtfDtlApi getPrtfDtl()");
    const response = await api.get<PrtfDtl[]>('/comm/prtf/dtl');

    return response.data;
  } catch (error) {
    handleError(error, '포트폴리오 조회');
    return [];
  }
};

// POST: 포트폴리오 생성
export const postPrtfDtl = async (data: Partial<PrtfDtl[]>): Promise<boolean> => {
  try {
    const response = await api.post('/comm/prtf/dtl', data);

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '포트폴리오 생성');
    return false;
  }
};

// PUT: 포트폴리오 수정
export const putPrtfDtl = async (data: Partial<PrtfDtl[]>): Promise<boolean> => {
  try {
    const response = await api.put('/comm/prtf/dtl', data);

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '포트폴리오 수정');
    return false;
  }
};

// DELETE: 포트폴리오 삭제 (주의: axios.delete는 data를 config에 넣어야 함)
export const deletePrtfDtl = async (data: Partial<PrtfDtl[]>): Promise<boolean> => {
  try {
    const response = await api.delete('/comm/prtf/dtl', {
      data, // axios의 delete는 두 번째 인자로 config 객체를 받음
    });

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '포트폴리오 삭제');
    return false;
  }
};