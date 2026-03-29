const API_URL = process.env.NEXT_PUBLIC_API_URL + '/checklists';

export interface Checklist {
  id?: number;
  checklist_name: string;
  checklist_type?: string;
  checklist_category?: string;
  checklist_description?: string;
  when_required?: string;
  effective_start_date?: string;
  effective_end_date?: string;
  checklist_version?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED';
  created_by?: string;
  updated_by?: string;
  created_at?: string;
  updated_at?: string;
}

export const getChecklists = async () => {
  const res = await fetch(`${API_URL}/`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export const createChecklist = async (data: Checklist) => {
  const res = await fetch(`${API_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create');
  return res.json();
};

export const updateChecklist = async (id: number, data: Partial<Checklist>) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update');
  return res.json();
};

export const deleteChecklist = async (id: number) => {
  console.log(`ATTEMPTING TO DELETE CHECKLIST ID: ${id}`);
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  console.log(`DELETE RESPONSE STATUS: ${res.status}`);
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error('DELETE FAILED:', errorData);
    throw new Error(errorData.detail || 'Failed to delete');
  }
  return res.json();
};
