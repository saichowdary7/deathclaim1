from db.connection import get_connection


# ✅ Only allowed update fields (NO DATE)
UPDATABLE_FIELDS = {
    "checklist_name",
    "checklist_type",
    "checklist_category",
    "checklist_description",
    "when_required",
    "effective_start_date",
    "effective_end_date",
    "checklist_version",
    "status",
    "updated_by"
}


# ✅ Clean input (ignore swagger + empty + whitespace)
def clean_input(data: dict):
    cleaned = {}

    for k, v in data.items():
        if v is None:
            continue

        # ignore swagger default
        if v == "string":
            continue

        # ignore empty string / whitespace
        if isinstance(v, str) and v.strip() == "":
            continue

        cleaned[k] = v

    return cleaned


# ✅ GET ALL
def get_all_checklists():
    conn = get_connection()
    try:
        with conn.cursor() as cursor:
            cursor.execute("""
                SELECT * FROM checklist_masters
                WHERE is_deleted = 0
                ORDER BY id ASC
            """)
            return cursor.fetchall()
    except Exception as e:
        return {"error": str(e)}
    finally:
        conn.close()


# ✅ GET BY ID
def get_checklist_by_id(checklist_id: int):
    conn = get_connection()
    try:
        with conn.cursor() as cursor:
            cursor.execute("""
                SELECT * FROM checklist_masters
                WHERE id=%s AND is_deleted=0
            """, (checklist_id,))
            return cursor.fetchone()
    except Exception as e:
        return {"error": str(e)}
    finally:
        conn.close()


# ✅ CREATE
def create_checklist(data: dict):
    conn = get_connection()
    try:
        clean_data = clean_input(data)

        # mandatory validation
        if not clean_data.get("checklist_name"):
            return {"error": "checklist_name is required"}

        with conn.cursor() as cursor:
            cursor.execute("""
                INSERT INTO checklist_masters (
                    checklist_name, checklist_type, checklist_category,
                    checklist_description, when_required,
                    effective_start_date, effective_end_date,
                    checklist_version, status, created_by, updated_by
                )
                VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
            """, (
                clean_data.get("checklist_name"),
                clean_data.get("checklist_type"),
                clean_data.get("checklist_category"),
                clean_data.get("checklist_description"),
                clean_data.get("when_required"),
                clean_data.get("effective_start_date"),
                clean_data.get("effective_end_date"),
                clean_data.get("checklist_version"),
                clean_data.get("status", "ACTIVE"),
                clean_data.get("created_by"),
                clean_data.get("updated_by"),
            ))

            return {
                "message": "Created successfully",
                "id": cursor.lastrowid,
                "inserted_data": clean_data
            }

    except Exception as e:
        return {"error": str(e)}
    finally:
        conn.close()


# ✅ UPDATE
def update_checklist(checklist_id: int, data: dict):
    conn = get_connection()
    try:
        with conn.cursor() as cursor:

            # check existence
            cursor.execute("""
                SELECT id FROM checklist_masters
                WHERE id=%s AND is_deleted=0
            """, (checklist_id,))
            if not cursor.fetchone():
                return {"error": "Checklist not found"}

            clean_data = clean_input(data)

            # filter only allowed fields
            update_fields = {
                k: v for k, v in clean_data.items()
                if k in UPDATABLE_FIELDS
            }

            if not update_fields:
                return {"message": "No valid fields to update"}

            # dynamic query
            set_clause = ", ".join([f"{key}=%s" for key in update_fields.keys()])
            values = list(update_fields.values())
            values.append(checklist_id)

            query = f"""
                UPDATE checklist_masters
                SET {set_clause}
                WHERE id=%s
            """

            cursor.execute(query, tuple(values))

            return {
                "message": "Updated successfully",
                "updated_fields": update_fields
            }

    except Exception as e:
        return {"error": str(e)}
    finally:
        conn.close()


# ✅ DELETE
def delete_checklist(checklist_id: int):
    conn = get_connection()
    try:
        with conn.cursor() as cursor:

            cursor.execute("""
                SELECT id FROM checklist_masters
                WHERE id=%s AND is_deleted=0
            """, (checklist_id,))
            if not cursor.fetchone():
                return {"error": "Checklist not found"}

            cursor.execute("""
                DELETE FROM checklist_masters
                WHERE id=%s
            """, (checklist_id,))

            return {"message": "Deleted successfully"}

    except Exception as e:
        return {"error": str(e)}
    finally:
        conn.close()