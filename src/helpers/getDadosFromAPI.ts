import api from '../Api';

const getDadosFromApi = async (params:string) => {
    const result = await api.get(params)

    return result.data
}

export default getDadosFromApi