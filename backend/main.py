from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routers import project, file, user, prosimos

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(file.router, tags=['Files'], prefix="/api/pix/files")
app.include_router(user.router, tags=['Users'], prefix="/api/pix/users")
app.include_router(project.router, tags=['Projects'], prefix="/api/pix/projects")
# app.include_router(prosimos.router, tags=['Prosimos'], prefix="/api/prosimos")

@app.get('/api/healthchecker')
def root():
    return {'message': 'Hello World'}
