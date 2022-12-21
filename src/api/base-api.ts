import { useEffect, useState } from "react"

export class BaseApi {
    constructor(baseUrl: string) {}
    public get(path?: string) {
        return this._request('GET', path);
    }
    public post(path?: string, body?: any) {
        return this._request('GET', path, body);
    }
    public update(path?: string, body?: any) {
        return this._request('GET', path, body);
    }
    public delete(path?: string) {
        return this._request('DELETE', path);
    }
    private async _request(method: string, path: string = '', body?: any) {
        const result = await fetch(path, {
            method,
            mode: 'cors',
            body: JSON.stringify(body)
        });
        console.log('result', result);
        return result.json();
    }
}

export const useRequest = (method: string, url: string, data?: any) => {
    const [isLoading, setLoading] = useState(false);
    const [result, setResult] = useState();
    const [error, setError] = useState<Error>();
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
          try {
            let response = await fetch(url);
            let result = await response.json();
            setResult(result);
          } catch (error) {
            setError(error as Error);
          } finally {
            setLoading(false);
          }
        };
        loadData();
      }, []);

    return [result, isLoading, error];
}
