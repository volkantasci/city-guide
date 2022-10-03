import React from 'react'
import "../../styles/UserProfile.css"

export default function UserProfileButton({title, icon}) {
  return (
    <div className='user-profile-button-container'>
        <div className='user-profile-button'>
            <div className='user-profile-button-title'>
                Gecmis Ziyaretler
            </div>
            <div className='user-profile-button-icon'>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.76134 0.654481L4.32113 5.11722L8.78395 7.55748L9.59353 6.07689L7.60491 4.98948C8.06358 4.89234 8.53116 4.84349 9 4.84375C12.6862 4.84375 15.6562 7.81384 15.6562 11.5C15.6562 15.1862 12.6862 18.1562 9 18.1562C5.31384 18.1562 2.34375 15.1862 2.34375 11.5C2.34375 10.7284 2.4743 9.98842 2.71388 9.30025L1.19887 8.54275C0.848719 9.46257 0.65625 10.4593 0.65625 11.5C0.65625 16.0981 4.40189 19.8437 9 19.8437C13.5981 19.8437 17.3438 16.0981 17.3438 11.5C17.3438 6.90189 13.5981 3.15625 9 3.15625C8.3858 3.15625 7.78711 3.22375 7.21031 3.35068L8.24194 1.46397L6.76134 0.654481ZM11.649 6.766L8.57812 11.3723V16.75H10V11.5001L12.5 7.50014L11.649 6.766Z" fill="#757575"/>
                </svg>
            </div>
        </div>
    </div>
  )
}
