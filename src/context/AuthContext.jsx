import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const { children } = props;

  const [globalUser, setGlobalUser] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function logout() {
    setGlobalUser(null);
    setGlobalData(null);
    return signOut(auth);
  }

  useEffect(() => {
  let isMounted = true; // track if component is still mounted

  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    console.log("Current User:", user);

    if (!user) {
      console.log("No active user");
      if (isMounted) {
        setGlobalUser(null);
        setGlobalData(null);
        setIsLoading(false);
      }
      return;
    }

    if (isMounted) setGlobalUser(user); // store full user object

    try {
      if (isMounted) setIsLoading(true);

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (isMounted) {
        if (docSnap.exists()) {
          const firebaseData = docSnap.data();
          console.log("Found user data:", firebaseData);
          setGlobalData(firebaseData);
        } else {
          console.log("No user data found for uid:", user.uid);
          setGlobalData(null);
        }
      }
    } catch (err) {
      console.error("Error fetching user data:", err.message);
    } finally {
      if (isMounted) setIsLoading(false);
    }
  });

  return () => {
    isMounted = false;
    unsubscribe();
  };
}, []);

  const value = {
    globalUser,
    globalData,
    setGlobalData,
    isLoading,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
