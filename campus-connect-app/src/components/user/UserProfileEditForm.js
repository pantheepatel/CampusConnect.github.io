import React from 'react'

function UserProfileEditForm() {
  // this form will be displayed when user clicks on edit or add button from their profile page
  let userProfileForm=[
    {
      interest:['abc','pqr','hao'],
      main_branch:'Law',
      bio: 'student and researcher',
      link_insta:'url:insta',
      link_linkedIn:'url:linkedIn',
    }
  ]
  return (
    <div>UserProfileEditForm</div>
  )
}

export default UserProfileEditForm