from pydantic import BaseModel
from typing import Optional, Literal
from datetime import date


class ChecklistCreate(BaseModel):
    checklist_name: str
    checklist_type: Optional[str] = None
    checklist_category: Optional[str] = None
    checklist_description: Optional[str] = None
    when_required: Optional[str] = None
    effective_start_date: Optional[date] = None
    effective_end_date: Optional[date] = None
    checklist_version: Optional[str] = None
    status: Optional[Literal['ACTIVE', 'INACTIVE', 'DEPRECATED']] = 'ACTIVE'
    created_by: Optional[str] = None
    updated_by: Optional[str] = None


class ChecklistUpdate(BaseModel):
    checklist_name: Optional[str] = None
    checklist_type: Optional[str] = None
    checklist_category: Optional[str] = None
    checklist_description: Optional[str] = None
    when_required: Optional[str] = None
    effective_start_date: Optional[date] = None
    effective_end_date: Optional[date] = None
    checklist_version: Optional[str] = None
    status: Optional[Literal['ACTIVE', 'INACTIVE', 'DEPRECATED']] = None
    updated_by: Optional[str] = None