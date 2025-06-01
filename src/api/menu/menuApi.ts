import api from '@/api/AxiosInstance';
import { Menu } from '@/api/types';
import { handleError } from '@/api/errorUtils';

// GET: 메뉴 조회
export const getMenu = async (): Promise<Menu[]> => {
    try {
    console.log("MenuApi getMenu()");
    const response = await api.get<Menu[]>('/comm/menu');

    return response.data;
  } catch (error) {
    handleError(error, '메뉴 조회');
    return [];
  }
};

// POST: 메뉴 생성
export const postMenu = async (data: Partial<Menu[]>): Promise<boolean> => {
  try {
    const response = await api.post('/comm/menu', data);

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '메뉴 생성');
    return false;
  }
};

// PUT: 메뉴 수정
export const putMenu = async (data: Partial<Menu[]>): Promise<boolean> => {
  try {
    const response = await api.put('/comm/menu', data);

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '메뉴 수정');
    return false;
  }
};

// DELETE: 메뉴 삭제 (주의: axios.delete는 data를 config에 넣어야 함)
export const deleteMenu = async (data: Partial<Menu[]>): Promise<boolean> => {
  try {
    const response = await api.delete('/comm/menu', {
      data, // axios의 delete는 두 번째 인자로 config 객체를 받음
    });

    if(response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    handleError(error, '메뉴 삭제');
    return false;
  }
};