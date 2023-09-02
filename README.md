# CampusConnect
Full Stack Project in semester 4 

react js
npm install axios
npm install firebase

-----------------------------------------------------------------------------------------------------------------------------------------------
for loading
npm install @mui/material @emotion/react @emotion/styled
-------------------------------------------------------------------------------------------------------------------------------------------------
backend
pip install firebase_admin   if it's not work use pip install firebase-admin


-------------------------------------------------------------------------------------------------------------------------------------------------


for cors protocol

python -m pip install django-cors-headers


INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
]


MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
]



it add sepret 
CORS_ALLOWED_ORIGINS = [
  
    "http://localhost:3000", (write localhost of react)
    
]


CORS_ALLOW_METHODS = (
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
)

