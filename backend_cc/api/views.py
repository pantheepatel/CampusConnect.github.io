from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from firebase_admin import credentials, initialize_app, firestore, storage
import os


SecretKey_path=os.getcwd()+"\\api\SecretKey.json"


cred = credentials.Certificate(SecretKey_path)
initialize_app(cred, {"StorageBucket": 'campusconnect-3a629.appspot.com'})
db = firestore.client()
root_ref_user = db.collection("Users")
root_ref_club = db.collection("Clubs")
clubNameId = [doc.id for doc in root_ref_club.stream()] # featch all clubId from firebase

def authentication(requests):
    auth = requests.GET
    
    root_ref_user.document(auth.get("email")).set({
        "email": auth.get("email"),
        "name": auth.get("name"),
        "photo": auth.get("photo")
    })

    return JsonResponse({
        "status": True
    })

def club_add(requests):
    global clubNameId
    
    # bucket = storage.bucket()
    club = requests.GET

    # img_name = "D:/CampusConnect Group project/CampusConnect.github.io/backend_cc/api/i.jpg"
    # blob = bucket.blob(img_name)
    # blob.upload_from_filename(img_name)
    # blob.make_public()
    # print(blob.public_url)

    root_ref_club.add({
        "club_name": club.get("club_name"),
        "club_description": club.get("club_description"),
        "club_date": club.get("club_date"),
        "club_admin": club.get("club_admin")
    })

    clubNameId = [doc.id for doc in root_ref_club.stream()] # featch all clubId from firebase


    return JsonResponse({"status": True})


def club_list(requests):
    clubData = []

    for clubId in clubNameId:
        clubData.append(root_ref_club.document(clubId).get().to_dict())

    return JsonResponse({"clubData":clubData})

def my_club_list(requests):
    myClubData = []
    current_admin = requests.GET.get("admin")

    for clubId in clubNameId:
        db_admin = root_ref_club.document(clubId).get().to_dict()
        if db_admin["club_admin"] == current_admin:
            db_admin["id"] = clubId
            myClubData.append(db_admin)

    return JsonResponse({
        "admin_clubs": myClubData
    })

def club_edit(request):
    club = request.GET
    root_ref_club.document(club.get("id")).set({
        "club_name": club.get("club_name"),
        "club_description": club.get("club_description"),
        "club_date": club.get("club_date"),
        "club_admin": club.get("club_admin")
    })

    return JsonResponse({"status": True})

def club_delete(request):
    club=request.GET
    root_ref_club.document(club.get('id')).delete()
    
    return JsonResponse({"status": True})
    
    



