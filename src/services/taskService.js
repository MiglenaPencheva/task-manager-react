const url = 'http://localhost:5000';

export const getAll = async () => {
    try {
        const res = await fetch(url + '/data/all').json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getAllCompleted = async () => {
    try {
        const res = (await fetch(url + '/data/archive')).json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getToDoList = async () => {
    try {
        const res = (await fetch(url + '/data/to-do')).json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getMyTasks = async () => {
    try {
        const res = (await fetch(url + '/data/my-tasks')).json();
        return await res.json();
    } catch (error) {
        return { msg: error };
    }
};

export const getOne = async (taskId) => {
    return await (await fetch(url + '/data/' + taskId)).json();
};

export const create = async (body) => {
    console.log(body);
    try {
        const res = await fetch(url + '/data/', {
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
    return await (await fetch(url + '/data/' + taskId + '/complete')).json();
};