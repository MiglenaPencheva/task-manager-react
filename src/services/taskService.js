const url = 'http://localhost:5000/api/data/';

export const getAll = async () => {
    try {
        const res = await fetch(url + 'all').json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getAllCompleted = async () => {
    try {
        const res = (await fetch(url + 'archive')).json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getToDoList = async () => {
    try {
        const res = (await fetch(url + 'to-do')).json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getMyTasks = async () => {
    try {
        const res = (await fetch(url + 'my-tasks')).json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getOne = async (taskId) => {
    return await (await fetch(url + taskId)).json();
};

export const create = async (body) => {
    try {
        const res = await fetch(url + 'create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const complete = async (taskId, userId) => {
    return await (await fetch(url + taskId + '/complete')).json();
};