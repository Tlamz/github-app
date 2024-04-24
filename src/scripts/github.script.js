// in this file 
// get a list of all my github repo
// get a single repo
// /users/Tlamz/repos
// /repositories/712850953'

const baseUrl = 'https://api.github.com';
const username = 'Tlamz';
const cache = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getCache = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

const api = async (url) => {
    try {
        const response = await fetch(url);
        const payload = await response.json();
        if (response?.ok) {
            return payload;
        } else {
            return null;
        }
    } catch (e) {
        console.log(e)
    }

}

export const getAllRepos = async () => {
    const val = getCache('page1');
    if (val) {
        return val;
    }
    const response = await api(`${baseUrl}/users/${username}/repos`);
    if (!response) {
        return [];
    }
    cache('page1', response);
    return response;
}

export const getRepo = async (repoId) => {
    const val = getCache(repoId);
    if (val) {
        return val;
    }
    const response = await api(`${baseUrl}/repositories/${repoId}`);
    if (!response) {
        return null;
    }
    // console.log('payload', response);
    cache(repoId, response);
    return response;
}

