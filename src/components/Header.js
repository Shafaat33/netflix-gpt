import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userReducer";
import { LOGO } from "./utils/constants";

const Header = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error');
    });
  }

  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    
    return () => unsubscirbe();
  }, []);

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
        className="w-44"
        alt="logo" 
        src={LOGO}
      />
      {user && (
        <div className="flex p-2">
        <img
          className="h-12 w-12"
          alt="user-icon"
          src={user.photoURL}
        />
        <button 
          className="font-bold text-white"
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>
      )}
    </div>
  )
}

export default Header;