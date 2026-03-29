from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import checklist_router
import logging
import sys

# Configure root logger to output to stdout
logging.basicConfig(
    level=logging.INFO,
    format="%(levelname)s: %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)

app = FastAPI(title="Death Claims API")

# ✅ Fully Permissive CORS for dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def log_requests(request, call_next):
    # Print directly as well just in case logging is swallowed
    print(f"DEBUG: Incoming {request.method} {request.url}")
    response = await call_next(request)
    print(f"DEBUG: Response {response.status_code}")
    return response

app.include_router(checklist_router.router)