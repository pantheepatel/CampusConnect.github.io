from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from firebase_admin import credentials, initialize_app, firestore, storage
import os


SecretKey_path = os.getcwd()+"\\api\SecretKey.json"


cred = credentials.Certificate(SecretKey_path)
initialize_app(cred, {"StorageBucket": 'campusconnect-3a629.appspot.com'})

db = firestore.client()
root_ref_user = db.collection("Users")
root_ref_club = db.collection("Clubs")
# featch all clubId from firebase
clubNameId = [doc.id for doc in root_ref_club.stream()]


def authentication(requests):
    auth = requests.GET
    user=[doc.id for doc in root_ref_user.stream()]
    if auth.get("email") in user:
        pass
    else:
        root_ref_user.document(auth.get("email")).set({
            "userName":auth.get("name"),
            "userEmail":auth.get("email"),
            "userImage":auth.get("photo"),
            "userDOB":"",
            "userBio":"",
            "userInterest":"",
            "userSkill":"",
            "userField":"",
            "userGender":"",
            "userPhone":"",
            "userInsta":"",
            "userLinkedin":"",
            "userPortfolio":"",
            "userGraduationYear":"",
        })
    return JsonResponse({
        "status": True
    })



def profile(requests):
    user = requests.GET
    root_ref_user.document(user.get('email')).set({
        "email": user.get("email"),
        "name": user.get("name"),
        "photo": user.get("photo"),
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

    new_doc_ref = root_ref_club.add({
        "club_name": club.get("club_name"),
        "club_description": club.get("club_description"),
        "club_date": club.get("club_date"),
        "club_admin": club.get("club_admin"),
        "club_image":club.get("club_image"),
        "club_field":club.get("club_field"),
        "club_website": club.get("club_website"),
        
        # "club_teamMember": firestore.ArrayUnion([club.get("club_teammember").split(",")])
    })
    doc_ref=new_doc_ref[1]
    doc_ref.update({"club_id":doc_ref.id})
 
    clubNameId = [doc.id for doc in root_ref_club.stream()] # featch all clubId from firebase


    return JsonResponse({"status": True})


# def club_add(requests):
#     global clubNameId

#     # bucket = storage.bucket()
#     club = requests.GET

#     # img_name = "D:/CampusConnect Group project/CampusConnect.github.io/backend_cc/api/i.jpg"
#     # blob = bucket.blob(img_name)
#     # blob.upload_from_filename(img_name)
#     # blob.make_public()
#     # print(blob.public_url)

#     root_ref_club.add({
#         "club_id": club.get("club_id"),
#         "club_name": club.get("club_name"),
#         "club_description": club.get("club_description"),
#         "club_date": club.get("club_date"),
#         "club_admin": club.get("club_admin"),
#         "club_image": club.get("club_image"),
#         "club_field": club.get("club_field"),
#         "club_website": club.get("club_website"),

#         # "club_teamMember": firestore.ArrayUnion([club.get("club_teammember").split(",")])
#     })

#     # featch all clubId from firebase
#     clubNameId = [doc.id for doc in root_ref_club.stream()]

#     return JsonResponse({"status": True})


def club_list(requests):
    clubData = []

    for clubId in [doc.id for doc in root_ref_club.stream()]:
        clubData.append(root_ref_club.document(clubId).get().to_dict())

    print(clubData)

    return JsonResponse({"clubData": clubData})


def my_club_list(requests):
    myClubData = []
    current_admin = requests.GET.get("admin")

    for clubId in [doc.id for doc in root_ref_club.stream()]:
        db_admin = root_ref_club.document(clubId).get().to_dict()
        if db_admin:
            if db_admin["club_admin"] == current_admin:
                db_admin["id"] = clubId
                myClubData.append(db_admin)
    print(myClubData)

    return JsonResponse({
        "admin_clubs": myClubData
    })


def club_edit(request):
    club = request.GET
    root_ref_club.document(club.get("club_id")).update({
        "club_name": club.get("club_name"),
        "club_description": club.get("club_description"),
        "club_date": club.get("club_date"),
        "club_admin": club.get("club_admin"),
        "club_image": club.get("club_image"),
        "club_website": club.get("club_website"),
        "club_field": club.get("club_field"),
        "club_id": club.get("club_id"),
    })

    return JsonResponse({"status": True})


def club_delete(request):
    club = request.GET
    root_ref_club.document(club.get('id')).delete()

    return JsonResponse({"status": True})


def userData(request):
    user = request.GET
    
    print("user DATA : ", user.get("email"))
    data = root_ref_user.document(user.get("email")).get().to_dict()
    print(data)

    return JsonResponse(data)

def club_details(request):
    club_id=request.GET.get("club_id")
    data=root_ref_club.document(club_id).get().to_dict()
    print(data)
    return JsonResponse(data)

def profile_edit(request):
    user=request.GET
    root_ref_user.document(user.get("userEmail")).set({
        "userName":user.get("userName"),
        "userEmail":user.get("userEmail"),
        "userImage":user.get("userImage"),
        "userDOB":user.get("userDOB"),
        "userBio":user.get("userBio"),
        "userInterest":user.get("userInterest"),
        "userSkill":user.get("userSkill"),
        "userField":user.get("userField"),
        "userGender":user.get("userGender"),
        "userPhone":user.get("userPhone"),
        "userInsta":user.get("userInsta"),
        "userLinkedin":user.get("userLinkedin"),
        "userPortfolio":user.get("userPortfolio"),
        "userGraduationYear":user.get("userGraduationYear"),
         })
    return JsonResponse({
        "status": True
    })


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





