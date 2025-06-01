import api from '@/api/AxiosInstance';
import { PrtfMst } from '@/api/types';
import { handleError } from '@/api/errorUtils';

// GET: 포트폴리오 조회
export const getPrtfMst = async (): Promise<PrtfMst[]> => {
    try {
    console.log("PrtfMstApi getPrtfMst()");
    const response = await api.get<PrtfMst[]>('/comm/prtf/mst');

    return response.data;
  } catch (error) {
    handleError(error, '포트폴리오 조회');
    return [];
  }
};

// POST: 포트폴리오 생성
export const postPrtfMst = async (data: Partial<PrtfMst[]>): Promise<boolean> => {
  try {
    const response = await api.post('/comm/prtf/mst', data);

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
export const putPrtfMst = async (data: Partial<PrtfMst[]>): Promise<boolean> => {
  try {
    const response = await api.put('/comm/prtf/mst', data);

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
export const deletePrtfMst = async (data: Partial<PrtfMst[]>): Promise<boolean> => {
  try {
    const response = await api.delete('/comm/prtf/mst', {
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