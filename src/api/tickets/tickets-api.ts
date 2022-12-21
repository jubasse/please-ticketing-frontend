import { BaseApi } from "../base-api"

const ticketsApi = new BaseApi('http://ticketing.dev:8080/api/tickets/');
export const userSignUp = async (username: string, email: string, password: string) => {
    return ticketsApi.post('', { username, email, password });
}

export const getTickets = async () => {
    return ticketsApi.get();
}

export const getTicket = async (id: string) => {
    return ticketsApi.get(id);
}

export const deleteTicket = async (id: string) => {
    return ticketsApi.delete(id);
} 
