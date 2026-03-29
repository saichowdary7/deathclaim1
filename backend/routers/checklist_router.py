from fastapi import APIRouter, HTTPException, Request
from services import checklist_service
from schemas.checklist_schema import ChecklistCreate, ChecklistUpdate
import json

router = APIRouter(prefix="/checklists", tags=["Checklists"])

# Helper to print with a box
def log_banner(msg):
    print("\n" + "="*50)
    print(msg)
    print("="*50 + "\n")

@router.get("/")
def get_all():
    log_banner("GET ALL CHECKLISTS")
    return checklist_service.get_all_checklists()


@router.get("/{id}")
def get_by_id(id: int):
    log_banner(f"GET CHECKLIST ID: {id}")
    data = checklist_service.get_checklist_by_id(id)
    if not data or (isinstance(data, dict) and "error" in data):
        raise HTTPException(404, detail="Not found")
    return data


@router.post("/")
def create(payload: ChecklistCreate):
    log_banner(f"CREATE CALL: {payload}")
    data = checklist_service.create_checklist(payload.model_dump())
    if isinstance(data, dict) and "error" in data:
        raise HTTPException(400, detail=data["error"])
    return data


# ✅ PUT (Partial update)
@router.put("/{id}")
async def update(id: int, payload: ChecklistUpdate):
    log_banner(f"UPDATE CALL ID: {id}\nDATA: {payload}")
    data = checklist_service.update_checklist(
        id,
        payload.model_dump(exclude_unset=True)
    )
    if not data or (isinstance(data, dict) and "error" in data):
        err = data.get("error", "Error updating record") if data else "Not found"
        status = 404 if "not found" in str(err).lower() else 400
        raise HTTPException(status, detail=err)
    return data


@router.delete("/{id}")
def delete(id: int):
    log_banner(f"INCOMING DELETE REQUEST FOR ID: {id}")
    data = checklist_service.delete_checklist(id)
    print(f"DEBUG: Service returned: {data}")
    if not data or (isinstance(data, dict) and "error" in data):
        err = data.get("error", "Error deleting record") if data else "Not found"
        print(f"DEBUG: Error occurred: {err}")
        status = 404 if "not found" in str(err).lower() else 400
        raise HTTPException(status, detail=err)
    print("DEBUG: Deletion successful")
    return data