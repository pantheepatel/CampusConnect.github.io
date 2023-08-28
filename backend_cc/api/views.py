from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from firebase_admin import credentials, initialize_app, firestore
import os


SecretKey_path=os.getcwd()+"\\api\SecretKey.json"


cred = credentials.Certificate(SecretKey_path)
initialize_app(cred)
db = firestore.client()
root_ref = db.collection("Users")
root_ref_club = db.collection("Clubs")

def authentication(requests):
    auth = requests.GET
    
    root_ref.document(auth.get("email")).set({
        "email": auth.get("email"),
        "name": auth.get("name"),
        "photo": auth.get("photo")
    })

    return JsonResponse({
        "status": True
    })

def club_add(requests):
    club = requests.GET

    root_ref_club.add({
        "club_name": club.get("club_name"),
        "club_description": club.get("club_description"),
        "club_date": club.get("club_date"),
        "club_admin": club.get("club_admin")
    })

    return JsonResponse({"status": True})


def club_list(requests):
    clubNameId = [doc.id for doc in root_ref_club.stream()] # featch all clubId from firebase
    clubData = []

    for clubId in clubNameId:
        clubData.append(root_ref_club.document(clubId).get().to_dict())

    return JsonResponse({"clubData":clubData})
        
    



