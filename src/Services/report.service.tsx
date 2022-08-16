/* eslint-disable @typescript-eslint/no-explicit-any */
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/records/';

type ReportInput = {
  equipment: string;
  reportDate: string;
  user: string;
  description: string;
  type: string;
  priority: string;
};

export const getAllReports = async (id: string) => {
  const token = authHeader();
  const reports: object[] = await fetch(`${API_URL}getAll\\${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data;
    });
  return reports;
};

export const getReportById = async (id: string) => {
  const token = await authHeader();

  const report = await fetch(`${API_URL}${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  }).then((res) => res.json());
  return report;
};

export const createReport = async (report: ReportInput) => {
  const token = await authHeader();
  const res = await fetch(`${API_URL}register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(report),
  });
  return res;
};

export const getAmountReportsByArea = async (id: string) => {
  const token = await authHeader();

  const report = await fetch(`${API_URL}byArea/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  }).then((res) => res.json());
  return report;
};
