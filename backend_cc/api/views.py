from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from firebase_admin import credentials, initialize_app, firestore

cred = credentials.Certificate(r"D:\CampusConnect Group project\CampusConnect.github.io\backend_cc\api\SecretKey.json")
initialize_app(cred)

db = firestore.client()
root_ref = db.collection("Users")

