import { API_URL } from "@/util/constants";
import { storage } from "@/util/storage";
import { ApiResponse, ErrorResponse, PaginatedResponse } from "@/util/types";


class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_URL;
  }

  private async getHeaders(): Promise<HeadersInit> {
    const token = await storage.getAuthToken();
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    const data = await response.json();

    if (!response.ok) {
      const error: ErrorResponse = {
        code: response.status.toString(),
        message: data.message || 'Ha ocurrido un error inesperado',
        details: data.details,
      };
      throw error;
    }

    return {
      success: true,
      data,
    };
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${this.baseUrl}${endpoint}${queryString}`, {
      method: 'GET',
      headers: await this.getHeaders(),
    });

    return this.handleResponse<T>(response);
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: await this.getHeaders(),
      body: JSON.stringify(data),
    });

    return this.handleResponse<T>(response);
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: await this.getHeaders(),
      body: JSON.stringify(data),
    });

    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
      headers: await this.getHeaders(),
    });

    return this.handleResponse<T>(response);
  }

  // Métodos específicos para la aplicación
  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> {
    return this.post('/auth/login', { email, password });
  }

  async register(userData: any): Promise<ApiResponse<{ token: string; user: any }>> {
    return this.post('/auth/register', userData);
  }

  async forgotPassword(email: string): Promise<ApiResponse<void>> {
    return this.post('/auth/forgot-password', { email });
  }

  async resetPassword(token: string, password: string): Promise<ApiResponse<void>> {
    return this.post('/auth/reset-password', { token, password });
  }

  async getCourses(page: number = 1, limit: number = 10): Promise<ApiResponse<PaginatedResponse<any>>> {
    return this.get('/courses', { page, limit });
  }

  async getCourseById(id: string): Promise<ApiResponse<any>> {
    return this.get(`/courses/${id}`);
  }

  async getSimulations(page: number = 1, limit: number = 10): Promise<ApiResponse<PaginatedResponse<any>>> {
    return this.get('/simulations', { page, limit });
  }

  async getSimulationById(id: string): Promise<ApiResponse<any>> {
    return this.get(`/simulations/${id}`);
  }

  async getProgress(): Promise<ApiResponse<any>> {
    return this.get('/progress');
  }

  async updateProfile(userData: any): Promise<ApiResponse<any>> {
    return this.put('/profile', userData);
  }

  async updateSettings(settings: any): Promise<ApiResponse<any>> {
    return this.put('/settings', settings);
  }
}

export const api = new ApiService(); 